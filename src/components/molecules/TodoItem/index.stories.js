import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import TodoItem from '.';

storiesOf('Molecule|TodoItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <TodoItem />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <TodoItem
        todo={{
          id: 0,
          text: 'foo',
          completed: false,
        }}
        editTodo={action('EditTodo')}
        deleteTodo={action('DeleteTodo')}
        completeTodo={action('CompleteTodo')}
      />
    ))
  )
  .addWithJSX(
    'completed',
    withNotes(``)(() => (
      <TodoItem
        todo={{
          id: 0,
          text: 'foo',
          completed: true,
        }}
        completeTodo={action('CompleteTodo')}
        deleteTodo={action('DeleteTodo')}
        editTodo={action('EditTodo')}
      />
    ))
  );
