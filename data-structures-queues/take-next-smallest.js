/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) { return undefined; }
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  let done = false;
  let currentValue = firstValue;
  while (!done) {
    const nextValue = queue.peek();
    if (currentValue <= nextValue) {
      done = true;
      return currentValue;
    }
    queue.enqueue(currentValue);
    currentValue = queue.dequeue(nextValue);
  }
}

// check if first value is less than second value
// if it is, return the first value

// if it isn't, put firstValue onto the back of the queue
// store secondValue outside the loop
// grab the next value and compare it against secondValue
// keep doing this until you get a <= value
