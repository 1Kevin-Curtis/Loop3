
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import CourseSetupScreen from "./screens/CourseSetupScreen";
import CaptureRoundScreen from "./screens/CaptureRoundScreen";
import RoundCompleteScreen from "./screens/RoundCompleteScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [screen, setScreen] = useState("home");

  const renderScreen = () => {
    switch (screen) {
      case "setup":
        return <CourseSetupScreen onStart={() => setScreen("capture")} />;
      case "capture":
        return <CaptureRoundScreen onComplete={() => setScreen("complete")} />;
      case "complete":
        return <RoundCompleteScreen />;
      default:
        return <HomeScreen onStartRound={() => setScreen("setup")} />;
    }
  };

  return (
    <div className="app-shell">
      {renderScreen()}
      <BottomNav onNavigate={setScreen} />
    </div>
  );
}
