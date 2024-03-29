module.exports = {
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },
  testEnvironment: 'jsdom',
  bail: true,
  passWithNoTests: true,
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx,ts}',
    '!src/{index,App}.{js,jsx,tsx,ts}',
    '!src/{config,services,test-utils}/**',
    '!src/**/{styles,types}.{js,jsx,tsx,ts}',
    '!src/mocks/**/*.{js,jsx,tsx,ts}',
  ],
  coverageReporters: ['lcov', 'text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testTimeout: 10000,
};
