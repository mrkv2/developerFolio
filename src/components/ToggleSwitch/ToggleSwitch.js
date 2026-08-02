import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        aria-label={
          isDark ? "Activer le thème clair" : "Activer le thème sombre"
        }
        onChange={styleContext.changeTheme}
      />
      <span className="slider round">
        <span className="emoji" aria-hidden="true">
          {isDark ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
