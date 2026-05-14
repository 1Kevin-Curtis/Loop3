
export default function CourseSetupScreen({ onStart }) {
  return (
    <div className="screen">
      <h1>Set Up Round</h1>

      <div className="setup-card">
        <label>Course</label>
        <select>
          <option>Sunningdale</option>
          <option>Wentworth</option>
          <option>St Andrews</option>
        </select>

        <label>Tees</label>
        <select>
          <option>White</option>
          <option>Yellow</option>
        </select>

        <label>Round Type</label>
        <select>
          <option>General Play</option>
          <option>Casual Round</option>
        </select>
      </div>

      <button className="primary-button" onClick={onStart}>
        Start Round
      </button>
    </div>
  );
}
