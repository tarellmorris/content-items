// @flow
let svgAssetUrl =
  'https://www.uber-assets.com/image/upload/q_auto,c_fill,w_48,h_48/v1535522710/assets/8e/cc5c27-1604-4e6f-ad4d-11fec148143a/original/document.svg';

export default {
  config: {
    label: 'with Icons in Three Columns',
    path: '/blocks/content-items/icons-in-three-columns',
  },
  props: {
    anchorName: 'three-col-with-icons',
    //heading: 'Featured',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    columns: 3,
    // body: {
    //   htmlContent:
    //     '<p>It <a href="https://www.uber.com/newsroom/history">started</a> as a simple idea: What if you could request a ride from your phone? More than 5 billion trips later, we’re working to make transportation safer and more accessible.</p>',
    // },
    ctaPosition: 'top',
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
        //imageType: 'icon',
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
