/**
 * Analytics and performance calculation result types
 */

import { TireCompound } from './telemetry';

export interface PerformanceDelta {
  driver1: string;
  driver2: string;
  sector1Delta: number;
  sector2Delta: number;
  sector3Delta: number;
  totalDelta: number;
  bestSectorDelta: string;
}

export interface TireDegradationAnalysis {
  compound: TireCompound;
  startLap: number;
  endLap: number;
  degradationRate: number; // ms per lap
  expectedLife: number; // laps
  optimalTemperature: number; // celsius
  performanceWindow: {
    start: number; // lap number
    end: number; // lap number
    peakPerformance: number; // lap number
  };
}

export interface BrakingAnalysis {
  driverId: string;
  avgBrakingPoint: number; // meters before corner
  brakeTemperatureAvg: number; // celsius
  maxBrakeTemperature: number;
  pedalPressureProfile: {
    initial: number; // 0-100%
    peak: number;
    release: number;
  };
  consistencyScore: number; // 0-100
}

export interface StrategyOption {
  id: string;
  name: string;
  compounds: TireCompound[];
  pitLaps: number[];
  predictedFinishTime: number; // milliseconds
  confidenceScore: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high';
  pros: string[];
  cons: string[];
}

export interface DriverProfile {
  driverId: string;
  name: string;
  brakingStyle: 'aggressive' | 'balanced' | 'smooth';
  throttleDelivery: 'sharp' | 'progressive' | 'smooth';
  cornerSpeed: 'late' | 'balanced' | 'early';
  riskTolerance: 'low' | 'medium' | 'high';
  setupSensitivity: {
    downforce: number; // ms per unit change
    rideHeight: number;
    brakeBias: number;
    wingBalance: number;
  };
  strengths: string[];
  weaknesses: string[];
}

export interface RaceSummary {
  raceId: string;
  date: string;
  circuit: string;
  overallAssessment: string;
  driverAssessments: {
    driverId: string;
    driverName: string;
    overallPerformance: string;
    strengths: string[];
    weaknesses: string[];
    highlights: string[];
    improvements: string[];
  }[];
  carPerformance: string;
  strategyAnalysis: string;
  predictions: string;
  keyLearnings: string[];
  recommendations: string[];
}

export interface SetupSensitivityMap {
  downforceSensitivity: {
    change: number; // units
    lapTimeDelta: number; // ms
    confidence: number; // 0-100
  }[];
  rideHeightSensitivity: {
    change: number; // mm
    lapTimeDelta: number; // ms
    confidence: number;
  }[];
  brakeBiasSensitivity: {
    change: number; // percentage
    brakingDistanceDelta: number; // meters
    confidence: number;
  }[];
  prioritizedAdjustments: {
    adjustment: string;
    expectedGain: number; // ms
    difficulty: 'easy' | 'medium' | 'hard';
  }[];
}

export interface ConsistencyMetrics {
  driverId: string;
  sessionType: string;
  averageLapTime: number;
  standardDeviation: number;
  minLapTime: number;
  maxLapTime: number;
  cleanLapCount: number;
  incidentCount: number;
  consistencyScore: number; // 0-100
  lapTimeVariance: {
    sector1: number;
    sector2: number;
    sector3: number;
  };
  contributingFactors: {
    factor: string;
    impact: number; // percentage
  }[];
}

export interface UncertaintyAnalysis {
  factor: string;
  weatherImpact: number; // ms
  trackConditionImpact: number; // ms
  fuelLoadImpact: number; // ms
  tireAgeImpact: number; // ms
  totalUncertainty: number;
  confidenceLevel: number; // 0-100
  recommendations: string[];
}

export interface PredictiveModel {
  type: 'tire_degradation' | 'brake_wear' | 'fuel_consumption' | 'pit_timing';
  parameters: Record<string, number | string>;
  accuracy: number; // 0-100
  lastUpdated: string;
  forecast: {
    timepoint: number;
    prediction: number;
    confidenceInterval: [number, number];
  }[];
}
