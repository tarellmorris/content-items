// @flow
import OneColFourItems from './one-col-four-items';

export default {
  config: {
    label: 'with Four Items in One Column with 4:5 aspect ratio',
    path: '/blocks/content-items/in-one-column-four-items-4-5-aspect-ratio',
  },
  props: {
    ...OneColFourItems.props,
    imageType: 'aspect_4_5',
  },
};
