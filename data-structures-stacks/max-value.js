/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    const checking = stack.pop();
    if (checking > maxValue) {
      maxValue = checking;
    }
  }
  return maxValue;
}
