// @flow
import React from 'react';
import YoutubeFilled from '@uber/icons/youtube-filled';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

import { type PlayerLayerProps } from '../types';

export const PlayerLayer = (props: PlayerLayerProps) => {
  const { videoObject, ...rest } = props;
  const [, theme] = useStyletron();
  const { sizing, colors, animation } = theme;
  const { playButtonTheme = 'light' } = videoObject || {};

  const commonOverrides = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: animation.timing300,
  };

  return (
    <>
      <Block
        overrides={{
          Block: {
            style: {
              ...commonOverrides,
              zIndex: 5,
              background: playButtonTheme === 'dark' ? colors.primaryB : colors.primaryA,
              opacity: '15%',
            },
          },
        }}
      />
      <Block
        {...rest}
        overrides={{
          Block: {
            style: {
              ...commonOverrides,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 6,
              cursor: 'pointer',
              color: playButtonTheme === 'dark' ? colors.primaryA : colors.primaryB,
            },
          },
        }}
      >
        <YoutubeFilled size={sizing.scale1600} />
      </Block>
    </>
  );
};
