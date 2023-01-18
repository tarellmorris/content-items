// @flow
import React from 'react';
import { styled, useStyletron } from 'baseui';

import {
  AnimationWrapper,
  Box,
  ContentGroupDynamic,
  SambaGridItem as GridItem,
  YoutubeEmbed,
} from '@uber/dotcom-ui';
import { useBreakpoint, DEVICE_BREAKPOINT_TYPES } from '@uber/dotcom-utils';
import Img, { Utils } from '@uber/wcb3-img';
import LazyLoad from '@uber/wcb3-lazyload';
import { Block } from 'baseui/block';

import { PlayerLayer } from './player-layer';
import { ModalLayer } from './modal-layer';
import { type ContentItemProps } from '../types';

const StyledItem = styled('div', ({ $theme, $columns }) => {
  const { mediaQuery } = $theme;

  return {
    display: 'flex',
    flexDirection: 'column',
    [mediaQuery.medium]: {
      display: 'flex',
      flexDirection: $columns === '1' ? 'row' : 'column',
    },
  };
});

const ImageContainer = styled('div', ({ $theme, $type, $columns }) => {
  const { mediaQuery, rtl, sizing } = $theme;
  let width;
  let height;

  switch ($type) {
    case 'full':
    default:
      width = '100%';
      height = '100%';
      break;
    case 'badge-small':
      width = sizing.scale1200;
      height = sizing.scale1200;
      break;
    case 'icon':
      width = sizing.scale800;
      height = sizing.scale800;
      break;
  }

  return {
    height,
    paddingRight: 0,
    marginBottom: '20px',
    width,
    [mediaQuery.medium]: {
      marginLeft: rtl ? '36px' : 0,
      marginRight: rtl ? 0 : '36px',
      marginBottom: $columns === '1' ? 0 : '20px',
    },
  };
});

const columnMap = {
  [1]: ['1/-1'],
  [2]: ['1/-1', '1/-1', 'span 4', 'span 6'],
  [3]: ['1/-1', '1/-1', 'span 4', 'span 4'],
};

export const getImageRatio = (type: string) => {
  switch (type) {
    case 'icon':
    case 'badge-small':
      return 'aspect_1_1';
    case 'full':
      return 'aspect_3_2';
    default:
      return type;
  }
};

export const ContentItem = (props: ContentItemProps) => {
  const {
    animations,
    observer,
    columns = 0,
    imageType,
    item,
    rtl,
    textColor,
    ctaColorTheme,
  } = props;
  const [, theme] = useStyletron();
  const { sizing } = theme;
  const imageAspectRatio = imageType && getImageRatio(imageType);

  const { image, videoObject, imageMobile, imageTablet, ...itemProps } = item || {};
  const { videoUrl } = videoObject || {};

  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === DEVICE_BREAKPOINT_TYPES.MOBILE;

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <GridItem $alignSelf="start" $gridColumn={columnMap[columns]}>
      <ModalLayer isOpen={isOpen} setIsOpen={setIsOpen}>
        <YoutubeEmbed videoUrl={videoUrl} autoplay="0" />
      </ModalLayer>
      <AnimationWrapper animations={animations} observer={observer} target="contentItems">
        <StyledItem $columns={columns}>
          {item && Utils.imageIsValid(image) && image && !videoUrl && (
            // $FlowFixMe suppressed for compatibility with web-code migration
            <ImageContainer $theme={theme} $type={imageType} $columns={columns}>
              <Box aspectRatio={imageAspectRatio}>
                <LazyLoad>
                  <Img
                    image={image}
                    imageTablet={imageTablet}
                    imageMobile={imageMobile}
                    rtl={rtl}
                  />
                </LazyLoad>
              </Box>
            </ImageContainer>
          )}

          {item && videoUrl && !isMobile && (
            <ImageContainer $theme={theme} $type={imageType} $columns={columns}>
              <Box aspectRatio={imageAspectRatio}>
                <PlayerLayer
                  videoObject={videoObject}
                  onClick={() => setIsOpen(true)}
                  onKeyDown={() => setIsOpen(true)}
                  role="button"
                  tabIndex={0}
                />
                {image && (
                  <LazyLoad>
                    <Img
                      image={image}
                      imageTablet={imageTablet}
                      imageMobile={imageMobile}
                      rtl={rtl}
                    />
                  </LazyLoad>
                )}
              </Box>
            </ImageContainer>
          )}

          {item && videoUrl && isMobile && (
            <Block marginBottom={sizing.scale700}>
              <YoutubeEmbed videoUrl={videoUrl} autoplay="0" />
            </Block>
          )}

          {/* $FlowFixMe suppressed for compatibility with web-code migration */}
          <ContentGroupDynamic
            headingLevelOverride={3}
            headingSize={4}
            headingSpacing={sizing.scale500}
            ctaStretch={false}
            ctaColorTheme={ctaColorTheme}
            width={[100, 100, 100]}
            color={textColor}
            rtl={rtl}
            {...itemProps}
          />
        </StyledItem>
      </AnimationWrapper>
    </GridItem>
  );
};
