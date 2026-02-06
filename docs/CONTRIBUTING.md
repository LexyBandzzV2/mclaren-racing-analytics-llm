# Contributing Guidelines

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/mclaren-racing-analytics.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Push to your fork and submit a pull request

## Development Setup

```bash
npm install
npm run dev
```

## Code Style

We follow strict TypeScript and ESLint rules. Format your code before committing:

```bash
npm run format
npm run lint
```

## Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(analytics): add tire pressure optimization`
- `fix(api): handle missing season data`
- `docs: update deployment guide`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (no logic changes)
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

## Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure all tests pass: `npm run test`
4. Ensure code is properly formatted
5. Reference any related issues

## Testing

All new features should include tests:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Generate coverage report
npm run test:coverage
```

## Documentation

- Update README.md for user-facing changes
- Update relevant docs in `/docs` folder for technical changes
- Add JSDoc comments for complex functions

## Code Review

PRs require at least 1 approval before merging. We review for:
- Code quality and readability
- Test coverage
- TypeScript compliance
- Performance impact
- Documentation completeness

## Reporting Issues

Use GitHub Issues with the appropriate template:
- Bug Report
- Feature Request
- Documentation Improvement

Provide as much context as possible including:
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Environment info (OS, Node version, etc.)

## Feature Development Checklist

- [ ] Feature implemented
- [ ] Tests written
- [ ] Tests passing
- [ ] Code formatted
- [ ] Linter passing
- [ ] Type checking passing
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] PR description complete
- [ ] Related issues referenced

## Questions?

Feel free to open a discussion in the [GitHub Discussions](https://github.com/yourusername/mclaren-racing-analytics/discussions) tab.
