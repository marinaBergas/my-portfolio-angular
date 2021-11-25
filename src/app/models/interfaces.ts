export interface Project {
  id: number;
  logoImg: string;
  projectType: string;
  url: string;
  imgscreenshot: string;
  title: string;
  description: string;
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
