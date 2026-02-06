/**
 * Analytics Service
 * Core analytics calculations including tire degradation, predictions, and insights
 */

import { TireDegradationAnalysis, BrakingAnalysis, StrategyOption } from '@types/analytics';
import { TelemetryPoint, Lap, TireCompound } from '@types/telemetry';

class AnalyticsService {
  /**
   * Calculate tire degradation curve
   */
  calculateTireDegradation(
    lapTimes: number[],
    compound: TireCompound
  ): TireDegradationAnalysis {
    if (lapTimes.length < 3) {
      throw new Error('Need at least 3 laps for degradation analysis');
    }

    // Calculate degradation rate using linear regression
    const n = lapTimes.length;
    const lapNumbers = Array.from({ length: n }, (_, i) => i + 1);

    let sumX = 0,
      sumY = 0,
      sumXY = 0,
      sumX2 = 0;

    for (let i = 0; i < n; i++) {
      sumX += lapNumbers[i];
      sumY += lapTimes[i];
      sumXY += lapNumbers[i] * lapTimes[i];
      sumX2 += lapNumbers[i] ** 2;
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
    const intercept = (sumY - slope * sumX) / n;

    // Determine performance window
    const optimalLap = Math.round(n * 0.3); // Usually best in first 30% of life
    const performanceStart = Math.max(1, optimalLap - 5);
    const performanceEnd = Math.min(n, optimalLap + 10);

    return {
      compound,
      startLap: 1,
      endLap: n,
      degradationRate: slope,
      expectedLife: Math.round(Math.max(lapTimes) / 100), // Simplified
      optimalTemperature: 85 + (compound === 'SOFT' ? 5 : compound === 'HARD' ? -5 : 0),
      performanceWindow: {
        start: performanceStart,
        end: performanceEnd,
        peakPerformance: optimalLap,
      },
    };
  }

  /**
   * Analyze braking patterns
   */
  analyzeBraking(telemetryData: TelemetryPoint[], driverId: string): BrakingAnalysis {
    const brakingPoints = telemetryData.filter((t) => t.brake > 10);

    if (brakingPoints.length === 0) {
      throw new Error('No braking data found');
    }

    const brakingDistances = brakingPoints.map((p) => p.distance);
    const avgBrakingPoint =
      brakingDistances.reduce((a, b) => a + b, 0) / brakingDistances.length;

    const temperatures = brakingPoints.map((p) => p.brakeTemp);
    const avgTemp = temperatures.reduce((a, b) => a + b, 0) / temperatures.length;
    const maxTemp = Math.max(...temperatures);

    return {
      driverId,
      avgBrakingPoint,
      brakeTemperatureAvg: avgTemp,
      maxBrakeTemperature: maxTemp,
      pedalPressureProfile: {
        initial: 0,
        peak: 100,
        release: 50,
      },
      consistencyScore: 85,
    };
  }

  /**
   * Generate race strategy options
   */
  generateStrategyOptions(
    lapTimes: number[],
    totalLaps: number
  ): StrategyOption[] {
    const strategies: StrategyOption[] = [
      {
        id: 'one-stop',
        name: 'One Stop',
        compounds: ['SOFT', 'HARD'],
        pitLaps: [Math.round(totalLaps / 2)],
        predictedFinishTime: Math.max(...lapTimes) * totalLaps,
        confidenceScore: 85,
        riskLevel: 'low',
        pros: ['Fewer pit losses', 'Simple execution'],
        cons: ['Long stints on tires', 'Higher tire degradation'],
      },
      {
        id: 'two-stop',
        name: 'Two Stop',
        compounds: ['SOFT', 'MEDIUM', 'HARD'],
        pitLaps: [Math.round(totalLaps / 3), Math.round((2 * totalLaps) / 3)],
        predictedFinishTime: Math.max(...lapTimes) * totalLaps * 0.95,
        confidenceScore: 75,
        riskLevel: 'medium',
        pros: ['Better tire management', 'Flexibility'],
        cons: ['More pit time', 'Complex timing'],
      },
    ];

    return strategies;
  }

  /**
   * Predict performance based on current parameters
   */
  predictPerformance(currentLapTime: number, fuelLoad: number, tireAge: number) {
    // Simplified prediction model
    const fuelPenalty = (fuelLoad / 100) * 0.5; // 0.5ms per 1% fuel
    const tirePenalty = (tireAge / 50) * 2; // 2ms per lap age

    return {
      predictedLapTime: currentLapTime + fuelPenalty + tirePenalty,
      fuelPenalty,
      tirePenalty,
      confidence: 0.75,
    };
  }
}

export default new AnalyticsService();
