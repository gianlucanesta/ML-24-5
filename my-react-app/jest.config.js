module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^/vite\\.svg$": "<rootDir>/__mocks__/viteMock.js",
  },
  testEnvironment: "jsdom",
};
