import React, {useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <article
      className={`education-card${isDark ? " education-card-dark" : ""}`}
      role="listitem"
    >
      <div className="education-card-head">
        {school.logo && (
          <div className="education-logo-frame">
            <img
              crossOrigin="anonymous"
              className="education-roundedimg"
              src={school.logo}
              alt=""
              loading="lazy"
            />
          </div>
        )}
        <div>
          <div className="education-school-line">
            <p className="education-text-school">{school.schoolName}</p>
            {school.badge && (
              <span className="education-level-badge">{school.badge}</span>
            )}
          </div>
          <p className="education-text-duration">{school.duration}</p>
        </div>
      </div>
      <div className="education-card-body">
        <h2 className="education-text-subHeader">{school.subHeader}</h2>
        <p className="education-text-desc">{school.desc}</p>
        <ul className="education-text-bullets">
          <GetDescBullets descBullets={school.descBullets} />
        </ul>
        {school.link && (
          <a
            className="education-proof-link"
            href={school.link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${school.link.text} sur LinkedIn (nouvel onglet)`}
          >
            {school.link.text}
          </a>
        )}
      </div>
    </article>
  );
}
