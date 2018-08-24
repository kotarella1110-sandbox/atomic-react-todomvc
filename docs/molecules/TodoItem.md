# [TodoItem](../../src/components/molecules/TodoItem)

## コンポーネントの階層構造

* Header
    * Wrapper（div）
        * StyledTodoText（TodoText）
        * View（div）
            * Toggle（input）
            * Label（label）
            * DestroyButton
                * Button（Button）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| ToDo | {... <br> id: number, <br> text: string, <br> completed: bool, <br> } | yes | | |
| editTodo | func | yes | | |
| deleteTodo | func | yes | | |
| completeTodo | func | yes | | |

## State

* editing

## 準備

### ファイル

```shell
$ mkdir src/components/molecules/TodoItem
$ touch src/components/molecules/TodoItem/index.js
$ touch src/components/molecules/TodoItem/index.stories.js
$ touch src/components/molecules/TodoItem/index.test.js
```

### コンポーネント

_src/components/molecules/TodoItem/index.js_

```jsx
import React from 'react';

const TodoItem = () => <input type="text" />;

export default TodoItem;
```

### コンポーネントのストーリー

_src/components/molecules/TodoItem/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { TodoItem } from 'components';

storiesOf('Atom|TodoItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      API ドキュメントを記述
      ~~~jsx
      <TodoItem />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(`
      ノートを記述
    `)(() => <TodoItem />)
  );
```

### コンポーネントのテスト

_src/components/molecules/TodoItem/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from 'components';

const setup = () => {
  const props = {};

  const wrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('li');
  });
});

```

> **PASS**  src/components/molecules/TodoItem/index.test.js
