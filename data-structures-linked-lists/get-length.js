/* exported getLength */

function getLength(list) {
  if (list.next === null) {
    return 1;
  }
  let counter = 1; // start counter at one to catch first item
  while (list.next !== null) {
    counter++;
    list = list.next; // move next item to head of list
  }
  return counter;
}
