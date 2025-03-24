/**
 * Utility to handle styles for elements in dark mode that are difficult to override with CSS
 */

export const applyDarkModeOverrides = () => {
  // Create and inject styles once instead of manipulating DOM elements repeatedly
  const injectDarkModeStyles = () => {
    const styleEl = document.createElement('style');
    styleEl.id = 'dark-mode-overrides';
    
    // Add all dark mode overrides in a single style block
    styleEl.textContent = `
      [data-theme="dark"] .partners-title {
        background: none !important;
        background-image: none !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
        background-clip: unset !important;
        text-fill-color: unset !important;
        color: white !important;
        opacity: 1 !important;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
      }
    `;
    
    // Only append if it doesn't already exist
    if (!document.getElementById('dark-mode-overrides')) {
      document.head.appendChild(styleEl);
    }
  };

  // Apply styles once on initialization
  injectDarkModeStyles();

  // Use a single mutation observer for theme changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        // No need to reapply - CSS selectors will handle it
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });
}; 