module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-after-env.ts'],
  testPathIgnorePatterns: ['<rootDir>/test/smoke/'],
  verbose: true,
  collectCoverageFrom: ['api/**/*.ts', '!api/**/index.ts'],
  coverageReporters: ['text', 'text-summary', 'html']
};
