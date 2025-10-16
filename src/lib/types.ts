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
  picture?: File | string;
  file?: File;
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
  picture: formErrorObjType;
  file: formErrorObjType;
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

export interface OfficeLocationType {
  country: string;
  flag: string;
  address: string;
  email: string;
  phone: string;
  mapPosition: string;
  city: string;
  embedMapUrl: string;
}

export interface Attachment {
  content: string;
  mime_type: string;
  name: string;
}

export interface CompanyInfo {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  website?: string;
  address?: string;
}

export interface StaffingRequirements {
  roles: (
    | "Frontend Developer"
    | "Backend Developer"
    | "Full Stack Developer"
    | "QA Engineer"
    | "UI/UX Designer"
    | "DevOps"
    | "Project Manager"
    | "Cloud Engineer"
    | "AI Engineer"
  )[];
  numberOfResources: number;
  experienceLevel:
    | "Select Option"
    | "Junior"
    | "Mid-level (3–5 Years)"
    | "Senior (5–9 Years)"
    | "Super Senior (9+ Years)";
  skills?: string[];
  duration?:
    | "Select Option"
    | "1–3 months"
    | "3–6 months"
    | "6–12 months"
    | "Ongoing";
  availability?:
    | "Select Option"
    | "Within 2 weeks"
    | "Within 4 weeks"
    | "Flexible";
  budget?: string;
}

export interface ProjectDetails {
  toolsAndPlatforms?: string;
  requiredDomainExperience?: string;
  additionalNotes?: string;
}

export interface ProjectFormData {
  companyInfo: CompanyInfo;
  staffRequire: StaffingRequirements;
  projectDetails: ProjectDetails;
}
