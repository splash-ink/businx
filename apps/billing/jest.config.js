module.exports = {
  name: 'billing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/billing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
