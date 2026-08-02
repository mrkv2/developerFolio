import React, {useEffect, useRef, useState} from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  const cardRef = useRef(null);
  const consoleRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {rootMargin: "120px 0px", threshold: 0.05}
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const updateConsolePerspective = event => {
    const consoleElement = consoleRef.current;
    if (
      !consoleElement ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = consoleElement.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    consoleElement.style.setProperty("--console-grid-x", `${x * -8}px`);
    consoleElement.style.setProperty("--console-grid-y", `${y * -8}px`);
  };

  const resetConsolePerspective = () => {
    const consoleElement = consoleRef.current;
    if (!consoleElement) return;
    consoleElement.style.setProperty("--console-grid-x", "0px");
    consoleElement.style.setProperty("--console-grid-y", "0px");
  };

  return (
    <div className="talk-cta-container">
      <article
        ref={cardRef}
        className={`${talkDetails.isDark ? "talk-cta dark-talk-cta" : "talk-cta"}${
          isInView && isPageVisible ? " talk-cta-animated" : ""
        }`}
      >
        <div className="talk-cta-glow" aria-hidden="true"></div>
        <div className="talk-cta-copy">
          <p className="talk-cta-label">Sans engagement</p>
          <h2 className="talk-card-title">{talkDetails.title}</h2>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
          <ul className="talk-reassurance" aria-label="Garanties du premier échange">
            {talkDetails.reassurance.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="card-footer-button-div">
            <a
              href={talkDetails.slides_url}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-button talk-button-primary"
            >
              Demander une consultation
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={talkDetails.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-button talk-button-secondary"
            >
              Visiter kv2.fr
            </a>
            <a
              href={talkDetails.event_url}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-whatsapp-link"
            >
              Ou échanger directement sur WhatsApp
            </a>
          </div>
        </div>
        <div className="talk-tech-visual" aria-hidden="true">
          <div
            ref={consoleRef}
            className="talk-tech-console"
            onPointerMove={updateConsolePerspective}
            onPointerLeave={resetConsolePerspective}
          >
            <div className="talk-tech-topbar">
              <span></span>
              <span></span>
              <span></span>
              <img src={require("../../assets/images/kv2.webp")} alt="" />
              <strong>ANALYSE 360° // PME & TPE</strong>
            </div>
            <div className="talk-tech-radar">
              <div className="talk-tech-grid"></div>
              <div className="talk-tech-beam"></div>
              <svg
                className="talk-tech-links"
                viewBox="0 0 300 230"
                preserveAspectRatio="none"
              >
                <line className="talk-tech-link talk-tech-link-infra talk-tech-link-performance" x1="86" y1="34" x2="150" y2="115" />
                <line className="talk-tech-link talk-tech-link-visibility talk-tech-link-security" x1="248" y1="34" x2="150" y2="115" />
                <line className="talk-tech-link talk-tech-link-visibility talk-tech-link-seo" x1="274" y1="115" x2="150" y2="115" />
                <line className="talk-tech-link talk-tech-link-pilot talk-tech-link-data" x1="217" y1="200" x2="150" y2="115" />
                <line className="talk-tech-link talk-tech-link-pilot talk-tech-link-tools" x1="83" y1="200" x2="150" y2="115" />
              </svg>
              <div className="talk-tech-core">
                <span className="talk-tech-core-company">
                  VOTRE<br />ENTREPRISE
                </span>
                <span className="talk-tech-core-kv2">
                  <img
                    src={require("../../assets/images/kv2.webp")}
                    alt=""
                  />
                  <b>.fr</b>
                </span>
                <small>ÉCOSYSTÈME 360°</small>
              </div>
              <span className="talk-tech-node talk-tech-node-infra talk-tech-node-performance" data-status="Hébergement, performance, sécurité">
                Infrastructure & sécurité
              </span>
              <span className="talk-tech-node talk-tech-node-visibility talk-tech-node-security" data-status="Site, e-commerce, identité, contenus">
                Présence & commerce
              </span>
              <span className="talk-tech-node talk-tech-node-visibility talk-tech-node-seo" data-status="SEO, SEA, réseaux sociaux">
                Visibilité & acquisition
              </span>
              <span className="talk-tech-node talk-tech-node-pilot talk-tech-node-data" data-status="Analytics, conformité, décisions">
                Données & pilotage
              </span>
              <span className="talk-tech-node talk-tech-node-pilot talk-tech-node-tools" data-status="CRM, API, outils métier, processus">
                Outils & automatisation
              </span>
              <div className="talk-tech-result-overlay">
                <div className="talk-tech-report-stage">
                  <svg viewBox="0 0 48 56">
                    <path d="M8 2h22l10 10v42H8z" />
                    <path d="M30 2v12h10M15 25h18M15 33h18M15 41h12" />
                  </svg>
                  <strong>Rapport d’audit</strong>
                  <small>Constats consolidés</small>
                </div>
                <div className="talk-tech-direction-stage">
                  <span className="talk-tech-direction-arrow">→</span>
                  <strong>Une direction claire</strong>
                  <small>Priorités → actions → progression</small>
                  <div className="talk-tech-progress">
                    <i></i>
                  </div>
                </div>
                <div className="talk-tech-kpi-stage">
                  <div className="talk-tech-kpi-heading">
                    <strong>Croissance mesurée & vérifiable</strong>
                    <small>Des décisions fondées sur des données observables</small>
                  </div>
                  <div className="talk-tech-kpi-proof">
                    <span>✓</span>
                    <div>
                      <strong>KPI traçables</strong>
                      <small>Point de départ · évolution · résultat</small>
                    </div>
                  </div>
                  <div className="talk-tech-kpi-chart">
                    <span className="talk-tech-kpi-bar talk-tech-kpi-bar-a"></span>
                    <span className="talk-tech-kpi-bar talk-tech-kpi-bar-b"></span>
                    <span className="talk-tech-kpi-bar talk-tech-kpi-bar-c"></span>
                    <span className="talk-tech-kpi-bar talk-tech-kpi-bar-d"></span>
                    <svg viewBox="0 0 220 90" preserveAspectRatio="none">
                      <polyline className="talk-tech-kpi-guide" points="8,76 62,58 112,64 162,32 212,14" />
                      <polyline points="8,76 62,58 112,64 162,32 212,14" />
                      <circle cx="8" cy="76" r="3" />
                      <circle cx="62" cy="58" r="3" />
                      <circle cx="112" cy="64" r="3" />
                      <circle cx="162" cy="32" r="3" />
                      <circle cx="212" cy="14" r="3" />
                    </svg>
                  </div>
                  <div className="talk-tech-kpi-labels">
                    <span>Acquisition</span>
                    <span>Conversion</span>
                    <span>Performance</span>
                  </div>
                  <div className="talk-tech-kpi-loop">
                    <span>Mesurer</span><i>→</i>
                    <span>Comparer</span><i>→</i>
                    <span>Vérifier</span><i>→</i>
                    <span>Ajuster</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="talk-tech-output">
              <span className="talk-tech-output-map"><i>01</i>Cartographie de l’écosystème</span>
              <span className="talk-tech-output-diagnostic"><i>02</i>Analyse croisée</span>
              <span className="talk-tech-output-priorities"><i>03</i>Priorités identifiées</span>
              <span className="talk-tech-output-roadmap"><i>04</i>Feuille de route générée</span>
              <strong className="talk-tech-status">Analyse terminée — décision éclairée</strong>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
