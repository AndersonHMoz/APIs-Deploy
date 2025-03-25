import type { Config } from 'jest';

const config: Config = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/SRC/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/SRC/$1",
  },

};

export default config;
