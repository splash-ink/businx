module.exports = {
  name: 'invoice',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/invoice',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
