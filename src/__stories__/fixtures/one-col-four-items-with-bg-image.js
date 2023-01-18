// @flow
import OneColFourItems from './one-col-four-items';

const bgImageLarge = {
  title: 'This is a test caption',
  src: 'http://res.cloudinary.com/uber-com/image/upload/v1531952112/UberIM_001920.jpg',
  rtlMirror: true,
};
const bgImageMedium = {
  title: 'tis is an test cpation',
  src: 'https://www.uber-assets.com/image/upload/v1534193330/banner_full_imgRight_768-T.png',
  rtlMirror: true,
};
const bgImageSmall = {
  title: 'tis is an test cpation',
  src: 'https://www.uber-assets.com/image/upload/v1534193330/banner_full_bottom_375-M.png',
  rtlMirror: true,
};

export default {
  config: {
    label: 'with Four Items in One Column with Background Image',
    path: '/blocks/content-items/in-one-column-four-items-with-bg-image',
  },
  props: {
    ...OneColFourItems.props,
    backgroundImageLarge: bgImageLarge,
    backgroundImageMedium: bgImageMedium,
    backgroundImageSmall: bgImageSmall,
    marginBottom: 'full',
    marginTop: 'full',
  },
};
