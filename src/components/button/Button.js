import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={newTab ? `${text} (nouvel onglet)` : undefined}
      >
        {text}
      </a>
    </div>
  );
}
