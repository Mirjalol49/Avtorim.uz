/**
 * Optimized method to fix color issues in dark mode using CSS variables and stylesheets
 */

export function fixColorIssues() {
  // Create a style element with all necessary overrides
  const createStylesheet = () => {
    // Check if stylesheet already exists
    if (document.getElementById('color-fixes-stylesheet')) {
      return;
    }
    
    const styleEl = document.createElement('style');
    styleEl.id = 'color-fixes-stylesheet';
    
    // Consolidated stylesheet with all necessary overrides
    styleEl.textContent = `
      /* Dark mode text color fixes */
      [data-theme="dark"] .faq-question h3,
      [data-theme="dark"] .faq-answer p,
      [data-theme="dark"] .info-item h3,
      [data-theme="dark"] .info-item p,
      [data-theme="dark"] .info-item a,
      [data-theme="dark"] .video-card-title,
      [data-theme="dark"] .brand-name {
        color: #222222 !important;
      }
      
      /* Dark mode background color fixes */
      [data-theme="dark"] .faq-item,
      [data-theme="dark"] .info-item,
      [data-theme="dark"] .partner-card {
        background-color: #f0f0f0 !important;
        border-color: #dddddd !important;
      }
      
      /* Partners title fix */
      [data-theme="dark"] .partners-title {
        color: #FFFFFF !important;
      }
      
      /* Fix partner logos in dark mode */
      [data-theme="dark"] .partner-logo {
        filter: grayscale(0) !important;
        opacity: 1 !important;
      }
      
      /* Global fixes for both light and dark mode */
      .video-card-title,
      .brand-name {
        color: #222222 !important;
      }
    `;
    
    document.head.appendChild(styleEl);
  };

  // Apply only once on initialization
  createStylesheet();
} 