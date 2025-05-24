import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
    { code: 'de', name: 'Deutsch' },
    { code: 'th', name: 'ไทย' }
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.code);
    setSelectedLanguage(language.name);
  };

  const footerLinks = [
    { path: '/terms', label: t('terms') },
    { path: '/privacy', label: t('privacy') },
    { path: '/cookie-policy', label: t('cookiePolicy') },
    { path: '/safety-tips', label: t('safetyTips') },
    { path: '/faq', label: t('faq') },
    { path: '/contact-us', label: t('contact') }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-800">KIQKO</h3>
            <p className="text-gray-400 text-sm sm:text-base">{t('connect with Asian singlesConnect with genuine Asian singles')}</p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <i className={`bi bi-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Language */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">{t('newsletter')}</h4>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="px-4 py-2 w-full rounded-t-md sm:rounded-tr-none sm:rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-b-md sm:rounded-bl-none sm:rounded-r-md transition-colors text-sm sm:text-base">
                  {t('subscribe')}
                </button>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('footer.language')}
              </label>
              <select
                value={i18n.language}
                onChange={(e) => {
                  const lang = languages.find(l => l.code === e.target.value);
                  if (lang) changeLanguage(lang);
                }}
                className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-purple-400 text-sm sm:text-base">
            © {new Date().getFullYear()} KIQKO. {t('allRightsReserved')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.path} 
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;