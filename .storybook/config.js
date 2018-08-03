import { setStubbingMode } from 'react-stubber';
import { injectGlobal } from 'styled-components';
import { configure, setAddon } from '@storybook/react';
import '@storybook/addon-console';
import { setOptions } from '@storybook/addon-options/preview';
import JSXAddon from 'storybook-addon-jsx';

setStubbingMode(true);

injectGlobal([
  `
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }
  :focus {
    outline: 0;
  }
`,
]);

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

setAddon(JSXAddon);

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
