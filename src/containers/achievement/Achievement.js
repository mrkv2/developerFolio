import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className="main"
        id="achievements"
        aria-labelledby="achievement-title"
      >
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              id="achievement-title"
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <div
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
              {achievementSection.link && (
                <a
                  href={achievementSection.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {achievementSection.link.text}
                </a>
              )}
            </div>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <article key={i} className="achievement-card">
                  <div className="technologies">
                    {card.technologies.map((tech, j) => (
                      <span key={j} className="technology-button">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
