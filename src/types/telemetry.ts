/**
 * F1 Season and race data types
 */

export interface Season {
  year: number;
  rounds: number;
}

export interface Race {
  id: string;
  year: number;
  round: number;
  name: string;
  circuit: string;
  date: string;
  sessions: Session[];
}

export interface Session {
  id: string;
  type: 'practice' | 'qualifying' | 'sprint' | 'race';
  name: string;
  date: string;
  status: 'scheduled' | 'in_progress' | 'completed';
}

export interface Driver {
  id: string;
  number: number;
  name: string;
  firstName: string;
  lastName: string;
  team: string;
  teamColor: string;
  nationality: string;
  photo?: string;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  garage: string;
}

export interface Lap {
  id: string;
  number: number;
  driverId: string;
  sessionId: string;
  time: number; // milliseconds
  sector1: number;
  sector2: number;
  sector3: number;
  isPersonalBest: boolean;
  isSessionBest: boolean;
}

export interface TelemetryPoint {
  timestamp: number;
  lapNumber: number;
  distance: number; // meters
  throttle: number; // 0-100
  brake: number; // 0-100
  speed: number; // km/h
  rpm: number;
  gear: number;
  drsActive: boolean;
  brakeTemp: number; // celsius
  tireTemp: {
    fl: number;
    fr: number;
    rl: number;
    rr: number;
  };
  tirePressure: {
    fl: number;
    fr: number;
    rl: number;
    rr: number;
  };
  lateralAcceleration: number;
  longitudinalAcceleration: number;
}

export interface PitStop {
  id: string;
  driverId: string;
  lapNumber: number;
  duration: number; // milliseconds
  compound: TireCompound;
  tyreAge: number;
  stopNumber: number;
}

export type TireCompound = 'SOFT' | 'MEDIUM' | 'HARD' | 'INTERMEDIATE' | 'WET';

export interface TireData {
  compound: TireCompound;
  age: number; // laps
  temperature: number; // celsius
  pressure: number; // psi
  wear: number; // 0-100%
  degradation: number; // time loss per lap in ms
}

export interface WeatherData {
  timestamp: number;
  temperature: number; // celsius
  humidity: number; // 0-100%
  pressure: number; // mb
  windSpeed: number; // km/h
  windDirection: string;
  rainfall: number; // mm
  trackTemperature: number; // celsius
  weatherType: 'clear' | 'cloudy' | 'rainy' | 'stormy';
}

export interface CarSetup {
  frontWing: number; // degrees
  rearWing: number; // degrees
  brakeBias: number; // 0-100 (front percentage)
  rollBar: number; // front/rear stiffness
  suspension: {
    frontRideHeight: number;
    rearRideHeight: number;
    frontSprings: number;
    rearSprings: number;
    frontDampers: number;
    rearDampers: number;
  };
  brakes: {
    type: string;
    temperature: number;
  };
  tyres: {
    compound: TireCompound;
    pressure: {
      fl: number;
      fr: number;
      rl: number;
      rr: number;
    };
  };
}
