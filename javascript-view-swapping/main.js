var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].className = ('tab active'); // select correct tab
      } else {
        $tabList[i].className = ('tab'); // deactivate incorrect tabs
      }
    }
    var clickedTab = event.target.getAttribute('data-view');
    for (let j = 0; j < $viewList.length; j++) {
      if (clickedTab === $viewList[j].getAttribute('data-view')) {
        $viewList[j].className = 'view'; // select correct content
      } else {
        $viewList[j].className = 'view hidden'; // deactivate incorrect content
      }
    }
  }
});
