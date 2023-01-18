// @flow
let svgAssetUrl =
  'https://www.uber-assets.com/image/upload/q_auto,c_fill,w_85,h_85/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg';

export default {
  config: {
    label: 'with Small Badges in one Column No Header',
    path: '/blocks/content-items/icons-in-one-column-no-header',
  },
  props: {
    anchorName: 'one-col-with-icons-no-header',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    columns: 1,
    cta: {
      ctaPrimary: {
        text: 'Sign up to drive',
        href: 'https://www.uber.com/',
      },
      ctaSecondary: {
        text: 'Sign up to ride',
        href: 'https://www.uber.com/',
      },
    },
    ctaPosition: 'bottom',
    imageType: 'badge-small',
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
