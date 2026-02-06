# Analytics Guide

## Tire Degradation Analysis

Tire degradation is modeled using linear regression on lap time data:

### Formula
```
degradation_rate = (n*ΣXY - ΣX*ΣY) / (n*ΣX² - (ΣX)²)
```

Where:
- X = lap number
- Y = lap time
- n = number of laps

### Performance Window
The optimal performance window is typically:
- **Start**: First 20-30% of tire life (warm-up phase)
- **Peak**: Around 30-40% of tire life
- **End**: 60-70% of tire life (before severe degradation)

### Compound Characteristics
- **SOFT**: Fast pace, high degradation, ~15-20 laps optimal life
- **MEDIUM**: Balanced, moderate degradation, ~25-30 laps
- **HARD**: Slower pace, low degradation, ~35-40 laps
- **INTERMEDIATE**: Wet conditions, ~20-30 laps
- **WET**: Heavy rain, ~15-25 laps

## Braking Analysis

### Braking Point Detection
Braking points are identified by analyzing telemetry points where brake input > 10%:

```typescript
const brakingPoints = telemetry.filter(t => t.brake > 10);
const avgDistance = brakingPoints.map(p => p.distance).average();
```

### Consistency Scoring
Consistency measured by standard deviation of braking distances:

```
consistency_score = 100 - (stdev / mean * 100)
```

### Brake Temperature
- Optimal: 400-550°C
- Critical: > 800°C (risk of fade)
- Cold: < 200°C (poor bite)

## Strategy Optimization

### One-Stop Strategies
Best when:
- Tire degradation is low
- Track is short
- Pit lane is slow

Expected pit gain: ~20-25 seconds

### Two-Stop Strategies
Best when:
- Tire degradation is moderate to high
- Sufficient time gaps exist
- Track allows overtaking

Expected pit gain: ~40-45 seconds

### Three-Stop Strategies
Rare, used when:
- Very high degradation
- Safety cars create gaps
- Undercut/overcut opportunities

## Fuel Consumption Modeling

### Formula
```
fuel_consumption = (total_fuel / total_laps) * safety_margin
```

Safety margin typically 5-10% to account for uncertainty.

### Adjustment Factors
- Engine mode (high/medium/low consumption)
- Track layout (fuel consumption varies)
- Driver style (aggressive vs. smooth)

## Predictive Models

### Tire Lifespan Prediction
Uses degradation curve to project when tires reach critical wear:

```
expected_life = (max_usable_lap_time - current_lap_time) / degradation_rate
```

### Weather Impact
Performance deltas for weather changes:
- Temperature +1°C: -0.1 to -0.3ms per lap
- Humidity +10%: -0.05 to -0.15ms per lap
- Rain: Variable, typically +0.5 to +2s per lap

### Fuel Load Impact
Fuel weight impact on lap time:
```
time_delta = (fuel_load / car_weight) * sensitivity_factor
```

## Statistical Confidence

All analytics calculations include confidence intervals:

```typescript
interface Prediction {
  value: number;
  confidenceInterval: [number, number]; // [lower, upper]
  confidence: number; // 0-100 percentage
}
```

Confidence depends on:
- Data sample size
- Data consistency/variance
- Model accuracy in similar situations
