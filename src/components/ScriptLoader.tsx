'use client';

import { useEffect } from 'react';

interface ScriptLoaderProps {
  src?: string;
  code?: string;
  category: 'analytics' | 'marketing' | 'preferences';
  id?: string;
  async?: boolean;
  defer?: boolean;
}

export const ScriptLoader = ({ src, code, category, id, async, defer }: ScriptLoaderProps) => {
  useEffect(() => {
    const loadScript = () => {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) return;

      const consentState = JSON.parse(consent);
      if (consentState[category]) {
        if (src) {
          const script = document.createElement('script');
          script.src = src;
          if (id) script.id = id;
          if (async) script.async = true;
          if (defer) script.defer = true;
          document.body.appendChild(script);
        }
        if (code) {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          if (id) script.id = id;
          script.innerHTML = code;
          document.head.appendChild(script);
        }
      }
    };

    // Load script on mount if consent is already given
    loadScript();

    // Listen for consent changes
    window.addEventListener('cookie:updated', loadScript);

    return () => {
      window.removeEventListener('cookie:updated', loadScript);
    };
  }, [src, code, category, id, async, defer]);

  return null;
}; 