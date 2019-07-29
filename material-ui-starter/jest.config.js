module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(ts)$": "<rootDir>/node_modules/ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
  moduleNameMapper: {
    "^src/(.+)": "<rootDir>/src/$1"
  }
};
