export type SocialProvider = 'github' | 'linkedin' | 'profile' | 'email' | 'website';

export interface SocialLink {
  provider: SocialProvider;
  label: string;
  url: string;
}

export interface FooterContent {
  madeBy: string;
  version: string;
  sourceLabel: string;
  socialLinks: SocialLink[];
}
