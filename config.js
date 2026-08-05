// ============================================================
// NUTSA CONFIRMATION — CONFIGURATION
// ============================================================
// Paste your Apps Script Web App URL here.
// Get it from: Google Apps Script → Deploy → Manage deployments
// → copy the "/exec" URL.
// ============================================================

window.NUTSA_CONFIG = {
  // Your Apps Script Web App endpoint
  API_URL: "https://script.google.com/macros/s/PASTE_YOUR_DEPLOYMENT_ID_HERE/exec",

  // Poll orders every N seconds (0 = disabled)
  AUTO_REFRESH_SECONDS: 60,

  // App locale (used for date formatting)
  LOCALE: "fr-DZ"
};
