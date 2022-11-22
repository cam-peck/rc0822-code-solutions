/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) { return; }
  const frontValue = queue.dequeue();
  const resultQueue = queue.enqueue(frontValue);
  return resultQueue;
}
