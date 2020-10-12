module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testPathIgnorePatterns: ['dist/*'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      statements: 100,
      lines: 100,
    },
  },

  testMatch: [
    '**/__tests__/**/*.+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
