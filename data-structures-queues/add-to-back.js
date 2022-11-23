/* exported addToBack */

function addToBack(queue, value) {
  const resultQueue = queue.enqueue(value);
  return resultQueue;
}
