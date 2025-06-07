export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface Cookie {
  name: string;
  domain: string;
  purpose: string;
  lifetime: string;
  category: CookieCategory;
  vendor: string;
}

export const COOKIES: Record<CookieCategory, Cookie[]> = {
  necessary: [
    {
      name: 'session',
      domain: 'alvoloconsulting.com',
      purpose: 'Maintains user session state',
      lifetime: 'Session',
      category: 'necessary',
      vendor: 'Alvolo Consulting'
    },
    {
      name: 'language',
      domain: 'alvoloconsulting.com',
      purpose: 'Stores user language preference',
      lifetime: '1 year',
      category: 'necessary',
      vendor: 'Alvolo Consulting'
    }
  ],
  analytics: [
    {
      name: '_ga',
      domain: '.google.com',
      purpose: 'Google Analytics - Used to distinguish users',
      lifetime: '2 years',
      category: 'analytics',
      vendor: 'Google'
    },
    {
      name: '_gid',
      domain: '.google.com',
      purpose: 'Google Analytics - Used to distinguish users',
      lifetime: '24 hours',
      category: 'analytics',
      vendor: 'Google'
    }
  ],
  marketing: [
    {
      name: '_gcl_au',
      domain: '.google.com',
      purpose: 'Google Adsense - Used for conversion tracking',
      lifetime: '3 months',
      category: 'marketing',
      vendor: 'Google'
    }
  ],
  preferences: [
    {
      name: 'theme',
      domain: 'alvoloconsulting.com',
      purpose: 'Stores user theme preference',
      lifetime: '1 year',
      category: 'preferences',
      vendor: 'Alvolo Consulting'
    }
  ]
};

export const COOKIE_CATEGORIES: Record<CookieCategory, { title: string; description: string }> = {
  necessary: {
    title: 'Necessary',
    description: 'Essential for the website to function properly. Cannot be disabled.'
  },
  analytics: {
    title: 'Analytics',
    description: 'Help us understand how visitors interact with our website.'
  },
  marketing: {
    title: 'Marketing',
    description: 'Used to track visitors across websites for marketing purposes.'
  },
  preferences: {
    title: 'Preferences',
    description: 'Remember your settings and preferences for a better experience.'
  }
}; 