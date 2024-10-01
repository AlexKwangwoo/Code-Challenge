function groupDivision(levels, maxSpread) {
  levels.sort((a, b) => a - b);

  const n = levels.length;
  let i = 0;
  let groups = 0;

  while (i < n) {
    groups++;
    const currentPointLevel = levels[i];
    while (i < n && levels[i] <= maxSpread + currentPointLevel) {
      i++;
    }
  }

  return groups;
}

// Example usage
const n = 5;
const levels = [4, 1, 2, 5, 3];
const maxSpread = 0;

console.log(groupDivision(levels, maxSpread)); // Output: 3
