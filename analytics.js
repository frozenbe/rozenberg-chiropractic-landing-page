(() => {
  const measurementId = "G-T8H1H3W6HW";
  const storageKey = "rfc_analytics_consent";
  const consentBanner = document.getElementById("analytics-consent");
  let analyticsLoaded = false;
  let currentConsent = readConsent();
  window[`ga-disable-${measurementId}`] = currentConsent !== "granted";

  function readConsent() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {
      // The visitor's choice still applies for the current page view.
    }
  }

  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      if (currentConsent !== "granted") return;
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  function showConsent() {
    if (!consentBanner) return;
    consentBanner.hidden = false;
  }

  function hideConsent() {
    if (!consentBanner) return;
    consentBanner.hidden = true;
  }

  document.addEventListener("click", (event) => {
    const consentButton = event.target.closest("[data-analytics-consent]");
    if (consentButton) {
      const choice = consentButton.dataset.analyticsConsent;
      if (choice !== "granted" && choice !== "denied") return;
      currentConsent = choice;
      window[`ga-disable-${measurementId}`] = choice !== "granted";
      saveConsent(choice);
      hideConsent();
      if (choice === "granted") loadAnalytics();
      return;
    }

    if (event.target.closest("[data-analytics-settings]")) {
      showConsent();
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || currentConsent !== "granted" || typeof window.gtag !== "function") return;

    const href = link.href;
    if (href.startsWith("tel:")) {
      window.gtag("event", "generate_lead", { method: "phone" });
    } else if (href.startsWith("sms:")) {
      window.gtag("event", "generate_lead", { method: "text_message" });
    } else if (href.startsWith("mailto:")) {
      window.gtag("event", "generate_lead", { method: "email" });
    } else if (href.includes("/schedule-now/")) {
      window.gtag("event", "generate_lead", { method: "online_scheduling" });
    } else if (href.includes("maps.app.goo.gl")) {
      window.gtag("event", "outbound_profile_click", { destination: "google_maps" });
    } else if (href.includes("yelp.com/biz/rozenberg-family-chiropractic-farmington")) {
      window.gtag("event", "outbound_profile_click", { destination: "yelp" });
    } else if (href.includes("facebook.com/profile.php?id=61593890954507")) {
      window.gtag("event", "outbound_profile_click", { destination: "facebook" });
    } else if (href.includes("rozenbergfamilychiropractic.com")) {
      window.gtag("event", "outbound_profile_click", { destination: "main_website" });
    }
  });

  if (currentConsent === "granted") {
    loadAnalytics();
  } else if (currentConsent !== "denied") {
    showConsent();
  }
})();
