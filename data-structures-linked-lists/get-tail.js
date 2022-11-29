/* exported getTail */

function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}

// when list.next is null, it's time to return the value
