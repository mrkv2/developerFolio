import React from "react";
import {Fade} from "react-reveal";
import {digitalAudit} from "../../portfolio";
import "./DigitalAudit.scss";

export default function DigitalAudit() {
  if (!digitalAudit.display) return null;

  return (
    <Fade bottom duration={900} distance="18px">
      <section
        className="main audit-section"
        id="audit"
        aria-labelledby="audit-title"
      >
        <header className="audit-header">
          <p className="audit-eyebrow">{digitalAudit.eyebrow}</p>
          <h1 id="audit-title">{digitalAudit.title}</h1>
          <p className="subTitle audit-intro">{digitalAudit.subtitle}</p>
        </header>

        <div
          className="audit-journey"
          aria-label="Parcours de consultation et d’audit"
        >
          <div className="audit-scanner" aria-hidden="true"></div>
          {digitalAudit.steps.map((step, index) => (
            <div
              className="audit-step"
              key={step}
              style={{"--audit-step": index}}
            >
              <span aria-hidden="true">{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>

        <div className="audit-panels">
          <article className="audit-panel audit-panel-findings">
            <p className="audit-panel-number" aria-hidden="true">
              01
            </p>
            <h2>Ce que l’audit permet d’identifier</h2>
            <ul>
              {digitalAudit.findings.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="audit-panel audit-panel-kv2">
            <p className="audit-panel-number" aria-hidden="true">
              02
            </p>
            <h2>Quand un suivi KV2 est pertinent</h2>
            <ul>
              {digitalAudit.benefits.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="audit-conclusion">{digitalAudit.conclusion}</p>
      </section>
    </Fade>
  );
}
