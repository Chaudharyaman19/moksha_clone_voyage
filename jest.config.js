const path = require("path");

module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      path.resolve(__dirname, "../moksha-backend-v1/node_modules/ts-jest"),
      {
        isolatedModules: true,
        tsconfig: {
          target: "ES2020",
          module: "CommonJS",
          moduleResolution: "node",
          esModuleInterop: true,
          jsx: "react-jsx",
        },
      },
    ],
  },
};

