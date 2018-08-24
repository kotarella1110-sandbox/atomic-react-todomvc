# [TodoPage](../../src/components/templates/TodoPage)

## コンポーネントの階層構造

* TodoPage
    * TodoTemplate
        * Header
        * Main
        * Footer

## Props

None.

## State

None.

## 準備

### ファイル

```shell
$ mkdir src/components/pages/TodoPage
$ touch src/components/pages/TodoPage/index.js
$ touch src/components/pages/TodoPage/index.stories.js
$ touch src/components/pages/TodoPage/index.test.js
```

### コンポーネント

_src/components/pages/TodoPage/index.js_

```jsx
import React from 'react';

const TodoPage = () => <div />;

export default TodoPage;
```

### コンポーネントのストーリー

_src/components/pages/TodoPage/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { TodoPage } from 'components';

storiesOf('Template|TodoPage', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <TodoPage />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <TodoPage />));
```

### コンポーネントのテスト

_src/components/pages/TodoPage/index.test.js_

```
import React from 'react';
import { shallow } from 'enzyme';
import { TodoPage } from 'components';

const setup = () => {
  const wrapper = shallow(<TodoPage />);

  return {
    wrapper,
  };
};

describe('TodoPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
```

> *PASS* src/components/pages/TodoPage/index.test.js
