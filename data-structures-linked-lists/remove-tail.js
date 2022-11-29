/* exported removeTail */

function removeTail(list, value) {
  if (list.next === null) { return; }
  let prevNode; // always keep track on one node back
  while (list.next !== null) {
    prevNode = list;
    list = list.next;
  }
  prevNode.next = null; // use one node back to grab last node
  return prevNode;
}
