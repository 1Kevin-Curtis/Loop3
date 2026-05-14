
export default function WelcomeScreen({ onContinue }) {
  return (
    <div className="screen">
      <h1>Loop</h1>
      <p>An easier way to track your round and improve over time.</p>
      <button onClick={onContinue}>Get Started</button>
    </div>
  );
}
