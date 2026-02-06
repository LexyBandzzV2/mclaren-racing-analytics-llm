# API Documentation

## Overview

The McLaren Racing Analytics platform provides comprehensive APIs for accessing telemetry, analytics, and insights.

## Authentication

All API endpoints require authentication using API keys in the request headers:

```
X-API-Key: your_api_key_here
```

## Endpoints

### OpenF1 API (2023+)

#### Get Seasons
```
GET /seasons
```

Returns list of available seasons with telemetry data.

**Response:**
```json
{
  "data": [2024, 2023],
  "status": "success"
}
```

#### Get Races
```
GET /races?year=2024
```

Returns races for a specific season.

**Query Parameters:**
- `year` (required): Season year

#### Get Session Data
```
GET /sessions?year=2024&round=1&session_type=race
```

**Query Parameters:**
- `year`: Season year
- `round`: Race round number
- `session_type`: 'practice', 'qualifying', 'sprint', or 'race'

#### Get Telemetry
```
GET /telemetry?session_id=xxx&driver_id=xxx
```

Returns detailed telemetry points including speed, brake, throttle, and tire data.

### Analytics

#### Calculate Tire Degradation
```
POST /analytics/tire-degradation
```

**Request:**
```json
{
  "lapTimes": [85234, 85456, 85678],
  "compound": "SOFT"
}
```

**Response:**
```json
{
  "compound": "SOFT",
  "degradationRate": 2.5,
  "expectedLife": 25,
  "performanceWindow": {
    "start": 1,
    "end": 20,
    "peakPerformance": 5
  }
}
```

#### Analyze Braking
```
POST /analytics/braking
```

**Request:**
```json
{
  "telemetryData": [...],
  "driverId": "norris"
}
```

#### Generate Strategy Options
```
POST /analytics/strategy
```

**Request:**
```json
{
  "lapTimes": [...],
  "totalLaps": 58
}
```

### AI Services

#### Generate Race Summary
```
POST /ai/race-summary
```

**Request:**
```json
{
  "raceId": "bahrain_2024",
  "drivers": ["norris", "piastri"],
  "includeStrategies": true
}
```

## Error Handling

All endpoints return standardized error responses:

```json
{
  "status": "error",
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Missing required parameter: year"
  }
}
```

## Rate Limiting

- API key: 1000 requests per hour
- IP address: 100 requests per minute

## Caching

Responses are cached for:
- Race data: 1 hour
- Telemetry: 30 minutes
- Analytics: 5 minutes

## Webhooks

Subscribe to real-time updates during races:

```javascript
POST /webhooks/subscribe

{
  "event": "lap_completed",
  "callback_url": "https://your-app.com/webhook"
}
```
