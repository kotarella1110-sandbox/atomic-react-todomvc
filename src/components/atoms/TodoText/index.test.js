import React from 'react';
import { shallow } from 'enzyme';
import { TodoText } from 'components';

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
    expect(wrapper.dive().type()).toBe('input');
    expect(wrapper.dive().prop('type')).toBe('text');
    expect(wrapper.dive().prop('placeholder')).toBe('foo');
    expect(wrapper.dive().prop('value')).toBe('foo');
  });

  it('onChange で state.text が更新されること', () => {
    const { wrapper } = setup();
    wrapper.simulate('change', { target: { value: 'bar' } });
    expect(wrapper.state('text')).toBe('bar');
  });

  it('onKeyDown enter で onSave が呼ばれること', () => {
    const {
      wrapper,
      props: { onSave },
    } = setup();
    wrapper.find('InputText').simulate('keyDown', { keyCode: 13 });
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith('foo');
  });

  it('props.editing=false の時 onKeyDown enter で state.text が空文字になること', () => {
    const { wrapper } = setup();
    wrapper.dive().simulate('keyDown', { keyCode: 13 });
    expect(wrapper.state('text')).toBe('');
  });

  it('props.editing=true の時 onBlur で onSave が呼ばれること', () => {
    const {
      wrapper,
      props: { onSave },
    } = setup({ editing: true });
    wrapper.dive().simulate('blur');
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('props.editing=false の時 onBlur で onSave が呼ばれないこと', () => {
    const {
      wrapper,
      props: { onSave },
    } = setup();
    wrapper.dive().simulate('blur');
    expect(onSave).toHaveBeenCalledTimes(0);
  });
});
