# [TodoText](../../src/components/atoms/TodoText)

## コンポーネントの階層構造

* TodoText
    * InputText（input）

## Props

| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
| text | string | | '' | |
| placeholder | string | | '' | |
| editing | bool | | false | |
| onSave | string | | text => text | |

## State

* text

## 準備

### ファイル

```shell
$ mkdir src/components/atoms/TodoText
$ touch src/components/atoms/TodoText/index.js
$ touch src/components/atoms/TodoText/index.stories.js
$ touch src/components/atoms/TodoText/index.test.js
```

### コンポーネント

_src/components/atoms/TodoText/index.js_

```jsx
import React from 'react';

const TodoText = () => <input type="text" />;

export default TodoText;
```

### コンポーネントのストーリー

_src/components/atoms/TodoText/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { TodoText } from 'components';

storiesOf('Atom|TodoText', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <TodoText />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <TodoText />));
```

### コンポーネントのテスト

_src/components/atoms/TodoText/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import TodoText from '.';

const setup = propOverrides => {
  const props = Object.assign(
    {
      onSave: jest.fn(),
      text: 'foo',
      placeholder: 'foo',
      editing: false,
    },
    propOverrides
  );

  const wrapper = shallow(<TodoText {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoText', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('input');
    expect(wrapper.prop('type')).toBe('text');
  });
});
```

* [`prop([key])`](https://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html): 指定された key の Props の値を返す

> **PASS**  src/components/atoms/TodoText/index.test.js
