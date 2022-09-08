var $taskList = document.querySelector('.task-list');
console.log($taskList);

$taskList.addEventListener('click', function (event) {
  console.log('Event target: ', event.target);
  console.log('  Target tagname: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var closestAncestor = event.target.closest('.task-list-item');
    console.log('Closest Ancestor: ', closestAncestor);
    closestAncestor.remove();
  }
});
