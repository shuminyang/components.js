import path from 'path';
import { css } from 'docz-plugin-css';

const plugins = [
  'react-require',
  'react-hot-loader/babel',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-modules-commonjs',
];

export default {
  title: '@components.js/react',
  typescript: true,
  menu: [
    'Main',
    { name: 'GitHub', menu: [
      { name: 'Repo', href: 'https://github.com/olavoasantos/components.js/' },
      { name: 'Issues', href: 'https://github.com/olavoasantos/components.js/issues?q=is:issue+is:open+label:@react' },
      { name: 'Pull requests', href: 'https://github.com/olavoasantos/components.js/pulls?q=is:open+is:pr+label:@react' },
    ] },
  ],
  modifyBabelRc: babelrc =>
    Object.assign({}, babelrc, {
      plugins: babelrc.plugins.filter(plug => !plugins.includes(plug)),
    }),
  onCreateWebpackChain: config => {
    config.resolve.alias.set('~', path.resolve(__dirname, 'src/'));
  },
  themeConfig: {
    styles: {
      h1: {
        fontSize: 50,
      },
    },
  },
  plugins: [
    css({
      cssmodules: true,
      preprocessor: 'sass',
    }),
  ],
};
