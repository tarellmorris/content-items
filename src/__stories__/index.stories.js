// @flow
import React from 'react';

import { FIXTURES } from './';
import Block from '../';

export default {
  meta: {
    disableSnapshot: true,
  },
};

// $FlowFixMe - unclear-type
export const WithFourItemsInOneColumn = () => {
  const val = FIXTURES.oneColFourItems;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithSmallBadgesInOneColumnNoHeader = () => {
  const val = FIXTURES.oneColWithIconsNoHeader;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumns = () => {
  const val = FIXTURES.threeColsFourItems;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithBlockImageInThreeColumns = () => {
  const val = FIXTURES.threeColsBlockImage;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithIconsInThreeColumns = () => {
  const val = FIXTURES.threeColsWithIcons;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInTwoColumns = () => {
  const val = FIXTURES.twoColsFourItems;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInOneColumnWithBackgroundImage = () => {
  const val = FIXTURES.oneColFourItemsWithBgImage;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInTwoColumnsWithBackgroundVideo = () => {
  const val = FIXTURES.twoColsFourItemsWithBgVideo;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumnsWithThemeAndNoMargins = () => {
  const val = FIXTURES.threeColsFourItemsWithThemeNoMargins;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumnsWithNoPadding = () => {
  const val = FIXTURES.threeColsFourItemsWithNoPadding;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInOneColumnWith169AspectRatio = () => {
  const val = FIXTURES.oneColFourItems16by9AspectRatio;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInOneColumnWith45AspectRatio = () => {
  const val = FIXTURES.oneColFourItems4by5AspectRatio;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumnsWith169AspectRatio = () => {
  const val = FIXTURES.threeColFourItems16by9AspectRatio;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumnsWith45AspectRatio = () => {
  const val = FIXTURES.threeColFourItems4by5AspectRatio;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
export const WithFourItemsInThreeColumnsWith11AspectRatio = () => {
  const val = FIXTURES.threeColFourItems1by1AspectRatio;
  const props = typeof val?.props === 'function' ? val.props() : val?.props;
  return <Block {...props} />;
};
