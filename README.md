# 🏥 Hospital Manager Application

A comprehensive hospital management system built with React 19, TypeScript, and Vite. Includes real-time bed occupancy tracking, staff management, and organizational hierarchy visualization.

## 📊 Project Status

```
✅ Phase 1-3: Complete (5,600+ lines)
✅ Phase 4 Testing: Complete (1,050+ lines, 107 tests)
⏳ Phase 4 Performance: Ready to optimize
🚀 Status: Production-Ready (after optimization)
```

## 🎯 Key Features

- **Real-time Monitoring**: Live bed occupancy and staff updates
- **Staff Management**: Complete staff directory with organizational hierarchy
- **Dashboard**: KPI metrics and occupancy trends
- **Responsive Design**: Works on desktop and mobile devices
- **Data Export**: CSV and JSON export capabilities
- **Comprehensive Testing**: 107 unit tests with 80%+ coverage target

## 🔧 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Check coverage
npm run test:coverage
```

## 📚 Documentation

- **[PHASE-4-SUMMARY.md](./PHASE-4-SUMMARY.md)** - Phase 4 overview and status
- **[QUICK-REFERENCE.md](./QUICK-REFERENCE.md)** - Quick commands and metrics
- **[performance-analysis.md](./performance-analysis.md)** - Detailed performance analysis
- **[OPTIMIZATION-GUIDE.md](./OPTIMIZATION-GUIDE.md)** - Step-by-step optimization guide
- **[INDEX.md](./INDEX.md)** - Documentation master index
- **[VISUAL-SUMMARY.md](./VISUAL-SUMMARY.md)** - Visual project summary

## 🧪 Testing

All tests are located in `src/__tests__/`:
- **utils.test.ts** (44 tests) - Validation, formatting, search, sorting, calculations
- **hooks.test.ts** (28 tests) - Real-time hooks and integration
- **components.test.ts** (35 tests) - Component rendering and interaction

```bash
# Run all tests
npm run test

# Run with coverage report
npm run test:coverage

# Run specific test file
npm run test -- utils.test.ts
```

## 📈 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Bundle Size | <250 KB | ⏳ Optimizing |
| Initial Load | <2s | ⏳ Optimizing |
| Lighthouse | >80 | ⏳ Optimizing |
| Code Coverage | 80%+ | ✅ Ready |

## 🏗️ Project Structure

```
hospital-manager/
├── src/
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks (real-time, notifications)
│   ├── utils/           # Utilities (validation, formatting, calculations)
│   ├── __tests__/       # 107 unit tests
│   └── data/            # Mock data
├── vitest.config.ts     # Test configuration
├── vite.config.js       # Build configuration
└── tailwind.config.js   # Styling configuration
```

## 🚀 Next Steps

1. **Review Documentation**
   - Start with [PHASE-4-SUMMARY.md](./PHASE-4-SUMMARY.md)
   - Check [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) for commands

2. **Verify Tests**
   - Run `npm run test` to execute all tests
   - Run `npm run test:coverage` for coverage report

3. **Performance Optimization** (Week 2)
   - Follow [OPTIMIZATION-GUIDE.md](./OPTIMIZATION-GUIDE.md)
   - Implement bundle analysis and code splitting
   - Expected improvements: 35% smaller bundle, 50% faster load

4. **Deployment** (Week 3)
   - Run production build: `npm run build`
   - Validate Lighthouse score: >80
   - Deploy to production

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0 + TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.17
- **Testing**: Vitest 1.1.0 + @testing-library/react
- **Charts**: Recharts 3.5.1
- **Icons**: Lucide React
- **Data**: XLSX for Excel export

## 📦 Installation & Dependencies

Required:
- Node.js 16+ 
- npm or yarn

Install with:
```bash
npm install --legacy-peer-deps
```

(Legacy peer deps flag needed for React 19 compatibility with @testing-library/react)

## 🎓 Learning Resources

- See test files in `src/__tests__/` for testing patterns
- Check `OPTIMIZATION-GUIDE.md` for performance optimization strategies
- Review `performance-analysis.md` for detailed analysis
- Check `INDEX.md` for documentation navigation

## ✨ Key Accomplishments

- ✅ 107 comprehensive unit tests (40% of coverage infrastructure)
- ✅ Vitest + jsdom environment properly configured
- ✅ Real-time system fully implemented (4 classes, WebSocket)
- ✅ 5 fully featured components (Dashboard, BedTable, StaffList, OrgTree, Layout)
- ✅ 2,300+ lines of detailed documentation
- ✅ Performance analysis and optimization roadmap
- ✅ Production-ready application (pending optimization)

## 🔐 Security Note

This is a solo-user application. Authentication and security features are not included. If multi-user access is needed in the future, add:
- OAuth/JWT authentication
- Role-based access control
- Data encryption
- Security audit

## 📞 Support

For questions or issues:
1. Check [INDEX.md](./INDEX.md) for documentation navigation
2. Review [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) for common commands
3. See specific documentation files for detailed information

## 📄 License

This project is created for hospital management and usage.

---

**Status**: Phase 4 Testing Complete ✅ | Ready for Optimization ⏳
**Last Updated**: December 15, 2025
**Next Milestone**: Performance Optimization (Week 2)
**Goal**: Production deployment (Week 3)
