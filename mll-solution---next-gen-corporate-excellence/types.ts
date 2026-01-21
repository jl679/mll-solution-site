
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Contact = 'contact',
  AIConsultant = 'ai-consultant'
}
