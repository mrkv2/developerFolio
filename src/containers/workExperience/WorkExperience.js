import React, {useContext, useEffect, useRef, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const updateVisualGravity = event => {
    const visual = visualRef.current;
    if (
      !visual ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = visual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    visual.style.setProperty("--outer-x", `${x * 14}px`);
    visual.style.setProperty("--outer-y", `${y * 14}px`);
    visual.style.setProperty("--middle-x", `${x * -11}px`);
    visual.style.setProperty("--middle-y", `${y * -11}px`);
    visual.style.setProperty("--inner-x", `${x * 18}px`);
    visual.style.setProperty("--inner-y", `${y * 18}px`);
    visual.style.setProperty("--core-x", `${x * 7}px`);
    visual.style.setProperty("--core-y", `${y * 7}px`);
    visual.style.setProperty("--stars-x", `${x * -9}px`);
    visual.style.setProperty("--stars-y", `${y * -9}px`);
  };

  const resetVisualGravity = () => {
    const visual = visualRef.current;
    if (!visual) return;

    [
      "--outer-x",
      "--outer-y",
      "--middle-x",
      "--middle-y",
      "--inner-x",
      "--inner-y",
      "--core-x",
      "--core-y",
      "--stars-x",
      "--stars-y"
    ].forEach(property => visual.style.setProperty(property, "0px"));
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.05, rootMargin: "0px 0px -5% 0px"}
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (workExperiences.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <section
          ref={sectionRef}
          className={`experience-container${isVisible ? " is-visible" : ""}`}
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-layout">
            <div
              ref={visualRef}
              className="experience-visual"
              aria-hidden="true"
              onPointerMove={updateVisualGravity}
              onPointerLeave={resetVisualGravity}
            >
              <div className="experience-stars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="experience-energy-wave"></div>
              <div className="experience-orbit experience-orbit-outer">
                <span className="experience-node experience-node-a">
                  PME
                  <b>Une expertise mutualisée et accessible</b>
                </span>
                <span className="experience-node experience-node-b">
                  Projets
                  <b>Chaque mission enrichit la suivante</b>
                </span>
              </div>
              <div className="experience-orbit experience-orbit-middle">
                <span className="experience-node experience-node-a">
                  Inside Lab
                  <b>Tester les idées avant de les déployer</b>
                </span>
                <span className="experience-node experience-node-b">
                  Formations
                  <b>Des compétences continuellement actualisées</b>
                </span>
              </div>
              <div className="experience-orbit experience-orbit-inner">
                <span className="experience-node experience-node-a">
                  Outils
                  <b>Un socle partagé, fiable et éprouvé</b>
                </span>
                <span className="experience-node experience-node-b">
                  Données
                  <b>Capitaliser sur les retours du terrain</b>
                </span>
              </div>
              <div className="experience-core">
                <i></i>
                <img
                  src={require("../../assets/images/kv2.webp")}
                  alt=""
                />
                <small>écosystème</small>
              </div>
              <span className="experience-flow-dot experience-flow-dot-a"></span>
              <span className="experience-flow-dot experience-flow-dot-b"></span>
              <span className="experience-flow-dot experience-flow-dot-c"></span>
              <span className="experience-flow-dot experience-flow-dot-d"></span>
              <p className="experience-visual-caption">
                Chaque interaction enrichit l’écosystème
              </p>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h1 className="experience-heading" id="experience-title">
                  {workExperiences.title}
                </h1>
                <p className="subTitle">{workExperiences.subtitle}</p>
              </div>
              <dl className="experience-highlights" aria-label="Repères clés">
                {workExperiences.highlights.map(highlight => (
                  <div key={highlight.label}>
                    <dt>{highlight.value}</dt>
                    <dd>{highlight.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="experience-ecosystem" aria-label="Écosystème KV2">
                <span>Expériences terrain</span>
                <span aria-hidden="true">→</span>
                <span>Ressources mutualisées</span>
                <span aria-hidden="true">→</span>
                <span>Solutions plus solides</span>
              </p>
              <ol className="experience-timeline">
                {workExperiences.experience.map((card, index) => (
                  <li
                    key={`${card.company}-${card.date}`}
                    style={{"--experience-index": index}}
                  >
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        dateTime: card.dateTime,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
  return null;
}
