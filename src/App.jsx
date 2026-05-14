
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import CaptureRoundScreen from "./screens/CaptureRoundScreen";
import RoundCompleteScreen from "./screens/RoundCompleteScreen";
import CourseSetupScreen from "./screens/CourseSetupScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [roundData, setRoundData] = useState({
    course: "Sunningdale",
    tees: "White",
    holes: []
  });

  const startRound = (course, tees) => {
    setRoundData({
      course,
      tees,
      holes: []
    });

    setScreen("capture");
  };

  const completeRound = (holes) => {
    setRoundData(prev => ({
      ...prev,
      holes
    }));

    setScreen("complete");
  };

  return (
    <div className="app-shell">
      {screen === "home" && (
        <HomeScreen onStart={() => setScreen("setup")} />
      )}

      {screen === "setup" && (
        <CourseSetupScreen onStart={startRound} />
      )}

      {screen === "capture" && (
        <CaptureRoundScreen onComplete={completeRound} />
      )}

      {screen === "complete" && (
        <RoundCompleteScreen roundData={roundData} />
      )}
    </div>
  );
}
