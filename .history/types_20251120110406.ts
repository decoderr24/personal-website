import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  category: 'NLP' | 'CV' | 'Prediction' | 'Other';
  // image removed — project cards will no longer display images
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}