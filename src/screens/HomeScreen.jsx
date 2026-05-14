
export default function HomeScreen({ onStartRound }) {
  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Current Focus</p>
        <h1>Approach Play</h1>
        <p>
          Your scoring opportunities are improving, but missed greens from
          120–160 yards are limiting lower scores.
        </p>
      </div>

      <button className="primary-button" onClick={onStartRound}>
        Start New Round
      </button>
    </div>
  );
}
