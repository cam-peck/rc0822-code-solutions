/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) { return undefined; }
  let removeCount = index;
  while (removeCount > 0) {
    const dequeueud = queue.dequeue();
    queue.enqueue(dequeueud);
    removeCount--;
  }
  const resultValue = queue.dequeue();
  return resultValue;
}
