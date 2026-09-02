export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  links: ProjectLink[];
  imageUrl?: string;
  featured?: boolean;
}
