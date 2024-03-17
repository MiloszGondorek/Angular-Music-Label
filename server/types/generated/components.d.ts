import type { Schema, Attribute } from '@strapi/strapi';

export interface MapMapBox extends Schema.Component {
  collectionName: 'components_map_map_boxes';
  info: {
    displayName: 'MapBox';
  };
  attributes: {
    Image: Attribute.Media;
    Header: Attribute.String;
    Description: Attribute.String;
  };
}

export interface ReusableButton extends Schema.Component {
  collectionName: 'components_reusable_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Text: Attribute.String;
    Color_in_HEX: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ReusableImageLink extends Schema.Component {
  collectionName: 'components_reusable_image_links';
  info: {
    displayName: 'ImageLink';
  };
  attributes: {
    Link: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface ReusableInfo extends Schema.Component {
  collectionName: 'components_reusable_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
    YT_link: Attribute.Text;
  };
}

export interface ReusableLink extends Schema.Component {
  collectionName: 'components_reusable_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'map.map-box': MapMapBox;
      'reusable.button': ReusableButton;
      'reusable.image-link': ReusableImageLink;
      'reusable.info': ReusableInfo;
      'reusable.link': ReusableLink;
    }
  }
}
