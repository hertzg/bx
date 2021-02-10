const header = [
  '',
  '[//]: # (GENERATED FILE. DO NOT EDIT DIRECTLY. ALL CHANGES WILL BE OVERWRITTEN)',
  '',
  '# Changelog',
  '',
  'All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.',
].join('\n');

module.exports = {
  header: header,
  releaseCommitMessageFormat: 'chore(release): {{currentTag}} 🎉 ',
  types: [
    {type: 'feat', section: '🚀 Features'},
    {type: 'fix', section: '🐛 Bug Fixes'},
    {type: 'docs', section: '📖 Documentation Updates'},
    {type: 'test', section: '🧪 Testing Improvements'},
    {type: 'refactor', section: '🌟 Refactorings'},
    {type: 'perf', section: '📈 Performance Improvements'},
  ],
};