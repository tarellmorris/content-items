// @flow
import ThreeColsFourItems from './three-cols-four-items';

export default {
  config: {
    label: 'with Four Items in Three Columns with Theme and No Margins',
    path: '/blocks/content-items/in-three-columns-four-items-with-theme-no-margins',
  },
  props: {
    ...ThreeColsFourItems.props,
    backgroundColor: '#C0FFEE',
    containerBackgroundColor: '#5f9ea0',
    marginBottom: 'none',
    marginTop: 'none',
    textColor: '#B4D455',
  },
};
