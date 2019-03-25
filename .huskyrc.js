const tasks = (...arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks('lerna run test', 'lerna run format', 'lerna run lint', 'lerna run build'),
  },
};
