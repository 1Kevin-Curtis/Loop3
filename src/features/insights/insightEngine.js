
export function generateInsights(roundData) {
  const holes = roundData.holes;

  const penalties = holes.filter(h => h.penalty).length;
  const girCount = holes.filter(h => h.gir).length;
  const fairways = holes.filter(h => h.fairwayHit).length;
  const threePutts = holes.filter(h => h.threePutt).length;

  const insights = [];

  if (penalties <= 1) {
    insights.push({
      title: "Driving Stability Improved",
      text: "You avoided major mistakes off the tee and limited penalty strokes."
    });
  }

  if (girCount < 6) {
    insights.push({
      title: "Approach Play Limiting Scores",
      text: "Missed greens reduced scoring chances despite stable tee shots."
    });
  }

  if (threePutts >= 3) {
    insights.push({
      title: "Putting Cost Strokes",
      text: "Three putts prevented momentum during scoring opportunities."
    });
  }

  if (fairways >= 8) {
    insights.push({
      title: "Tee Shot Consistency",
      text: "Fairway accuracy created more playable approach positions."
    });
  }

  return insights;
}
