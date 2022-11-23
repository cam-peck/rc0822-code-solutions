/* exported removeNext */

function removeNext(list) {
  if (list.next === null) { return; }
  list.next = list.next.next;
  return list;
}
