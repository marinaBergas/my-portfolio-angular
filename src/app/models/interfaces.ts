export interface Project {
  _id: string;
  title: string;
  description: string;
  logoImg: string;
  imgscreenshot: string;
  url: string;
  projectType: string;
  __v: number;
}
export interface WorkExperiences {
  prevExperience: string;
  workPlace: string;
  location: string;
  period: string;
  periodCalenderStart: string;
  periodCalenderEnd: string;
}
export interface Education {
  education: string;
  educationPlace: string;
  educationStart: string;
  educationEnd: string;
}
export interface navigationServiceValues {
  id: number;
  service: string;
}
