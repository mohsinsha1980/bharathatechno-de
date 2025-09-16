export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  link: string;
}

export interface ServiceTechStackType {
  id: string;
  title?: string;
  description?: string;
  list: string[];
}

export interface ServiceTechnologiesType {
  title: string;
  description?: string;
  tech: ServiceTechStackType[];
}

export interface ServiceTypeDetailsType {
  id: string;
  heading: string;
  content: string;
}

export interface ServiceFeaturesType {
  title: string;
  rows: {
    id: string;
    title: string;
    description?: string;
    list: {
      id: string;
      title: string;
      description: string;
    }[];
  }[];
}

export interface ServiceExcelType {
  id: string;
  title: string;
  description: string;
}

export type contactFormType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
};

export type formErrorObjType = {
  invalid: boolean;
  message: string;
};

export type formErrorType = {
  name: formErrorObjType;
  email: formErrorObjType;
  phone: formErrorObjType;
  subject: formErrorObjType;
};

export interface ProductFeaturesType {
  title: string;
  rows: {
    id: string;
    title: string;
    description?: string;
    list: {
      id: string;
      image: string;
      description: string;
    }[];
  }[];
}

export interface ProductCaseStudy {
  title: string;
  client: string;
  industry: string;
  use: string;
  before: string;
  after: string;
}

export type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export type FAQMdFileType = {
  question: string;
  answer: string;
};

export interface PostDataType {
  id: number;
  label: string;
  link: string;
  author_picture: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  content: string;
  faqs: FAQMdFileType[];
}