export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  targetExam: 'NEET' | 'JEE' | 'BOARDS' | 'FOUNDATION' | 'DEFENCE' | 'CUET';
  classes: string;
  stream?: 'PCM' | 'PCB' | 'PCMB' | 'General';
  description: string;
  features: string[];
  duration: string;
  batchType: string[];
  svgGraphic: string;
  verified: boolean;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  verified: boolean;
  avatarSvg: string;
  studentTag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  srcWebp: string;
  srcWebp400: string;
  srcJpg: string;
  width: number;
  height: number;
  aspectRatio: number;
  category: 'classroom' | 'whiteboard' | 'facility';
}

export interface FacultyMember {
  id: string;
  role: string;
  subject: string;
  credentials: string;
  experience: string;
  badge: string;
  bio: string;
  avatarSvg: string;
  status: 'VERIFIED_CLAIM_PLACEHOLDER';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'fees' | 'batches';
}

export interface InstituteInfo {
  name: string;
  legalEntity: string;
  address: {
    line1: string;
    street: string;
    sector: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneHref: string;
    whatsappNumber: string;
    whatsappHref: string;
  };
  maps: {
    placeId: string;
    viewUrl: string;
    directionsUrl: string;
  };
  timings: {
    counselingHours: string;
    note: string;
    sourceListedHours: string;
  };
  socialProof: {
    googleRating: number;
    reviewCount: number;
    establishedYear?: number;
  };
  pillars: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
}

