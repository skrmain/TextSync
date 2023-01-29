import React from "react";

import { SettingsType } from "../services/model";

import Close from "./../images/Close.png";

interface SettingsModalProps {
  closeModal: () => void;
  setSettings: (settings: SettingsType) => void;
  settings: SettingsType;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  closeModal,
  setSettings,
  settings,
}) => {
  const handleChange = (e: any) => {
    const name: string = e.target.name;
    const value = e.target.value;

    let _settings: any = { ...settings };
    if (name === "theme" || name === "saveLocal") {
      _settings[name] = value;
    } else if (name === "fontSize" && value >= 10 && value <= 24) {
      _settings[name] = value;
    } else {
      console.log("Invalid Setting");
    }
    setSettings(_settings);
    localStorage.setItem("settings", JSON.stringify(_settings));
  };

  return (
    <div className="my-modal-background">
      <div className="my-modal-container">
        <div className="close-btn">
          <button onClick={closeModal}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="my-modal-content">
          <h2>Settings</h2>
          <div className="settings-container">
            <div>
              <p>Theme</p>
              <select
                name="theme"
                id="theme"
                value={settings.theme}
                onInput={handleChange}
              >
                <option value="default">Default</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            {/* <div>
              <p>Save locally</p>
              <input
                style={{ height: "1.5rem", width: "1.5rem" }}
                type="checkbox"
                name="saveLocal"
                id="saveLocal"
                onChange={handleChange}
                checked={settings.saveLocal}
              />
            </div> */}
            <div>
              <p>Font size</p>
              <input
                style={{ width: "4rem", textAlign: "right" }}
                type="number"
                name="fontSize"
                onInput={handleChange}
                id="fontSize"
                value={settings.fontSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;