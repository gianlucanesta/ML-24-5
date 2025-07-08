module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^/vite\\.svg$": "<rootDir>/__mocks__/viteMock.js", // Mock vite.svg
    "^.+\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$":
      "<rootDir>/__mocks__/fileMock.js", // General image mock
  },
  testEnvironment: "jsdom",
};
