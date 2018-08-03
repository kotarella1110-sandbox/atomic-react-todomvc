# [Button](../../src/components/atoms/Button)

## ファイルを作成

```shell
$ mkdir src/components/atoms/Button
$ touch src/components/atoms/Button/index.js
$ touch src/components/atoms/Button/index.stories.js
$ touch src/components/atoms/Button/index.test.js
```

## 準備

### Button コンポーネント

_src/components/atoms/Button/index.js_

```jsx
import React from 'react';

const Button = () => <button />;

export default Button;
```

### Button コンポーネントのストーリー

保存するとスナップショットテストが実行され、 _src/components/atoms/Button/__snapshots__/index.stories.storyshot_ が作成されます。

_src/components/atoms/Button/index.stories.js_

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'components';

storiesOf('Atom|Button', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Button />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <Button>foo</Button>));
```

### Button コンポーネントのテスト

コンポーネントがレンダリングされていることを確認するテストをします。

_src/components/atoms/Button/index.test.js_

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'components';

const setup = () => shallow(<Button />);

describe('Button', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe('button');
  });
});
```

* [`shallow([options])`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html): コンポーネントを浅くレンダリング
* [`type()`](https://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html): node の type を返す
* [`toBe(value)`](https://jestjs.io/docs/ja/expect#tobevalue): 等価性を比較するマッチャー

> **PASS**  src/components/atoms/Button/index.test.js

## Styled Components でスタイリング

[tastejs/todomvc-app-css: CSS for TodoMVC apps](https://github.com/tastejs/todomvc-app-css) をベースにスタイリングを行います。

https://github.com/tastejs/todomvc-app-css/blob/master/index.css#L7-L21

Storybook で表示確認をしながら実装していきましょう。

_src/components/atoms/Button/index.js_

```jsx
import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default Button;
```

コンポーネントを変更して保存すると、次のようにスナップショットテストが失敗します。

> **FAIL**  src/storyshots.test.js
>
> expect(value).toMatchSnapshot()
>
> Received value does not match stored snapshot "FileProperties Atom|Button default 1".

スナップショットテストは、コンポーネントの DOM 構造をスナップショットとして保存しておき、次回のテスト時に比較して、 DOM 構造に変化があった場合に知らせてくれます。
これにより、以前と比較して意図せず変化していないかをテストする（リグレッション・テスト）ことができます。

ここではコンポーネント構造の変化は意図したものですので、これを新しいスナップショットとして更新します。
`u` を押すことでスナップショットの更新が可能です。

ここで、ストーリショットによって作成されたスナップショットファイルを確認して見ましょう。
CSS もスナップショットとして保持されていることが確認できると思います。

_src/components/atoms/Button/\_\_snapshots\_\_/index.stories.storyshots_

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`FileProperties Atom|Button default 1`] = `
.c0 {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

<button
  className="c0"
>
  foo
</button>
`;
```

つまり、Styled Components でスタイリングすることによって、ストーリショットで CSS の差分も比較してくれます。
ストラクチュアル・リグレッション・テストだけでなくビジュアル・リグレッション・テストも可能となります。

## Storybook によるテスト

Storybook Addon Actions を利用して、インタラクションが正しく動くかどうか視覚的にテストします。
インタラクションのコールバック関数として、 `action()` 関数で生成した関数を渡します。
Button コンポーネントをクリックするたびに、Storybook の右下ペインにある ACTION LOGGER に "Click" というログが表示されます。

_src/components/atoms/Button/index.stories.js_

```jsx
...
import { action } from '@storybook/addon-actions';
...
  .addWithJSX('default', withNotes(``)(() => <Button>foo</Button>))
  .addWithJSX(
    'click',
    withNotes(``)(() => <Button onClick={action('Click')}>foo</Button>)
  );
```