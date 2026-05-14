
import { useState } from "react";
import HoleCard from "../components/HoleCard";

export default function CaptureRoundScreen({ onComplete }) {
  const [hole, setHole] = useState(1);
  const [score, setScore] = useState(4);

  const nextHole = () => {
    if (hole === 18) {
      onComplete();
      return;
    }

    setHole(hole + 1);
    setScore(4);
  };

  return (
    <div className="screen">
      <div className="capture-header">
        <div>
          <p className="eyebrow">Round In Progress</p>
          <h1>Hole {hole} of 18</h1>
        </div>

        <div className="save-indicator">
          Auto Saved
        </div>
      </div>

      <HoleCard hole={hole} score={score} setScore={setScore} />

      <button className="primary-button" onClick={nextHole}>
        Save Hole and Continue
      </button>
    </div>
  );
}
