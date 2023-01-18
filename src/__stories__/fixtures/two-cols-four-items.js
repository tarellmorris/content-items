// @flow
let imageAssetUrl = 'http://res.cloudinary.com/uber-com/image/upload/v1531952112/UberIM_001920.jpg';

export default {
  config: {
    label: 'with Four Items in Two Columns',
    path: '/blocks/content-items/in-two-columns-four-items',
  },
  props: {
    anchorName: 'two-col-four-items',
    heading: 'Featured',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    columns: 2,
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
    body: {
      htmlContent:
        '<p>It <a href="https://www.uber.com/newsroom/history">started</a> as a simple idea: What if you could request a ride from your phone? More than 5 billion trips later, we’re working to make transportation safer and more accessible.</p>',
    },
    imageType: 'full',
    items: [
      {
        image: {
          title: 'This is a test caption',
          src: imageAssetUrl,
        },
        //imageType: 'full',
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
          src: imageAssetUrl,
        },
        //imageType: 'full',
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
          src: imageAssetUrl,
        },
        //imageType: 'full',
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
      {
        image: {
          title: 'This is a test caption',
          src: imageAssetUrl,
        },
        //imageType: 'full',
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
