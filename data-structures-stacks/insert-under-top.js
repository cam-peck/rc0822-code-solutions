/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const stackTopValue = stack.pop();
  stack.push(value);
  stack.push(stackTopValue);
  return stack;
}
