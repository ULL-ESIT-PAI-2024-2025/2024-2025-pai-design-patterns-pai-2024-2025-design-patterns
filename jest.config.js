module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};