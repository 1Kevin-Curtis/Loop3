
export default function BottomNav({ onNavigate }) {
  return (
    <nav className="bottom-nav">
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("round")}>Round</button>
      <button onClick={() => onNavigate("progress")}>Progress</button>
      <button onClick={() => onNavigate("practice")}>Practice</button>
    </nav>
  );
}
