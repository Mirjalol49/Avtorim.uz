import translations from './translations';

/**
 * Get text in the current language
 * @param {string} path - Path to the text in the translations object (e.g., 'header.services')
 * @param {string} language - Current language code (uz, en, ru)
 * @param {string} fallback - Fallback text if translation not found
 * @returns {string} Translated text
 */
export const getText = (path, language, fallback = '') => {
  try {
    // Split the path into parts (e.g., 'header.services' => ['header', 'services'])
    const parts = path.split('.');
    
    // Navigate through the translations object
    let result = translations;
    for (const part of parts) {
      result = result[part];
      if (!result) {
        return fallback;
      }
    }
    
    // Return the text for the current language or fallback
    return result[language] || fallback;
  } catch (error) {
    console.error(`Translation error for path: ${path}`, error);
    return fallback;
  }
}; 