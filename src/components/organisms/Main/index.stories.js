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
