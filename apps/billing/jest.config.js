module.exports = {
  name: 'billing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/billing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
