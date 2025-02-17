// Issue: Cognitive Complexity
export function calculateUserScore(user: any): number {
  let score = 0;

  if (user.activity) {
    if (user.activity.login > 10) {
      score += 5;
      if (user.activity.posts > 20) {
        score += 10;
        if (user.activity.comments > 50) {
          score += 15;
        } else {
          score += 5;
        }
      } else {
        if (user.activity.views > 100) {
          score += 8;
        }
      }
    }
  }

  return score;
}
