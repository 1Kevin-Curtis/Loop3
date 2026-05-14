
import { buildProgressionStory } from "../features/progress/progressionEngine";
import { generateCausality } from "../features/insights/causalityEngine";

export default function HomeScreen() {
  const rounds = [
    { score: 84 },
    { score: 82 },
    { score: 81 },
    { score: 79 }
  ];

  const story = buildProgressionStory(rounds);
  const causality = generateCausality(rounds);

  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Momentum</p>
        <h1>{story.momentum}</h1>
        <p>{story.summary}</p>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <span>Confidence</span>
          <strong>{story.confidence}%</strong>
        </div>

        <div className="metric-card">
          <span>Current Focus</span>
          <strong>{story.currentFocus}</strong>
        </div>
      </div>

      {causality.map((item, index) => (
        <div className="insight-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <div className="next-round-card">
        <p className="eyebrow">Next Round Objective</p>
        <h2>Convert scoring chances inside 15 feet</h2>
        <p>
          Your recent rounds show enough greens hit to consistently threaten lower scores.
        </p>
      </div>
    </div>
  );
}
