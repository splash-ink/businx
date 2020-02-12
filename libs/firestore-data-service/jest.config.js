module.exports = {
  name: 'firestore-data-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/firestore-data-service',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
