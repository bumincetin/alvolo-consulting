'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { COOKIE_CATEGORIES, CookieCategory } from '@/config/cookies';

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consentState, setConsentState] = useState<ConsentState>({
    necessary: true, // Always true as it's necessary
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const { language } = useLanguage();

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie_consent');
    if (!savedConsent) {
      setShowConsent(true);
    } else {
      const parsedConsent = JSON.parse(savedConsent);
      setConsentState(parsedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    const newState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(newState);
  };

  const handleRejectAll = () => {
    const newState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(newState);
  };

  const handleSavePreferences = () => {
    saveConsent(consentState);
  };

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem('cookie_consent', JSON.stringify(state));
    setShowConsent(false);
    // Dispatch event for script loading
    window.dispatchEvent(new Event('cookie:updated'));
  };

  const toggleCategory = (category: CookieCategory) => {
    if (category === 'necessary') return; // Can't toggle necessary cookies
    setConsentState(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto">
        {!showDetails ? (
          // Main banner view
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === 'tr'
                  ? 'Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır. Çerezleri yönetmek için "Daha Fazla Seçenek" butonuna tıklayabilirsiniz.'
                  : 'This website uses cookies to provide you with the best experience. Click "More Options" to manage your cookie preferences.'}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-white rounded-md transition-colors"
                style={{backgroundColor: 'var(--logo-orange)'}}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--logo-orange-ton)'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--logo-orange)'}
              >
                {language === 'tr' ? 'Tümünü Kabul Et' : 'Accept All'}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-white rounded-md transition-colors"
                style={{backgroundColor: 'var(--logo-blue)'}}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--logo-orange-ton)'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--logo-blue)'}
              >
                {language === 'tr' ? 'Tümünü Reddet' : 'Reject All'}
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 underline"
                style={{color: 'var(--logo-blue)'}}
              >
                {language === 'tr' ? 'Daha Fazla Seçenek' : 'More Options'}
              </button>
            </div>
          </div>
        ) : (
          // Detailed preferences view
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{color: 'var(--logo-blue)'}}>
              {language === 'tr' ? 'Çerez Tercihleri' : 'Cookie Preferences'}
            </h3>
            {Object.entries(COOKIE_CATEGORIES).map(([category, { title, description }]) => (
              <div key={category} className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-medium">{title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentState[category as CookieCategory]}
                    onChange={() => toggleCategory(category as CookieCategory)}
                    disabled={category === 'necessary'}
                    className="sr-only peer"
                  />
                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-200 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                    style={{
                      backgroundColor: consentState[category as CookieCategory] ? 'var(--logo-orange)' : undefined,
                      borderColor: consentState[category as CookieCategory] ? 'var(--logo-orange)' : undefined,
                    }}
                  ></div>
                </label>
              </div>
            ))}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:underline"
              >
                {language === 'tr' ? 'Geri' : 'Back'}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {language === 'tr' ? 'Tercihleri Kaydet' : 'Save Preferences'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 