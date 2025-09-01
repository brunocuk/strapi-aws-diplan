import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsDifference extends Struct.ComponentSchema {
  collectionName: 'components_components_differences';
  info: {
    displayName: 'difference';
    icon: 'check';
  };
  attributes: {
    subText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'faq';
    icon: 'folder';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsOurProcess extends Struct.ComponentSchema {
  collectionName: 'components_components_our_processes';
  info: {
    displayName: 'ourProcess';
    icon: 'arrowDown';
  };
  attributes: {
    step: Schema.Attribute.String;
  };
}

export interface ComponentsReview extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'review';
    icon: 'star';
  };
  attributes: {
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    reviewText: Schema.Attribute.Text;
  };
}

export interface ComponentsSeoComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_seo_components';
  info: {
    displayName: 'seoComponent';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentsServiceBenefits extends Struct.ComponentSchema {
  collectionName: 'components_components_service_benefits';
  info: {
    displayName: 'serviceBenefits';
    icon: 'calendar';
  };
  attributes: {
    benefitImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefitText: Schema.Attribute.Text;
    benefitTitle: Schema.Attribute.String;
  };
}

export interface ComponentsServiceComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_service_components';
  info: {
    displayName: 'serviceComponent';
    icon: 'code';
  };
  attributes: {
    benefitFour: Schema.Attribute.String;
    benefitOne: Schema.Attribute.String;
    benefits: Schema.Attribute.String;
    benefitThree: Schema.Attribute.String;
    benefitTwo: Schema.Attribute.String;
    serviceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    slugOfService: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.difference': ComponentsDifference;
      'components.faq': ComponentsFaq;
      'components.our-process': ComponentsOurProcess;
      'components.review': ComponentsReview;
      'components.seo-component': ComponentsSeoComponent;
      'components.service-benefits': ComponentsServiceBenefits;
      'components.service-component': ComponentsServiceComponent;
    }
  }
}
