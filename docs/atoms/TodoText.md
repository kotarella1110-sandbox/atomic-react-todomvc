# [TodoText](../../src/components/atoms/TodoText)

## ToDo

- [x] インプットテキストに入力されたテキストを管理する
- [x] Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行する

## 準備

### ファイルを作成

```shell
$ mkdir src/components/atoms/TodoText
$ touch src/components/atoms/TodoText/index.js
$ touch src/components/atoms/TodoText/index.stories.js
$ touch src/components/atoms/TodoText/index.test.js
```

### ひな型を作成

#### TodoText コンポーネント

_src/components/atoms/TodoText/index.js_

```jsx
import React from 'react';

const TodoText = () => <input type="text" />;

export default TodoText;
```

#### TodoText コンポーネントのストーリー

保存するとスナップショットテストが実行され、 _src/components/atoms/TodoText/__snapshots__/index.stories.storyshot_ が作成されます。

_src/components/atoms/TodoText/index.stories.js_

```jsx
storiesOf('Atom|TodoText', module)
  .addDecorator((story, context) =>
    withInfo(`
      API ドキュメントを記述
      ~~~jsx
      <TodoText />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(`
      ノートを記述
    `)(() => <TodoText />)
  );
```

#### TodoText コンポーネントのテスト

コンポーネントがレンダリングされていることを確認するテストをします。

_src/components/atoms/TodoText/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import TodoText from '.';

describe('TodoText', () => {
  const wrap = (props = {}) => shallow(<TodoText {...props} />);

  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = wrap();
    expect(wrapper.exists()).toBe(true);
  });
});
```

* [`shallow([options])`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html): コンポーネントを浅くレンダリング
* [`exists()`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/exists.html): 存在するかの確認
* [`toBe(value)`](https://jestjs.io/docs/ja/expect#tobevalue): 等価性を比較するマッチャー

### styled components でスタイリング

_src/components/atoms/TodoText/index.js_

```jsx
import React from 'react';
import styled from 'styled-components';

const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const TodoText = () => <InputText />;

export default TodoText;
```

コンポーネントを変更して保存すると、次のようにスナップショットテストが失敗します。

```shell
    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot "FileProperties Atom|TodoText default 1".
```

スナップショットテストは、コンポーネントの DOM 構造をスナップショットとして保存しておき、次回のテスト時に比較して、 DOM 構造に変化があった場合に知らせてくれます。
これにより、以前と比較して意図せず変化していないかをテストする（リグレッション・テスト）ことができます。

ここではコンポーネント構造の変化は意図したものですので、これを新しいスナップショットとして更新します。
`u` を押すことでスナップショットの更新が可能です。

## TDD

### 1. インプットテキストに入力されたテキストを管理する

#### 1.1. InputText コンポーネントがレンダリングされていることを確認

_src/components/atoms/TodoText/index.test.js_

```jsx
  it('InputText コンポーネントがレンダリングされていること', () => {
    const wrapper = wrap();
    expect(wrapper.find('InputText').exists()).toBe(true);
  });
});
```

* [`find()`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html): DOM 内探索

Styled Components で定義したコンポーネント名で `find()` できます。

**Passed!**

#### 1.2. Props で渡したテキストが State に保持されていることを確認

_src/components/atoms/TodoText/index.test.js_

```jsx
  it('入力したテキストが state に保持されているか', () => {
    const wrapper = wrap({ text: 'Test!' });
    expect(wrapper.state('text')).toBe('Test!');
  });
```

**Failed!**

```shell
ShallowWrapper::state() can only be called on class components
```

テキストを TodoText コンポーネントの State として保持したいため、 SFC ではなくクラスコンポーネントに修正します。

_src/components/atoms/TodoText/index.js_

```jsx
class TodoText extends React.Component {
  render() {
    return <InputText />;
  }
}
```

**Failed!**

```shell
TypeError: Cannot read property 'text' of null
```

_src/components/atoms/TodoText/index.js_

```jsx harmony
import PropTypes from 'prop-types';
...
class TodoText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  state = {
    text: this.props.text,
  };

  render() {
    return <InputText value={this.state.text} {...this.props} />;
  }
}

TodoText.defaultProps = {
  text: '',
};
```

**Passed!**

Props として `text` を渡せるようになったので、ストーリーで確認します。

_src/components/atoms/TodoText/index.stories.js_

```
  .addWithJSX('default', withNotes(``)(() => <TodoText />))
  .addWithJSX('props text', withNotes(``)(() => <TodoText text='hoge' />));
```

### 1.3. 入力したテキストが State に保持されていることを確認

TodoText コンポーネントのテキストを "Test!" から "Test! Input!" への変更入力をシミュレートし、State もそれに合わせてテキストを正しく保持しているか確認します。

_src/components/atoms/TodoText/index.test.js_

```js
  it('入力したテキストが State に保持されていること', () => {
    const wrapper = wrap({ text: 'Test!' });
    wrapper
      .simulate('change', { target: { value: 'Test! Input!' } });
    expect(wrapper.state('text')).toBe('Test! Input!');
  });
```

* [`simulate(event[, data])`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html): イベントの発行をシミュレート

**Failed!**

```shell
expect(received).toBe(expected)

Expected value to be (using ===):
  "Test! Input!"
Received:
  "Test!"
```

入力に応じて State も変化するように TodoText コンポーネントを修正します。

_src/components/atoms/TodoText/index.js_

```jsx
class TodoText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  state = {
    text: this.props.text,
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  render() {
    return (
      <InputText
        value={this.state.text}
        onChange={this.handleChange}
        {...this.props}
      />
    );
  }
}
```

**Passed!**

## 2. Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行する

### 2.1. Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行することを確認

次の確認を行います。

* Enter を押した際に、Props で渡したコールバックが実行されるか
* そのコールバックの引数は入力されたテキストか

_src/components/atoms/TodoText/index.test.js_

```js
  it('Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行すること', () => {
    const handleEnter = jest.fn();
    const wrapper = wrap({ text: 'Test!', handleEnter });
    wrapper.find('InputText').simulate('keyDown', { keycode: 13 });
    expect(handleEnter).toHaveBeenCalledTimes(1);
    expect(handleEnter).toHaveBeenCalledWith('Test!');
  });
```

* [`jest.fn()`](https://jestjs.io/docs/en/mock-functions): モック関数
* [`toHaveBeenCalledTimes(number)`](https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber): モックが何回呼ばれたか確認
* [`toHaveBeenCalledWith(arg1, arg2, ...)`](https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-): モックがどんな引数で呼び出されたかを確認

**Failed!**

```
expect(jest.fn()).toHaveBeenCalledTimes(1)

Expected mock function to have been called one time, but it was called zero times.
```

Enter が押された際の処理を記述します。

_src/components/atoms/TodoText/index.js_

```jsx
class TodoText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    handleEnter: PropTypes.func,
  };

  state = {
    text: this.props.text,
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleKeyDown = e => {
    if (e.keycode === 13) {
      this.props.handleEnter(this.state.text);
    }
  };

  render() {
    return (
      <InputText
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...this.props}
      />
    );
  }
}
```

**Passed!**

Props として `handleEnter` を渡せるようになったので、ストーリーで確認します。

Storybook Addon Actions を利用して、インタラクションが正しく動くかどうか視覚的にテストします。
インタラクションのコールバック関数として、 `action()` 関数で生成した関数を渡します。
インプットテキストで Enter を押すたびに、Storybook の右下ペインにある ACTION LOGGER に "Enter" というログが表示されます。

_src/components/atoms/TodoText/index.stories.js_

```
import { action } from '@storybook/addon-actions';
...
  .addWithJSX('props text', withNotes(``)(() => <TodoText text="hoge" />))
  .addWithJSX(
    'props text and handleEnter',
    withNotes(``)(() => <TodoText text="hoge" handleEnter={action('Enter')} />)
  );
```