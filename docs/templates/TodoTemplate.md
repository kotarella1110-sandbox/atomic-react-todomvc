# [TodoTemplate](../../src/components/templates/TodoTemplate)

## コンポーネントの階層構造

* TodoTemplate
    * Wrapper（div）
        * Title（h1）
        * Header（header）
        * Main（main）
        * Footer（footer）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| title | string | yes | | |
| header | node | yes | | |
| footer | node | yes | | |
| children | node | yes | | | |

## State

None.

## 準備

### ファイル

```shell
$ mkdir src/components/templates/TodoTemplate
$ touch src/components/templates/TodoTemplate/index.js
$ touch src/components/templates/TodoTemplate/index.stories.js
$ touch src/components/templates/TodoTemplate/index.test.js
```

### コンポーネント

_src/components/templates/TodoTemplate/index.js_

```jsx
import React from 'react';

const TodoTemplate = () => <div />;

export default TodoTemplate;
```

### コンポーネントのストーリー

_src/components/templates/TodoTemplate/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { TodoTemplate } from 'components';

storiesOf('Template|TodoTemplate', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <TodoTemplate />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <TodoTemplate title="Title" header="Header" footer="Footer">
        Main
      </TodoTemplate>
    ))
  );
```

### コンポーネントのテスト

_src/components/templates/TodoTemplate/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { TodoTemplate } from 'components';

const setup = () => {
  const props = {
    title: 'Title',
    header: 'Header',
    children: 'Main',
    footer: 'Footer',
  };

  const wrapper = shallow(<TodoTemplate {...props} />);

  return { props, wrapper };
};

describe('TodoTemplate', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
```

> *PASS*  src/components/templates/TodoTemplate/index.test.js
