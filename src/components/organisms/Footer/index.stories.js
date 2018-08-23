import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { Footer } from 'components';

storiesOf('Organism|Footer', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Footer />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <Footer
        visibilityFilter="SHOW_ALL"
        completedCount={0}
        activeCount={0}
        setVisibilityFilter={action('SetVisibilityFilter')}
        onClearCompleted={action('ClearCompleted')}
      />
    ))
  )
  .addWithJSX(
    'show all and completed count 1 and active count 1',
    withNotes(``)(() => (
      <Footer
        visibilityFilter="SHOW_ALL"
        completedCount={1}
        activeCount={1}
        setVisibilityFilter={action('SetVisibilityFilter')}
        onClearCompleted={action('ClearCompleted')}
      />
    ))
  )
  .addWithJSX(
    'show active and completed count 0 and active count 2',
    withNotes(``)(() => (
      <Footer
        visibilityFilter="SHOW_ACTIVE"
        completedCount={0}
        activeCount={2}
        setVisibilityFilter={action('SetVisibilityFilter')}
        onClearCompleted={action('ClearCompleted')}
      />
    ))
  )
  .addWithJSX(
    'show completed and completed count 2 and active count 0',
    withNotes(``)(() => (
      <Footer
        visibilityFilter="SHOW_COMPLETED"
        completedCount={2}
        activeCount={0}
        setVisibilityFilter={action('SetVisibilityFilter')}
        onClearCompleted={action('ClearCompleted')}
      />
    ))
  );
