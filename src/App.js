import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import AnalyticsConsent from "./components/analyticsConsent/AnalyticsConsent";

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <Main />
      <AnalyticsConsent />
    </div>
  );
}

export default App;
