import React, {useEffect, useState} from "react";
import "./AnalyticsConsent.scss";

const MEASUREMENT_ID = "G-QK3ZE5LBTP";
const CONSENT_KEY = "analyticsConsent";

function loadAnalytics() {
  if (document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.ga4 = MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {anonymize_ip: true});
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(() => {
    try {
      return window.localStorage.getItem(CONSENT_KEY);
    } catch (error) {
      return null;
    }
  });

  useEffect(() => {
    if (consent === "accepted") loadAnalytics();
  }, [consent]);

  function chooseConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      // The choice still applies for the current page when storage is blocked.
    }
    setConsent(value);
  }

  if (consent) return null;

  return (
    <aside
      className="analytics-consent"
      role="dialog"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div>
        <h2 id="analytics-consent-title">Mesure d’audience</h2>
        <p id="analytics-consent-description">
          Ce site utilise Google Analytics uniquement avec votre accord afin de
          comprendre son utilisation et d’améliorer son contenu.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" onClick={() => chooseConsent("refused")}>
          Refuser
        </button>
        <button
          type="button"
          className="analytics-consent-accept"
          onClick={() => chooseConsent("accepted")}
        >
          Accepter
        </button>
      </div>
    </aside>
  );
}
