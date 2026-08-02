import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <section
          className="process-container"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="process-header">
            <h1 className="skills-heading" id="process-title">
              {techStack.title}
            </h1>
            <p className="subTitle">{techStack.subtitle}</p>
          </div>
          <ol className="process-steps">
            {techStack.steps.map((step, index) => (
              <li key={step.title}>
                <article className="process-card">
                  <span className="process-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </Fade>
    );
  }
  return null;
}
