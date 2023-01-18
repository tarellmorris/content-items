// @flow
import {
  type BlockContainerProps,
  type MarkdownBodyType,
  type CtaPropsType,
} from '@uber/dotcom-ui';
import { type Image } from '@uber/wcb3-img';

type VideoObject = {
  playButtonTheme?: string,
  videoUrl: string,
};

export type PlayerLayerProps = {
  videoObject?: VideoObject,
};

export type ContentProps = {
  ...BlockContainerProps,

  animations?: ?{
    desktop: [],
    tablet: [],
    mobile: [],
  },
  columns?: number,
  cta?: CtaPropsType,
  ctaColorTheme?: string,
  ctaPosition?: string,
  textColor?: string,
  body?: MarkdownBodyType,
  heading?: string,
  flushBottom?: string,
  image?: Image,
  imageTablet?: Image,
  imageMobile?: Image,
  objectFit?: string,
  items: Array<ItemProps>,
  imageType?: string,
  rtl?: boolean,
  eyebrow?: string,
  filterTagsBool?: boolean,
  maxItemsBool?: boolean,
  filterTags?: Array<{ filterTag: string }>,
  maxItems?: Array<number>,
};

export type ContentItemProps = {
  animations?: ?{
    desktop: [],
    tablet: [],
    mobile: [],
  },
  observer?: ?IntersectionObserverEntry,
  columns?: number,
  imageType?: string,
  item?: ItemProps,
  rtl?: boolean,
  textColor?: string,
  ctaColorTheme?: string,
};

export type ItemProps = {
  body?: MarkdownBodyType,
  cta?: CtaPropsType,
  heading?: string,
  image?: Image,
  videoObject?: VideoObject,
  imageTablet?: Image,
  imageMobile?: Image,
  filterTag?: string,
};
