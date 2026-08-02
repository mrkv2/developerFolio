import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      className={isDark ? "dark-mode main" : "main"}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div" aria-hidden="true">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              id="skills-title"
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div className="skills-services-grid">
              {skillsSection.services.map(service => (
                <article className="skills-service-card" key={service.title}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
            <h2 className="skills-stack-title">Technologies principales</h2>
            <SoftwareSkill />
            <div className="skills-cta">
              <Button text="Discuter de votre projet" href="#contact" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
