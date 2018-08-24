# [Main](../../src/components/organisms/Main)

## コンポーネントの階層構造

* Main
    * Wrapper（div）
        * TodoList（ul）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| todos | [{... <br> id: number, <br> text: string, <br> completed: bool, <br> }] | yes | | |
| completeTodo | func | yes | | |
| deleteTodo | func | yes | | |
| editTodo | func | yes | | |
| onClearCompleted | func | yes | | |

## State

None.

## 準備

### ファイル

```shell
$ mkdir src/components/organisms/Main
$ touch src/components/organisms/Main/index.js
$ touch src/components/organisms/Main/index.stories.js
$ touch src/components/organisms/Main/index.test.js
```

### コンポーネント

_src/components/organisms/Main/index.js_

```jsx
import React from 'react';

const Main = () => <div />;

export default Main;
```

### コンポーネントのストーリー

_src/components/organisms/Main/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Main } from 'components';

storiesOf('Organism|Main', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Main />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <Main
        todos={[
          {
            id: 0,
            text: 'foo',
            completed: false,
          },
          {
            id: 1,
            text: 'bar',
            completed: false,
          },
        ]}
        completeTodo={action('Complete')}
        deleteTodo={action('Delete')}
        editTodo={action('Edit')}
      />
    ))
  );
```

### コンポーネントのテスト

_src/components/organisms/Main/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { Main } from 'components';

const setup = () => {
  const props = {
    todos: [
      {
        id: 0,
        text: 'foo',
        completed: false,
      },
      {
        id: 1,
        text: 'bar',
        completed: false,
      },
    ],
    completeTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
  };

  const wrapper = shallow(<Main {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Main', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
```

> **PASS**  src/components/organisms/Main/index.test.js
