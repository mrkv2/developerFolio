// Importez React et useContext
import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  // Récupérer le thème actuel
  const {isDark} = useContext(StyleContext);

  // Vérifier si les projets doivent être affichés
  if (!bigProjects.display) {
    return null;
  }

  // Rendu du composant
  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main" id="projects" aria-labelledby="projects-title">
        <div>
          <h1 className="skills-heading" id="projects-title">
            {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {/* Mappez chaque projet */}
            {bigProjects.projects.map((project, i) => {
              return (
                <article
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {/* Affichez l'image du projet s'il y en a une */}
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                        loading="lazy"
                      ></img>
                    </div>
                  ) : null}

                  {/* Détails du projet */}
                  <div className="project-detail">
                    {/* Nom du projet */}
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    {/* Description du projet */}
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {/* Afficher les boutons pour les technologies utilisées */}
                    <div className="technologies">
                      {project.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className={
                            isDark
                              ? "dark-mode project-button"
                              : "project-button"
                          }
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Liens de pied de page */}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, j) => {
                          return (
                            <a
                              key={j}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${link.name} (nouvel onglet)`}
                            >
                              {link.name}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
