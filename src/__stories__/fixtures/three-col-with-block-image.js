// @flow
let svgAssetUrl =
  'https://www.uber-assets.com/image/upload/q_auto,c_fill,w_85,h_85/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg';

export default {
  config: {
    label: 'with Block Image in Three Columns',
    path: '/blocks/content-items/in-three-columns-with-block-image',
  },
  props: {
    anchorName: 'three-col-with-block-image',
    heading: 'Featured',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    columns: 3,
    flushBottom: 'true',
    cta: {
      ctaPrimary: {
        text: 'Sign up to drive',
        href: 'https://www.uber.com/',
      },
      ctaSecondary: {
        text: 'Sign up to drive',
        href: 'https://www.uber.com/',
      },
    },
    ctaPosition: 'top',
    body: {
      htmlContent:
        '<p>It <a href="https://www.uber.com/newsroom/history">started</a> as a simple idea: What if you could request a ride from your phone? More than 5 billion trips later, we’re working to make transportation safer and more accessible.</p>',
    },
    image: {
      title: 'The new app. Build for drivers, with drivers.',
      src: 'https://www.uber-assets.com/image/upload/v1532073835/illustration.svg',
    },
    imageTablet: {
      title: 'This is an test mobile cpation',
      src: 'https://www.uber-assets.com/image/upload/v1534193330/banner_full_imgRight_768-T.png',
    },
    imageMobile: {
      title: 'This is an test mobile cpation',
      src: 'https://www.uber-assets.com/image/upload/v1534193330/banner_full_bottom_375-M.png',
    },
    imageType: 'icon',
    items: [
      {
        image: {
          title: 'This is a test caption',
          src: svgAssetUrl,
        },
        //imageType: 'icon',
        heading: "Who's driving Uber",
        body: {
          htmlContent:
            '<p>We’re building a culture within Uber that emphasizes doing the right thing, period, for riders, drivers, and employees.</p>',
        },
        cta: {
          ctaPrimary: {
            text: 'Sign up to drive',
            href: 'https://www.uber.com/',
          },
        },
      },
      {
        image: {
          title: 'This is a test caption',
          src: svgAssetUrl,
        },
        //imageType: 'icon',
        heading: 'Getting diversity right',
        body: {
          htmlContent:
            '<p>It’s our goal to create a workplace that is inclusive and reflects the diversity of the cities we serve.</p>',
        },
        cta: {
          ctaPrimary: {
            text: 'Sign up to drive',
            href: 'https://www.uber.com/',
          },
        },
      },
      {
        image: {
          title: 'This is a test caption',
          src: svgAssetUrl,
        },
        //imageType: 'badge-small',
        heading: 'This is a heading',
        body: {
          htmlContent:
            '<p>It <a href="https://www.uber.com/newsroom/history">started</a> as a simple idea: What if you could request a ride from your phone? More than 5 billion trips later, we’re working to make transportation safer and more accessible.</p>',
        },
        cta: {
          ctaPrimary: {
            text: 'Sign up to drive',
            href: 'https://www.uber.com/',
          },
        },
      },
    ],
  },
};
