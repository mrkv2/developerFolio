import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <article className={isDark ? "experience-card-dark" : "experience-card"}>
      <header className="experience-card-header">
        <img
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt=""
          loading="lazy"
        />
        <div>
          <h2 className="experience-text-company">{cardInfo.company}</h2>
          <p className="experience-text-role">{cardInfo.role}</p>
          <time className="experience-text-date" dateTime={cardInfo.dateTime}>
            {cardInfo.date}
          </time>
        </div>
      </header>
      <div className="experience-text-details">
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </article>
  );
}
