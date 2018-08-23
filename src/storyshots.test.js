import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { setStubbingMode } from 'react-stubber';
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
import { addSerializer } from 'jest-snapshot';

setStubbingMode(true);

addSerializer(styleSheetSerializer);

initStoryshots({
  suite: 'FileProperties',
  test: multiSnapshotWithOptions({}),
});
