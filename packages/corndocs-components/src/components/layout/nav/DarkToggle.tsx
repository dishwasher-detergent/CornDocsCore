import { Sun, Moon } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { DarkmodeContext } from "../../../context/DarkModeContext";
import { ConfigContext } from "../../../context/ConfigContext";

const DarkToggle = () => {
  /* @ts-ignore */
  const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);
  /* @ts-ignore */
  const { corndocsConfig } = useContext(ConfigContext);

  if (!corndocsConfig.darkMode) return null;

  return (
    <button
      className={`rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`}
      onClick={() => toggleDarkmode()}
    >
      <span className="sr-only">Navigation</span>
      {darkmode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkToggle;
