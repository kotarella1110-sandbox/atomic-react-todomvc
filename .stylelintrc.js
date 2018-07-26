module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-airbnb', 'stylelint-config-styled-components'],
  rules: {
    'number-leading-zero': 'always',
  },
};
