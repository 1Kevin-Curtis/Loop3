
export default function BottomNav({ onNavigate }) {
  return (
    <nav className="bottom-nav">
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("setup")}>New Round</button>
      <button>Progress</button>
      <button>Practice</button>
    </nav>
  );
}
