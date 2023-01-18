// @flow
import ThreeColsFourItems from './three-cols-four-items';

export default {
  config: {
    label: 'with Four Items in Three Columns with No Padding',
    path: '/blocks/content-items/in-three-columns-four-items-with-no-padding',
  },
  props: {
    ...ThreeColsFourItems.props,
    backgroundColor: '#C0FFEE',
    marginBottom: 'full',
    marginTop: 'full',
    removePaddingBottom: true,
    removePaddingTop: true,
    removePaddingSides: true,
  },
};
