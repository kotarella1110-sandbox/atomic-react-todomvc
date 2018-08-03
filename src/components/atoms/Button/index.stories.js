import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
  .addWithJSX('default', withNotes(``)(() => <Button>foo</Button>))
  .addWithJSX(
    'click',
    withNotes(``)(() => <Button onClick={action('Click')}>foo</Button>)
  );
