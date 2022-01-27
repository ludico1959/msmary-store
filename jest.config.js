module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./__tests__/jest.setup.js'],
  testMatch: ['**/**/**/*.test.js']
};
