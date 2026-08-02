import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";

export default function GithubRepoCard({repo, isDark}) {
  const {node} = repo;
  const project = node.project;
  const updatedDate = node.updatedAt
    ? new Intl.DateTimeFormat("fr-FR", {
        month: "short",
        year: "numeric"
      }).format(new Date(node.updatedAt))
    : null;

  return (
    <Fade bottom duration={850} distance="18px">
      <article className={`repo-card-div${isDark ? " dark-card-mode" : ""}`}>
        <div className="repo-card-topline">
          <span className="repo-category">{project.category}</span>
          <span className="repo-status">
            <i aria-hidden="true"></i>
            {project.status}
          </span>
        </div>
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="repo-svg"
            viewBox="0 0 24 24"
          >
            <path d="M8 3 3 8l5 5M16 3l5 5-5 5M14 2 10 15" />
          </svg>
          <h2 className="repo-name">{node.name}</h2>
        </div>
        <p className="repo-description">{project.summary}</p>
        <ul className="repo-technologies" aria-label="Technologies principales">
          {project.technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="repo-card-footer">
          <span className="repo-activity">
            {updatedDate
              ? `Mis à jour en ${updatedDate}`
              : node.primaryLanguage?.name || "Projet documenté"}
          </span>
          <a
            className="repo-code-link"
            href={node.url || project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le code de ${node.name} sur GitHub (nouvel onglet)`}
          >
            Voir le code
          </a>
        </div>
      </article>
    </Fade>
  );
}
