import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <nav className="site-navigation" aria-label="Navigation principale">
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            aria-label="Ouvrir ou fermer le menu"
          />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            aria-label="Ouvrir ou fermer le menu"
          >
            <span
              className={isDark ? "navicon navicon-dark" : "navicon"}
            ></span>
          </label>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewSkills && (
              <li>
                <a href="#skills">Compétences</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Expériences</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">Open source</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements">Certifications</a>
              </li>
            )}
            {viewBlog && (
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            )}
            {viewTalks && (
              <li>
                <a href="#talks">Consultation</a>
              </li>
            )}
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
