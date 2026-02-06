# Architecture Guide

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page-level components
├── services/           # Business logic and API integration
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── assets/             # Static assets (images, icons)
└── styles/             # Global CSS and Tailwind config
```

## Design Patterns

### Service Layer Pattern

All external API calls and business logic are isolated in services:

```typescript
// services/openf1Service.ts
class OpenF1Service {
  async getSeasons(): Promise<number[]>
  async getRaces(year: number): Promise<Race[]>
  async getTelemetry(sessionId: string): Promise<TelemetryPoint[]>
}
```

### Custom Hooks

Encapsulate complex component logic in custom hooks:

```typescript
// hooks/useTelemetryData.ts
export function useTelemetryData(sessionId: string) {
  const [data, setData] = useState<TelemetryPoint[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch and transform telemetry data
  }, [sessionId]);
  
  return { data, loading };
}
```

### Type Safety

Leverage TypeScript for compile-time type checking:

```typescript
// types/telemetry.ts
export interface Race {
  id: string;
  year: number;
  round: number;
  name: string;
  // ...
}
```

## State Management

Using Zustand for lightweight state management:

```typescript
// stores/appStore.ts
export const useAppStore = create((set) => ({
  season: 2024,
  setSeason: (season: number) => set({ season }),
}));
```

## Component Architecture

### Presentational Components
Pure components that accept props and render UI:

```typescript
interface DashboardProps {
  races: Race[];
  onRaceSelect: (race: Race) => void;
}

export function Dashboard({ races, onRaceSelect }: DashboardProps) {
  return (
    // Render dashboard UI
  );
}
```

### Container Components
Components that manage state and side effects:

```typescript
export function DashboardContainer() {
  const [races, setRaces] = useState<Race[]>([]);
  
  useEffect(() => {
    // Fetch races
  }, []);
  
  return <Dashboard races={races} onRaceSelect={...} />;
}
```

## Data Flow

1. **API Request** → Service layer fetches data
2. **Data Transformation** → Format for UI consumption
3. **State Management** → Store in Zustand or React state
4. **Component Rendering** → Display in UI
5. **User Interaction** → Trigger state updates or new requests

## Performance Optimization

### Code Splitting
Routes are lazy-loaded:

```typescript
const Analytics = lazy(() => import('@pages/Analytics'));
```

### Memoization
Expensive computations are memoized:

```typescript
const memoizedData = useMemo(() => {
  return calculateAnalytics(rawData);
}, [rawData]);
```

### Caching
API responses are cached at service level to reduce requests.

## Testing Strategy

### Unit Tests
Test individual functions and hooks:

```typescript
describe('AnalyticsService', () => {
  it('calculates tire degradation correctly', () => {
    const result = analyticsService.calculateTireDegradation([...], 'SOFT');
    expect(result.degradationRate).toBeLessThan(5);
  });
});
```

### Integration Tests
Test component interactions and data flow.

### E2E Tests
Test complete user workflows.

## Security Considerations

1. **API Keys**: Store in environment variables, never in code
2. **CORS**: Configure proper cross-origin policies
3. **Input Validation**: Validate all user inputs
4. **Authentication**: Implement secure authentication flow
5. **Data Privacy**: Handle sensitive data appropriately

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions.
