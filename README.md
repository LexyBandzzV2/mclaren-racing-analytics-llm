# McLaren Racing Analytics with LLM Predictions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg?logo=vite)](https://vitejs.dev/)

A real-time race performance analysis tool with LLM-powered predictions built for McLaren F1 engineering teams. This platform transforms raw telemetry data into actionable engineering insights with AI-generated recommendations, enabling data-driven decision-making at the pit wall and beyond.

## 📸 Screenshots

### Performance Analytics Dashboard
![Performance Analytics Selection](https://cdn.discordapp.com/attachments/1459401016544989235/1469212273242407027/Screenshot_2026-02-05_235216.png?ex=6986d60e&is=6985848e&hm=955e2eaf0ff5bab9c80285b6355eb789a36e013d3609b5c86a1f6b3d70b8b8b2)
*Select any race and driver to analyze telemetry data and performance metrics*

### AI-Generated Race Debrief
![Race Analysis Dashboard](https://cdn.discordapp.com/attachments/1459401016544989235/1469212206284410962/Screenshot_2026-02-05_235346.png?ex=6986d5fe&is=6985847e&hm=f0c33dc16ff23b13f25c3a2f02be343edd6a567cb9f1b198def05a108e4a2a61)
*Comprehensive analysis with top speed, best lap, and average gap metrics*
*Real-time AI-powered analysis providing race overview, driver strengths, and recommendations*

### Cross-Car Learning & Benchmarking
![Cross-Car Comparison](https://media.discordapp.net/attachments/1459401016544989235/1469212145743958087/Screenshot_2026-02-05_235641.png?ex=6986d5f0&is=69858470&hm=2e1973a989f1f1f27c51b284bd93d339abeb7f59351f55a3ef495487346bf774&=&format=webp&quality=lossless&width=687&height=287)
*Direct teammate comparison showing lap gaps, sector times, and performance deltas*


### Strategy Confidence Scoring
![Strategy Analysis](https://media.discordapp.net/attachments/1459401016544989235/1469212178723897364/Screenshot_2026-02-05_235445.png?ex=6986d5f8&is=69858478&hm=0c91c4604736e978e7639dd532b84527c0a73db7f5a940f73a07c153eda6db4d&=&format=webp&quality=lossless&width=1147&height=466)
*Evaluate multiple race strategy options with confidence scores and risk assessment*


### Driver-Specific Modeling
![Driver Modeling](https://cdn.discordapp.com/attachments/1459401016544989235/1469219156649054401/image.png?ex=6986dc77&is=69858af7&hm=088302325258fbfd95f96ec338814776b36036debd45b9ecf37362dc39e90921)
*Comprehensive driver profile analysis with performance radar, key strengths, and improvement areas*

---

## 🏎️ Core Capabilities

### Multi-Season Coverage
- **Live Telemetry Integration**: OpenF1 API (2023+) and Jolpica API (2015–2022)
- **Historical Analysis**: Access to nearly a decade of F1 race data
- **Real-time Updates**: Live pit wall support during race weekends

### Overview Dashboard
- **Speed Trap Analysis**: Trends across practice, qualifying, and race sessions
- **Sector Time Progression**: Visual breakdown of per-sector performance deltas
- **Tire Strategy Visualization**: Compound-specific color coding with stint tracking
- **Weather Correlation**: Real-time weather impact on performance metrics

### Actionable Engineering Insights
- **Tire Pressure Optimization**: Identify optimal pressure windows for performance
- **Aero Balance Adjustments**: Flag aerodynamic tuning opportunities
- **Brake Bias Tweaks**: Recommend brake balance changes based on telemetry patterns
- **DRS Window Analysis**: Identify and optimize DRS deployment points

### Predictive Analytics
- **Tire Degradation Modeling**: Forecast tire lifespan and performance windows
- **Brake Wear Prediction**: Estimate brake temperature evolution and fade patterns
- **Fuel Consumption Trends**: Project fuel requirements and consumption rates
- **Pit Stop Timing**: Optimal window calculation for minimum time loss

### Driver Modeling & Profiling
- **Braking Point Analysis**: Identify driver-specific braking characteristics
- **Throttle Application Patterns**: Understand acceleration delivery style
- **Corner Entry Tendencies**: Detect turn-in approach preferences
- **Setup Sensitivity**: Profile how drivers respond to car balance changes

### Setup Sensitivity Mapping
- **Downforce Impact**: Quantify lap time response to wing adjustments
- **Ride Height Effects**: Predict performance changes from suspension setup
- **Suspension Tuning**: Model spring rate and damper sensitivities
- **Setup Prioritization**: Recommend highest-impact adjustments first

### Strategy Scoring & Analysis
- **Pit Timing Evaluation**: Score race strategy decisions against optimal alternatives
- **Compound Selection**: Validate tire compound choices with confidence scores
- **Alternative Strategy Modeling**: "What-if" scenario analysis
- **Risk Assessment**: Quantify downside risk of different strategies

### Cross-Car Learning
- **Teammate Benchmarking**: Direct driver comparison (e.g., Norris vs. Piastri)
- **Lap Time Deltas**: Identify sector-specific performance gaps
- **Speed Trap Comparison**: Track top speed advantages/disadvantages
- **Knowledge Transfer**: Enable faster performance insight sharing between cars

### Consistency Metrics
- **Lap-to-Lap Variation**: Statistical analysis of performance consistency
- **Inconsistency Identification**: Pinpoint where drivers lose time through variability
- **Session Progression**: Track driver adaptation throughout sessions
- **Baseline Establishment**: Define "clean lap" benchmarks for comparison

### Uncertainty Reduction
- **Weather Impact Correlation**: Reduce unknowns through weather data integration
- **Track Condition Mapping**: Link performance changes to track evolution
- **Variable Condition Analysis**: Identify patterns in changeable conditions
- **Confidence Intervals**: Quantify uncertainty in predictions and recommendations

### Race Weekend Integration
- **Session Tracking**: Monitor performance across practice, qualifying, and race
- **Live Dashboard Updates**: Real-time pit wall integration
- **Session Progression**: Track improvement and issues across weekend
- **Championship Context**: Performance relative to championship standings

### AI-Powered Race Summary
- **Intelligent Debriefing**: Synthesize all telemetry into structured analysis
- **Overall Performance Assessment**: Top-line driver and car performance
- **Strength Identification**: Highlight where the driver/car excelled
- **Improvement Areas**: Flag specific focus areas for next weekend
- **Predictive Outlook**: Race predictions for upcoming events based on trend analysis

## 💡 Why This Platform

### For Engineers
- **One Unified Platform**: All insights—from raw telemetry to AI recommendations—in one place
- **Faster Analysis**: Replace hours of manual post-race analysis with instant, structured reports
- **Data-Driven Decisions**: Support pit wall decision-making with predictive models
- **Long-term Trends**: 10 years of historical data for baseline and trend analysis

### For Teams
- **Cross-Team Benchmarking**: Instantly identify which car has the edge and why
- **Knowledge Transfer**: Enable faster driver-to-driver and car-to-car learning
- **Competitive Advantage**: Turn raw data into actionable competitive advantage
- **Real-time Integration**: Live pit wall support for race-day decision making

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mclaren-racing-analytics.git
cd mclaren-racing-analytics
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
```env
VITE_OPENF1_API_KEY=your_openf1_key
VITE_JOLPICA_API_KEY=your_jolpica_key
```

4. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
mclaren-racing-analytics/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Dashboard/       # Main dashboard layouts
│   │   ├── Charts/          # Data visualization components
│   │   ├── Telemetry/       # Telemetry display components
│   │   └── Common/          # Shared UI components
│   ├── services/            # API and data services
│   │   ├── openf1/          # OpenF1 API integration
│   │   ├── jolpica/         # Jolpica API integration
│   │   ├── analytics/       # Analytics computation
│   │   └── ai/              # AI summary generation
│   ├── utils/               # Utility functions
│   │   ├── calculations/    # Math and analysis utilities
│   │   ├── formatting/      # Data formatting utilities
│   │   └── constants/       # App-wide constants
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── pages/               # Page components
│   ├── assets/              # Static assets
│   └── index.tsx            # Application entry point
├── tests/                   # Test files
├── docs/                    # Documentation
├── public/                  # Static public files
├── .github/
│   └── workflows/           # CI/CD workflows
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Type-check TypeScript without emitting |
| `npm run test` | Run test suite |
| `npm run test:coverage` | Generate coverage report |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 📊 Data Integration

### OpenF1 API
- **Coverage**: 2023-present seasons
- **Data**: Complete telemetry, timing, and race information
- **Documentation**: https://openf1.org/

```typescript
// Example: Fetch session data
const sessionData = await openf1Service.getSessionData({
  year: 2024,
  round: 1,
  sessionType: 'race'
});
```

### Jolpica API
- **Coverage**: 2015-2022 seasons
- **Data**: Historical race data and telemetry
- **Documentation**: https://jolpica.com/

```typescript
// Example: Fetch historical race data
const historicalData = await jolpicaService.getRaceData({
  year: 2022,
  round: 1
});
```

## 🧠 Analytics & AI Features

### Tire Degradation Analysis
```typescript
const tireDegradation = await analyticsService.calculateTireDegradation({
  driverId: 'norris',
  sessionId: 'session_123',
  compound: 'SOFT'
});
```

### Performance Prediction
```typescript
const prediction = await analyticsService.predictPerformance({
  currentLapTime: 85.234,
  fuelLoad: 45,
  tireAge: 15,
  trackTemperature: 28.5
});
```

### AI Race Summary
```typescript
const summary = await aiService.generateRaceSummary({
  raceId: 'race_2024_bahrain',
  drivers: ['norris', 'piastri'],
  includeStrategies: true
});
```

## 🧪 Testing

The project uses Vitest and React Testing Library for comprehensive test coverage.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Generate coverage report
npm run test:coverage
```

## 📚 Documentation

Full documentation is available in the `/docs` directory:

- **[API Documentation](docs/API.md)** - Complete API reference
- **[Architecture Guide](docs/ARCHITECTURE.md)** - System design and patterns
- **[Analytics Guide](docs/ANALYTICS.md)** - Algorithm explanations
- **[Contributing Guide](docs/CONTRIBUTING.md)** - Contribution guidelines
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deployment instructions

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENF1_API_BASE_URL` | OpenF1 API endpoint | Yes |
| `VITE_OPENF1_API_KEY` | OpenF1 API authentication key | Yes |
| `VITE_JOLPICA_API_BASE_URL` | Jolpica API endpoint | Yes |
| `VITE_JOLPICA_API_KEY` | Jolpica API authentication key | Yes |
| `VITE_APP_TITLE` | Application title | No |
| `VITE_ENABLE_PREDICTIVE_ANALYTICS` | Enable predictive features | No |
| `VITE_ENABLE_AI_SUMMARY` | Enable AI summaries | No |

## 🚢 Deployment

### Docker Deployment
```bash
docker build -t mclaren-analytics .
docker run -p 3000:3000 mclaren-analytics
```

### Cloud Platforms

- **Vercel**: Connected deployment with preview environments
- **Netlify**: JAMstack-optimized deployment
- **AWS**: S3 + CloudFront configuration
- **GCP**: Cloud Run containerized deployment

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

## 📈 Performance

The platform is optimized for:
- **Large Dataset Handling**: Efficiently processes multi-season telemetry
- **Real-time Updates**: Sub-second dashboard refresh rates
- **Complex Calculations**: Optimized analytical computations
- **Mobile Responsiveness**: Full mobile dashboard support

## 🤝 Contributing

We welcome contributions! Please see [Contributing Guide](docs/CONTRIBUTING.md) for:
- Development setup
- Code style guidelines
- Pull request process
- Issue reporting

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙋 Support

For questions, issues, or suggestions:
- **GitHub Issues**: [Report a bug](https://github.com/yourusername/mclaren-racing-analytics/issues)
- **Discussions**: [Ask a question](https://github.com/yourusername/mclaren-racing-analytics/discussions)

## 🏆 Acknowledgments

This platform leverages data from:
- **OpenF1**: Real-time F1 telemetry and timing data
- **Jolpica**: Historical F1 race data and archives
- **McLaren Racing**: Engineering insights and requirements

---

**McLaren Racing Engineering Analytics** © 2024 - Made with 🧡 and 🖤
