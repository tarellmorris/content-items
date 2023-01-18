// @flow
import ThreeColsFourItems from './three-cols-four-items';

export default {
  config: {
    label: 'with Four Items in Three Columns with 1:1 Aspect Ratio',
    path: '/blocks/content-items/in-three-columns-four-items-with-1-1-aspect-ratio',
  },
  props: {
    ...ThreeColsFourItems.props,
    backgroundColor: '#C0FFEE',
    marginBottom: 'full',
    marginTop: 'full',
    imageType: 'aspect_1_1',
  },
};
