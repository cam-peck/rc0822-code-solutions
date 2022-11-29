/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const firstData = list.data;
  const secondData = list.next.data;
  list.data = secondData;
  list.next.data = firstData;
  return list;
}
