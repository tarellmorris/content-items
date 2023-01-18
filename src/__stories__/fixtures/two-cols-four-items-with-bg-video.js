// @flow
import TwoColFourItems from './two-cols-four-items';

const videoAsset = {
  videoUrl1080Webm:
    'https://www.uber-assets.com/video/upload/v1557180924/videos/webloops/1920x1080/WEBM/Ellis_NYC01_Ed_WebLoop_1920x1080.webmhd.webm',
  videoUrl720Webm:
    'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
  videoUrl480Webm:
    'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
  videoUrl360Webm: 'https://uber.box.com/shared/static/xrayvjz9ytz1y7ghdq8ow8tmry0goi4o.webm',
  videoUrl1080Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1920x1080_v002.mp4',
  videoUrl720Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1280x720_v002.mp4',
  videoUrl480Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_858x480_v002.mp4',
  videoUrl360Mp4: 'https://uber.box.com/shared/static/1lhzzs0wvg5mo94hfkgx2ivtrgy9qiev.mp4',
};

export default {
  config: {
    label: 'with Four Items in Two Columns with Background Video',
    path: '/blocks/content-items/in-two-columns-four-items-with-bg-video',
  },
  props: {
    ...TwoColFourItems.props,
    autoplayVideo: videoAsset,
    containerBackgroundTransparent: true,
    marginBottom: 'full',
    marginTop: 'full',
    textColor: '#FFFFFF',
  },
};
