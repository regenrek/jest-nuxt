module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],

  // Test with nuxt only
  globalSetup: './test/utils/nuxt_only_setup.js',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', 'test/e2e/']

  // Test with puppeteer
  // globalSetup: './test/utils/setup.js',
  //globalTeardown: './test/utils/teardown.js',
  //testEnvironment: './test/utils/puppeteer_environment.js'
}
