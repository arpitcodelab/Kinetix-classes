import { InstituteInfo } from '../types';

export const instituteData: InstituteInfo = {
  name: "Kinetix Classes",
  legalEntity: "Kinetix Classes For Neet and Jee",
  address: {
    line1: "I-120, Alpha 2",
    street: "3rd Street Alpha 2",
    sector: "Alpha 2",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201310",
    full: "I 120 Alpha 2 Greater Noida 201310, 3rd Street Alpha 2, Greater Noida, Uttar Pradesh, 201310"
  },
  contact: {
    phone: "8448040355",
    phoneFormatted: "+91 84480 40355",
    phoneHref: "tel:8448040355",
    whatsappNumber: "8448040355",
    whatsappHref: "https://wa.me/918448040355?text=Hello%20Kinetix%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20my%20child."
  },
  maps: {
    placeId: "ChIJC5tZtyfrDDkR2WHg2F06RR8",
    viewUrl: "https://www.google.com/maps/search/?api=1&query=Kinetix+Classes+For+Neet+and+Jee%2C+I+120+Alpha+2+Greater+Noida+201310%2C+3rd+Street+Alpha+2%2C+Greater+Noida%2C+Uttar+Pradesh%2C+201310&query_place_id=ChIJC5tZtyfrDDkR2WHg2F06RR8",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kinetix+Classes+For+Neet+and+Jee%2C+I+120+Alpha+2+Greater+Noida+201310%2C+3rd+Street+Alpha+2%2C+Greater+Noida%2C+Uttar+Pradesh%2C+201310&destination_place_id=ChIJC5tZtyfrDDkR2WHg2F06RR8"
  },
  timings: {
    counselingHours: "Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 4:00 PM",
    note: "Offline counseling desk & classroom facility. Digital enquiry available 24/7 via WhatsApp.",
    sourceListedHours: "Monday-Sunday: 24 hours (Google Business Profile Default)"
  },
  socialProof: {
    googleRating: 5.0,
    reviewCount: 10
  },
  pillars: [
    {
      title: "Small Batch Size & Personal Mentoring",
      desc: "Limited cohort strength ensures every student receives individual doubt clarification and direct teacher attention.",
      icon: "/assets/icons/icon-small-batches.svg"
    },
    {
      title: "IITian & Doctor Faculty Team",
      desc: "Subject specialists with 8+ years of proven teaching experience in competitive NEET and JEE coaching.",
      icon: "/assets/icons/icon-expert-faculty.svg"
    },
    {
      title: "Affordable Fees & Scholarship Option",
      desc: "Accessible fee structure with Scholarship Test concessions and easy EMI installments for parents.",
      icon: "/assets/icons/icon-scholarship-emi.svg"
    },
    {
      title: "Rigorous Testing & NCERT Line-by-Line",
      desc: "Weekly chapter assessments, mock exams with comparative analysis, and comprehensive board preparation.",
      icon: "/assets/icons/icon-mock-tests.svg"
    }
  ]
};

