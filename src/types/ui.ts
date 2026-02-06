/**
 * UI and component state types
 */

export interface UIState {
  loading: boolean;
  error: string | null;
  notification: Notification | null;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration: number; // milliseconds
  action?: {
    label: string;
    callback: () => void;
  };
}

export interface FilterState {
  season: number | null;
  race: string | null;
  session: string | null;
  drivers: string[];
  teams: string[];
  compound: string | null;
  dateRange: {
    start: string | null;
    end: string | null;
  };
}

export interface DashboardViewState {
  activeView: 'overview' | 'telemetry' | 'analytics' | 'strategy';
  selectedDriver: string | null;
  selectedSession: string | null;
  timeRange: {
    start: number;
    end: number;
  };
  chartOptions: {
    type: 'line' | 'bar' | 'scatter';
    showLegend: boolean;
    showGrid: boolean;
  };
}

export interface ComparisonState {
  selectedDrivers: string[];
  selectedMetrics: string[];
  comparisonType: 'lap' | 'session' | 'race' | 'season';
  viewMode: 'overlay' | 'side-by-side' | 'delta';
}

export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
}

export interface UserPreferences {
  theme: ThemeState;
  defaultView: string;
  autoRefresh: boolean;
  refreshInterval: number; // seconds
  decimalPlaces: number;
  temperatureUnit: 'celsius' | 'fahrenheit';
  speedUnit: 'kmh' | 'mph';
  distanceUnit: 'meters' | 'feet';
  sidebarCollapsed: boolean;
}
