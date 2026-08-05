// ============================================================
// NUTSA CONFIRMATION — CONFIGURATION
// ============================================================
// Paste your Apps Script Web App URL here.
// Get it from: Google Apps Script → Deploy → Manage deployments
// → copy the "/exec" URL.
// ============================================================

window.NUTSA_CONFIG = {
  // Your Apps Script Web App endpoint
  API_URL: "https://script.google.com/macros/s/AKfycbxc8Bxw0eFXX595oSEB02OhPaLRSZAHQ7DUC398bfZKwWm82Tlx5dFqGTi2G-33_zt_/exec",

  // Auto-login credentials (no login screen — opens straight to dashboard)
  WORKER: 1,
  PIN: "4821",

  // Poll orders every N seconds (0 = disabled)
  AUTO_REFRESH_SECONDS: 60,

  // App locale (used for date formatting)
  LOCALE: "fr-DZ"
};
