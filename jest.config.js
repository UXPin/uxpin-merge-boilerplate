module.exports = {
    "setupTestFrameworkScriptFile": "<rootDir>/enzymeConfig.js",
    "setupFiles": [
      "<rootDir>/enzymeConfig.js"
    ],
    "snapshotSerializers": ["jest-emotion/serializer"],
    "moduleNameMapper": {
      "^.+\\.svg$": "<rootDir>/src/__mocks__/svgMock.js"},
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "json"
    ],
    "transform": {
      ".(ts|tsx)": "ts-jest",
    },
    "testPathIgnorePatterns": [
      "/node_modules/",
      "/lib/"
    ],
  }