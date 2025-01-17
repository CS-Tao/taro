module.exports = {
  preset: 'jest-expo',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setup.ts'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*(jest-)?react-native|.*@react-native(-community)?)|.*expo|.*@react-navigation/.*|.*react-native-svg)'
  ]
}
