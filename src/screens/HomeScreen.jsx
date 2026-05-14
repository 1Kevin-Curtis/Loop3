
export default function HomeScreen({ onStart }) {
  return (
    <div className="screen">
      <div className="hero-card">
        <p className="eyebrow">Momentum</p>
        <h1>Your scoring floor is improving</h1>
        <p>
          Recent rounds show fewer blow-up holes and more stable scoring patterns.
        </p>
      </div>

      <button className="primary-button" onClick={onStart}>
        Start New Round
      </button>
    </div>
  );
}
