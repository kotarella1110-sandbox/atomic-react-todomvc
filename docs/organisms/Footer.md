# [Footer](../../src/components/organisms/Footer)

## コンポーネントの階層構造

* Footer
    * Wrapper（div）
        * TodoCount（span）
            * TodoCountNumber（strong）
        * Filters（ul）
            * FilterItem（li）
                * FilterItemLink（a）
        * ClearCompletedButton
            * Button（button）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| visibilityFilter | string | yes | | |
| completedCount | number | yes | | |
| activeCount | number | yes | | |
| setVisibilityFilter | func | yes | | |
| onClearCompleted | func | yes | | |

## State

None.

## 準備

### ファイル

```shell
$ mkdir src/components/organisms/Footer
$ touch src/components/organisms/Footer/index.js
$ touch src/components/organisms/Footer/index.stories.js
$ touch src/components/organisms/Footer/index.test.js
```

### コンポーネント

_src/components/organisms/Footer/index.js_

```jsx
import React from 'react';

const Footer = () => <div />;

export default Footer;
```

### コンポーネントのストーリー

_src/components/organisms/Footer/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Footer } from 'components';

storiesOf('Organism|Footer', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Footer />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <Footer
        visibilityFilter="SHOW_ALL"
        completedCount={0}
        activeCount={0}
        setVisibilityFilter={action('SetVisibilityFilter')}
        onClearCompleted={action('ClearCompleted')}
      />
    ))
  );
```

### コンポーネントのテスト

_src/components/organisms/Footer/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from 'components';

const setup = () => {
  const props = {
    visibilityFilter: 'SHOW_ALL',
    completedCount: 0,
    activeCount: 0,
    setVisibilityFilter: jest.fn(),
    onClearCompleted: jest.fn(),
  };

  const wrapper = shallow(<Footer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Footer', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
```

> **PASS**  src/components/organisms/Footer/index.test.js
`