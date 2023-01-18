// @flow
import ThreeColsFourItems from './three-cols-four-items';

export default {
  config: {
    label: 'with Four Items in Three Columns with 16:9 Aspect Ratio',
    path: '/blocks/content-items/in-three-columns-four-items-with-16-9-aspect-ratio',
  },
  props: {
    ...ThreeColsFourItems.props,
    backgroundColor: '#C0FFEE',
    marginBottom: 'full',
    marginTop: 'full',
    imageType: 'aspect_16_9',
  },
};
