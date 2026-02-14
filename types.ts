
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  thumbnail: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface ExpertiseItem {
  category: string;
  tools: string[];
}

export interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
}