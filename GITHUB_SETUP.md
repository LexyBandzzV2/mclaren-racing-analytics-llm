# McLaren Racing Analytics - GitHub Repository Setup Guide

This is your complete McLaren Racing Engineering Analytics Platform GitHub repository, ready for collaboration and deployment!

## 🚀 What's Included

### Project Structure
```
mclaren-racing-analytics/
├── src/                    # Application source code
│   ├── components/         # React components
│   ├── services/          # API and business logic
│   ├── types/             # TypeScript definitions
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── assets/            # Static assets
│   └── styles/            # CSS and styling
├── tests/                 # Test suite
├── docs/                  # Documentation
├── .github/              # GitHub-specific files
│   ├── workflows/        # CI/CD pipelines
│   └── ISSUE_TEMPLATE/   # Issue templates
├── public/               # Static public files
└── [Configuration files]
```

### Key Features Implemented

✅ **Full TypeScript Setup** - Strong type safety across the application
✅ **React 18 + Vite** - Modern, fast development experience
✅ **API Services** - Ready-to-use OpenF1 and Jolpica integrations
✅ **Analytics Engine** - Core algorithms for tire analysis and strategy
✅ **AI Service Layer** - Foundation for race summaries
✅ **Comprehensive Docs** - API, architecture, analytics, and deployment guides
✅ **CI/CD Ready** - GitHub Actions workflows for build, test, and deploy
✅ **Docker Support** - Containerized deployment
✅ **Testing Framework** - Vitest + React Testing Library
✅ **Code Quality** - ESLint, Prettier, TypeScript strict mode

## 📋 Next Steps

### 1. Push to GitHub

```bash
# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/mclaren-racing-analytics.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and add your API keys:

```bash
cp .env.example .env
```

Update with actual credentials:
- OpenF1 API key
- Jolpica API key

### 4. Start Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### 5. GitHub Repository Settings

**Settings → General**
- [ ] Default branch: `main`
- [ ] Allow squash merging
- [ ] Delete head branches

**Settings → Branches**
- [ ] Add branch protection for `main`
  - Require pull request reviews
  - Require status checks to pass
  - Require branches to be up to date

**Settings → Secrets and variables**
- [ ] Add `VERCEL_TOKEN` for deployment
- [ ] Add `VERCEL_ORG_ID`
- [ ] Add `VERCEL_PROJECT_ID`

## 🔄 Development Workflow

### Creating a Feature

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature-name
```

### Running Quality Checks

```bash
npm run lint          # Check code style
npm run type-check    # TypeScript validation
npm run test          # Run tests
npm run format        # Auto-format code
npm run build         # Production build
```

## 📚 Documentation

- [**README.md**](README.md) - Project overview and features
- [**docs/API.md**](docs/API.md) - Complete API documentation
- [**docs/ARCHITECTURE.md**](docs/ARCHITECTURE.md) - System design guide
- [**docs/ANALYTICS.md**](docs/ANALYTICS.md) - Analytics algorithms
- [**docs/CONTRIBUTING.md**](docs/CONTRIBUTING.md) - Contribution guidelines
- [**docs/DEPLOYMENT.md**](docs/DEPLOYMENT.md) - Deployment instructions

## 🛠️ Customization Needed

1. **Update Repository Details**
   - Replace `yourusername` in README.md links
   - Update GitHub URLs in documentation

2. **Add Your Actual Code**
   - Implement components in `src/components/`
   - Add business logic in `src/services/` (beyond templates)
   - Create pages in `src/pages/`

3. **Configure Deployment**
   - Choose your deployment platform (Vercel, Netlify, AWS, etc.)
   - Set up secrets in GitHub
   - Configure custom domain

4. **Set Up API Keys**
   - Get OpenF1 API key
   - Get Jolpica API key
   - Add to GitHub secrets and `.env` file

## 🚢 Deployment Options

### Vercel (Recommended)
- [ ] Connect GitHub repo to Vercel
- [ ] Add environment variables
- [ ] Deploy automatically on push to `main`

### Netlify
- [ ] Connect GitHub repo
- [ ] Add build settings: `npm run build`
- [ ] Add environment variables

### Docker
- [ ] Build: `docker build -t mclaren-analytics .`
- [ ] Push to registry
- [ ] Deploy to cloud platform

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

## 📊 Repository Statistics

- **Files**: 30+
- **Lines of Code**: 2200+
- **TypeScript Files**: 12
- **Documentation Pages**: 5
- **CI/CD Workflows**: 2

## 🔐 Security Best Practices

- Never commit API keys or secrets
- Use GitHub Secrets for sensitive data
- Review pull requests before merging
- Keep dependencies updated
- Run security audits: `npm audit`

## 🤝 Contributing

This repository follows a collaborative workflow:

1. Fork the repository
2. Create a feature branch
3. Make changes with tests
4. Submit a pull request
5. Code review and merge

See [Contributing Guide](docs/CONTRIBUTING.md) for detailed guidelines.

## 📞 Support & Questions

- **Issues**: Use GitHub Issues for bugs and features
- **Discussions**: Use GitHub Discussions for questions
- **Email**: analytics@mclaren.racing

## 📝 License

MIT License - See [LICENSE](LICENSE) for details

---

**Your repository is ready for production!** 🏁

Next: Configure your API keys, push to GitHub, and start building your engineering analytics platform. 🚀
