// @flow
import { FIELD_TYPES, FIELD_CATEGORIES } from '@uber/component-common';
import { BlockContainerSchema } from '@uber/dotcom-ui';

export const schema = {
  excludeFromAuthoring: false,
  title: 'Content Items',
  fields: [
    {
      field: 'columns',
      label: 'Columns',
      required: true,
      type: FIELD_TYPES.ENUM_COLUMNS,
      category: FIELD_CATEGORIES.DESIGN,
    },
    {
      field: 'heading',
      label: 'Heading',
      required: false,
      type: FIELD_TYPES.TEXT_LINE,
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'body',
      label: 'Body Copy',
      required: false,
      type: FIELD_TYPES.MARKDOWN,
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'image',
      label: 'Header Image Desktop',
      required: false,
      type: FIELD_TYPES.DYNAMIC_PHOTO,
      dynamicPhotoType: 'CARD',
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'imageTablet',
      label: 'Header Image Tablet',
      required: false,
      type: FIELD_TYPES.DYNAMIC_PHOTO,
      dynamicPhotoType: 'CARD',
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'imageMobile',
      label: 'Header Image Mobile',
      required: false,
      type: FIELD_TYPES.DYNAMIC_PHOTO,
      dynamicPhotoType: 'CARD',
      category: FIELD_CATEGORIES.CONTENT,
    },
    {
      field: 'cta',
      label: 'CTA',
      required: false,
      type: FIELD_TYPES.OBJECT,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'ctaPrimary',
            label: 'CTA Primary',
            required: false,
            type: FIELD_TYPES.TEXT_LINK_MODAL,
          },
          {
            field: 'ctaSecondary',
            label: 'CTA Secondary',
            required: false,
            type: FIELD_TYPES.TEXT_LINK_MODAL,
          },
        ],
      },
    },
    {
      field: 'ctaPosition',
      label: 'CTA Position',
      required: false,
      type: FIELD_TYPES.ENUM_CUSTOM,
      category: FIELD_CATEGORIES.CONTENT,
      options: [
        {
          label: 'Top',
          value: 'top',
        },
        {
          label: 'Bottom',
          value: 'bottom',
        },
      ],
    },
    {
      label: 'Content Filtering',
      type: FIELD_TYPES.COLLAPSIBLE,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'filterTagsBool',
            label: 'Use Filter Tags',
            required: false,
            type: FIELD_TYPES.TOGGLE_SWITCH,
          },
          {
            field: 'maxItemsBool',
            label: 'Use Content Items Limit',
            required: false,
            type: FIELD_TYPES.TOGGLE_SWITCH,
          },
          {
            field: 'maxItems',
            label: 'Content Items Limit',
            required: false,
            type: FIELD_TYPES.MAX_ITEMS_SLIDER,
          },
          {
            field: 'filterTags',
            label: 'Filter Tags',
            required: false,
            type: FIELD_TYPES.ARRAY,
            itemSchema: {
              fields: [
                {
                  field: 'filterTag',
                  label: 'Label',
                  required: false,
                  type: FIELD_TYPES.TEXT_LINE,
                },
              ],
            },
          },
        ],
      },
    },
    {
      field: 'ctaColorTheme',
      label: 'CTA Color Theme',
      required: false,
      type: FIELD_TYPES.BUTTON_GROUP,
      options: [
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Light',
          value: 'light',
        },
      ],
      category: FIELD_CATEGORIES.DESIGN,
    },
    {
      field: 'imageType',
      label: 'Content Items Size',
      required: false,
      type: FIELD_TYPES.ENUM_CUSTOM,
      category: FIELD_CATEGORIES.DESIGN,
      options: [
        {
          label: 'Icon - 24x24',
          value: 'icon',
        },
        {
          label: 'Badge - 48x48',
          value: 'badge-small',
        },
        {
          label: '16:9',
          value: 'aspect_16_9',
        },
        {
          label: '3:2',
          value: 'aspect_3_2',
        },
        {
          label: '1:1',
          value: 'aspect_1_1',
        },
        {
          label: '4:5',
          value: 'aspect_4_5',
        },
      ],
    },
    {
      field: 'items',
      label: 'Content Items',
      labelItemsBy: 'heading',
      required: false,
      type: FIELD_TYPES.ARRAY,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'image',
            label: 'Item Image',
            required: false,
            type: FIELD_TYPES.DYNAMIC_PHOTO,
            dynamicPhotoType: 'CARD',
          },
          {
            field: 'videoObject',
            label: 'YouTube Embed URL',
            required: false,
            type: FIELD_TYPES.OBJECT,
            itemSchema: {
              fields: [
                {
                  field: 'videoUrl',
                  label: 'Embed URL',
                  required: false,
                  type: FIELD_TYPES.YOUTUBE_EMBED_URL,
                },
                {
                  field: 'playButtonTheme',
                  label: 'Play Button Theme',
                  required: false,
                  type: FIELD_TYPES.BUTTON_GROUP,
                  options: [
                    {
                      label: 'Dark',
                      value: 'dark',
                    },
                    {
                      label: 'Light',
                      value: 'light',
                    },
                  ],
                },
              ],
            },
          },
          {
            field: 'heading',
            label: 'Item Heading',
            required: false,
            type: FIELD_TYPES.TEXT_LINE,
          },
          {
            field: 'body',
            label: 'Item Body',
            required: false,
            type: FIELD_TYPES.MARKDOWN,
          },
          {
            field: 'cta',
            label: 'Item CTA',
            required: false,
            type: FIELD_TYPES.OBJECT,
            itemSchema: {
              fields: [
                {
                  field: 'ctaPrimary',
                  label: 'CTA Primary',
                  required: false,
                  type: FIELD_TYPES.TEXT_LINK_MODAL,
                },
                {
                  field: 'ctaSecondary',
                  label: 'CTA Secondary',
                  required: false,
                  type: FIELD_TYPES.TEXT_LINK_MODAL,
                },
              ],
            },
          },
          {
            field: 'filterTag',
            label: 'Filter Tags (separated by commas, if multiple)',
            required: false,
            type: FIELD_TYPES.TEXT_LINE,
          },
        ],
      },
    },
    {
      label: 'Animations',
      type: FIELD_TYPES.COLLAPSIBLE,
      category: FIELD_CATEGORIES.ADVANCED,
      itemSchema: {
        fields: [
          {
            field: 'animations',
            type: FIELD_TYPES.ANIMATION_BUILDER,
            options: [
              { label: 'Full block', value: 'fullBlock' },
              { label: 'Content group header', value: 'contentGroupHeader' },
              { label: 'Content group body', value: 'contentGroupBody' },
              { label: 'Content group CTA', value: 'contentGroupCta' },
              { label: 'Content group image', value: 'contentGroupImage' },
              { label: 'Content items', value: 'contentItems' },
            ],
          },
        ],
      },
    },
    ...BlockContainerSchema.fields,
  ],
};
