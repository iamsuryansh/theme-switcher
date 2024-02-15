import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function ThemeSwitcher() {
  const [brightness, setBrightness] = useState(30);
  const [bgColor, setBgColor] = useState("300");
  const [fontColor, setFontColor] = useState("black");

  const handleChange = (event, newValue) => {
    setBrightness(newValue);
    if (newValue > 50) {
      setFontColor("white");
      setBgColor(newValue * 10);
    } else {
      setFontColor("black");
      if (newValue === 100) {
        setBgColor("950");
      } else {
        setBgColor(newValue * 10);
      }
    }
  };


  return (
    <div className={`text-${fontColor} h-screen bg-zinc-${bgColor}`}>
      <div className="flex flex-col justify-items-end items-center gap-4 w-3/5 mx-auto py-20 font-mono antialiased">
        <div className="text-4xl font-semibold">Theme Darkness</div>
        <Slider
          aria-label="Darkness"
          defaultValue={brightness}
          value={brightness}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={90}
          onChange={(e, value) => handleChange(e, value)}
        />
        <div className="text-2xl font-mono font-semibold">
          Current Dark Value - {brightness}
        </div>
        <div className="text-2xl pt-48">
          Hey there. Use this tool to test your custom components on different darkness.
        </div>
        <div className="text-2xl">
          Use the slider to set a custom darkness
        </div>
        <button
          className="
           bg-blue-700 rounded px-16 py-5 m-5"
        >
          <div className={`font-bold text-xl text-white`}>Your Component Here!</div>
        </button>
      </div>
    </div>
  );
}
