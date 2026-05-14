
export function buildProgressionStory(rounds) {
  const recentScores = rounds.map(r => r.score);

  const average =
    recentScores.reduce((sum, score) => sum + score, 0) /
    recentScores.length;

  const latest = recentScores[recentScores.length - 1];
  const improving = latest <= average;

  return {
    momentum: improving ? "Building" : "Unstable",
    confidence: improving ? 78 : 51,
    currentFocus: improving
      ? "Birdie conversion"
      : "Penalty shot control",
    summary: improving
      ? "Your scoring floor is stabilising across recent rounds."
      : "Scoring volatility is still driven by high-cost mistakes."
  };
}
