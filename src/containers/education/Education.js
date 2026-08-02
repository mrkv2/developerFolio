import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Education() {
  if (educationInfo.display) {
    return (
      <Fade bottom duration={900} distance="20px">
        <section
          className="education-section"
          id="education"
          aria-labelledby="education-title"
        >
          <header className="education-header">
            <p className="education-eyebrow">{educationInfo.eyebrow}</p>
            <h1 className="education-heading" id="education-title">
              {educationInfo.title}
            </h1>
            <p className="education-intro">{educationInfo.subtitle}</p>
          </header>
          <div className="education-card-container" role="list">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={school.schoolName} school={school} />
            ))}
          </div>
        </section>
      </Fade>
    );
  }
  return null;
}
