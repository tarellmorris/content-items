// @flow
import React from 'react';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';
import { Pagination } from 'baseui/pagination';

import {
  AnimationWrapper,
  OBSERVER_THRESHOLD,
  BlockContainer,
  ContentGroupDynamic,
  contentGroupIsValid,
  CtaGroup,
  ctaGroupIsValid,
  SambaGrid as Grid,
  SambaGridItem as GridItem,
} from '@uber/dotcom-ui';
import { useIntersectionObserver } from '@uber/dotcom-utils';
import Img, { Utils } from '@uber/wcb3-img';
import LazyLoad from '@uber/wcb3-lazyload';

import { ButtonGroup, MODE } from 'baseui/button-group';
import { Button, SHAPE } from 'baseui/button';

import { ContentItem } from './components';
import { type ContentProps } from './types';

const MAX_ITEMS_DEFAULT = 8;

function isValidArray(arr) {
  return Boolean(Array.isArray(arr) && arr.length > 0);
}

const buttonStyles = {
  BaseButton: {
    style: ({ $theme }) => ({
      margin: $theme.sizing.scale300,
      whiteSpace: 'nowrap',
    }),
  },
};
const buttonGroupStyles = {
  Root: {
    style: ({ $theme }) => ({
      marginTop: $theme.sizing.scale800,
      display: 'flex',
      flexWrap: 'wrap',
    }),
  },
};

export const ContentItems = (props: ContentProps) => {
  const {
    animations,

    alignContainer,
    anchorName,
    autoplayVideo,
    backgroundColor,
    backgroundFullBleed,
    backgroundImageLarge,
    backgroundImageMedium,
    backgroundImageSmall,
    backgroundOverlay,
    containerBackgroundColor,
    containerBackgroundTransparent = true,
    height,
    marginBottom,
    marginTop,
    removePaddingBottom,
    removePaddingSides,
    removePaddingTop,

    filterTagsBool = false,
    maxItemsBool = false,
    filterTags,
    maxItems,

    columns,
    ctaPosition,
    cta,
    ctaColorTheme,
    textColor,
    body,
    heading,
    flushBottom,
    image,
    imageTablet,
    imageMobile,
    objectFit,
    items,
    imageType,
    rtl,
    eyebrow,
  } = props;

  const [ref, intersectionObserverEntry] = useIntersectionObserver({
    threshold: OBSERVER_THRESHOLD,
  });

  const [selected, setSelected] = React.useState([]);
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const hasHeaderContent = contentGroupIsValid({ heading, body, cta });
  const hasCtaGroup = ctaGroupIsValid(cta);
  const removeBottomMargin = flushBottom === 'true' ? 'none' : marginBottom;
  const ctaTop = hasCtaGroup && ctaPosition === 'top' ? cta : {};

  const formattedMaxItems = maxItems === undefined ? MAX_ITEMS_DEFAULT : maxItems[0];

  const filteredItems = items?.filter((item, i) => {
    const lowercaseItemFilterTags = item.filterTag
      ?.split(',')
      .map((item) => item.toLowerCase().trim());
    const lowercaseActiveFilters = activeFilters?.map((item) => item.toLowerCase());

    return lowercaseActiveFilters?.length > 0
      ? lowercaseActiveFilters.some((item) => lowercaseItemFilterTags?.includes(item))
      : item;
  });

  const pages = Math.ceil(filteredItems?.length / formattedMaxItems);
  const paginationCheck1 = items?.length > formattedMaxItems;
  const paginationCheck2 = pages > 1;
  const startSlice = (currentPage - 1) * formattedMaxItems;
  const endSlice = currentPage * formattedMaxItems;
  const filteredSlice = filteredItems?.slice(startSlice, endSlice);

  React.useEffect(() => {
    if (!filterTagsBool) {
      setActiveFilters([]);
      setSelected([]);
    } else {
      setActiveFilters([]);
    }
  }, [filterTagsBool]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters, maxItems]);

  return (
    <AnimationWrapper
      ref={ref}
      observer={intersectionObserverEntry}
      target="fullBlock"
      animations={animations}
    >
      <BlockContainer
        alignContainer={alignContainer}
        anchorName={anchorName}
        autoplayVideo={autoplayVideo}
        backgroundColor={backgroundColor}
        backgroundFullBleed={backgroundFullBleed}
        backgroundImageLarge={backgroundImageLarge}
        backgroundImageMedium={backgroundImageMedium}
        backgroundImageSmall={backgroundImageSmall}
        backgroundOverlay={backgroundOverlay}
        containerBackgroundColor={containerBackgroundColor}
        containerBackgroundTransparent={containerBackgroundTransparent}
        hasHeading={!!heading}
        height={height}
        marginBottom={removeBottomMargin}
        marginTop={marginTop}
        removePaddingBottom={removePaddingBottom}
        removePaddingSides={removePaddingSides}
        removePaddingTop={removePaddingTop}
        textColor={textColor}
      >
        {hasHeaderContent && (
          <GridItem>
            <Grid>
              <GridItem $gridColumn={['1/-1', '1/-1', 'span 7', 'span 8']}>
                <ContentGroupDynamic
                  animations={animations}
                  observer={intersectionObserverEntry}
                  heading={heading}
                  headingAnchorName={anchorName}
                  headingLevelOverride={2}
                  headingSize={2}
                  body={body}
                  cta={ctaTop}
                  ctaColorTheme={ctaColorTheme}
                  color={textColor}
                  rtl={rtl}
                  eyebrow={eyebrow}
                />
              </GridItem>
            </Grid>
          </GridItem>
        )}

        {Utils.imageIsValid(image) && image && (
          <AnimationWrapper
            as={GridItem}
            observer={intersectionObserverEntry}
            target="contentGroupImage"
            animations={animations}
          >
            <AspectRatioBox aspectRatio={64 / 15}>
              <AspectRatioBoxBody>
                <LazyLoad>
                  <Img
                    image={image}
                    imageTablet={imageTablet}
                    imageMobile={imageMobile}
                    rtl={rtl}
                    objectFit={objectFit}
                  />
                </LazyLoad>
              </AspectRatioBoxBody>
            </AspectRatioBox>
          </AnimationWrapper>
        )}

        {filterTagsBool && filterTags && (
          <GridItem>
            <ButtonGroup
              shape={SHAPE.pill}
              mode={MODE.checkbox}
              selected={selected}
              onClick={(event, index) => {
                if (!selected.includes(index)) {
                  setSelected([...selected, index]);
                  // $FlowIgnore - innerText is guaranteed
                  setActiveFilters([...activeFilters, event.target.innerText]);
                } else {
                  setSelected(selected.filter((value) => value !== index));
                  setActiveFilters(
                    // $FlowIgnore - innerText is guaranteed
                    activeFilters.filter((value) => value !== event.target.innerText)
                  );
                }
              }}
              overrides={buttonGroupStyles}
            >
              {filterTags.map((keyword, i) => (
                <Button overrides={buttonStyles} key={i}>
                  {keyword.filterTag}
                </Button>
              ))}
            </ButtonGroup>
          </GridItem>
        )}

        {isValidArray(items) &&
          (!maxItemsBool || items.length <= formattedMaxItems) &&
          filteredItems?.map((item, i) => (
            <ContentItem
              animations={animations}
              observer={intersectionObserverEntry}
              key={i}
              item={item}
              ctaColorTheme={ctaColorTheme}
              imageType={imageType}
              rtl={rtl}
              textColor={textColor}
              columns={columns}
            />
          ))}

        {isValidArray(items) &&
          maxItemsBool &&
          items.length > formattedMaxItems &&
          filteredSlice?.map((item, i) => (
            <ContentItem
              animations={animations}
              observer={intersectionObserverEntry}
              key={i}
              item={item}
              ctaColorTheme={ctaColorTheme}
              imageType={imageType}
              rtl={rtl}
              textColor={textColor}
              columns={columns}
            />
          ))}

        {maxItemsBool && paginationCheck1 && paginationCheck2 && (
          <GridItem
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pagination
              numPages={pages}
              currentPage={currentPage}
              onPageChange={({ nextPage }) => {
                setCurrentPage(Math.min(Math.max(nextPage, 1), pages));
              }}
            />
          </GridItem>
        )}

        {hasCtaGroup && ctaPosition === 'bottom' && (
          <AnimationWrapper
            as={GridItem}
            observer={intersectionObserverEntry}
            target="contentGroupCta"
            animations={animations}
          >
            <CtaGroup {...cta} ctaColorTheme={ctaColorTheme} rtl={rtl} />
          </AnimationWrapper>
        )}
      </BlockContainer>
    </AnimationWrapper>
  );
};

ContentItems.defaultProps = {
  columns: 2,
  ctaPosition: 'top',
};

export default ContentItems;
