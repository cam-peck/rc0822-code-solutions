var $userList = document.querySelector('#user-list');

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function (event) {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      var $newUserLi = document.createElement('li');
      $newUserLi.textContent = xhr.response[i].name;
      $userList.appendChild($newUserLi);
    }
  });
  xhr.send();
}

getUserData();
