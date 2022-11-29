/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) { return; }
  const resultList = list.next.data = value;
  return resultList;
}
