/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const topElement = stack.pop();
  const secondFromTop = stack.peek();
  stack.push(topElement);
  return secondFromTop;
}
