const tasks = (...arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': tasks('lerna run test', 'lerna run format', 'lerna run lint', 'lerna run build'),
  },
};
