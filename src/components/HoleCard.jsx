
export default function HoleCard({ hole, score, setScore }) {
  return (
    <div className="hole-card">
      <div className="hole-header">
        <h2>Hole {hole}</h2>
        <span>Par 4</span>
      </div>

      <div className="score-controls">
        <button onClick={() => setScore(Math.max(1, score - 1))}>-</button>
        <div className="score-number">{score}</div>
        <button onClick={() => setScore(score + 1)}>+</button>
      </div>

      <div className="shot-tags">
        <button>Fairway Hit</button>
        <button>Green in Reg</button>
        <button>Penalty</button>
        <button>3 Putt</button>
      </div>
    </div>
  );
}
