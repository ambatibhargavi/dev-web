export interface NavLink {
  id: string;
  title: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  sourceLink: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}