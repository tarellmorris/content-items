// @flow
import ThreeColsFourItems from './three-cols-four-items';

export default {
  config: {
    label: 'with Four Items in Three Columns with 4:5 Aspect Ratio',
    path: '/blocks/content-items/in-three-columns-four-items-with-4-5-aspect-ratio',
  },
  props: {
    ...ThreeColsFourItems.props,
    backgroundColor: '#C0FFEE',
    marginBottom: 'full',
    marginTop: 'full',
    imageType: 'aspect_4_5',
  },
};
