# [Header](../../src/components/organisms/Header)

## コンポーネントの階層構造

* Header
    * Wrapper（div）
        * ToggleAll（input）
        * ToggleAllLabel（label）
        * StyledTodoText（TodoText）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| addTodo | func | yes | | |
| completeAll | func | yes | | |

## State

None.

## 準備

### ファイル

```shell
$ mkdir src/components/organisms/Header
$ touch src/components/organisms/Header/index.js
$ touch src/components/organisms/Header/index.stories.js
$ touch src/components/organisms/Header/index.test.js
```

### コンポーネント

_src/components/organisms/Header/index.js_

```jsx
import React from 'react';

const Header = () => <div />;

export default Header;
```

### コンポーネントのストーリー

_src/components/organisms/Header/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Header } from 'components';

storiesOf('Organism|Header', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Header />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <Header addTodo={action('AddTodo')} completeAll={action('CompleteAll')} />
    ))
  );
```

### コンポーネントのテスト

_src/components/organisms/Header/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'components';

const setup = () => {
  const props = {
    addTodo: jest.fn(),
    completeAll: jest.fn(),
  };

  const wrapper = shallow(<Header {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Header', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
```

> *PASS*  src/components/organisms/Header/index.test.js
