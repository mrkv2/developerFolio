import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <section
          className="experience-container"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-header">
            <h1 className="experience-heading" id="experience-title">
              {workExperiences.title}
            </h1>
            <p className="subTitle">{workExperiences.subtitle}</p>
          </div>
          <ol className="experience-timeline">
            {workExperiences.experience.map(card => (
              <li key={`${card.company}-${card.date}`}>
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
        </section>
      </Fade>
    );
  }
  return null;
}
