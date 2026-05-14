
import { useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import CaptureRoundScreen from "./screens/CaptureRoundScreen";
import ProgressScreen from "./screens/ProgressScreen";
import PracticeScreen from "./screens/PracticeScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("welcome");

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "round":
        return <CaptureRoundScreen />;
      case "progress":
        return <ProgressScreen />;
      case "practice":
        return <PracticeScreen />;
      default:
        return <WelcomeScreen onContinue={() => setActiveScreen("home")} />;
    }
  };

  return (
    <div className="app-shell">
      {renderScreen()}
      <BottomNav onNavigate={setActiveScreen} />
    </div>
  );
}
