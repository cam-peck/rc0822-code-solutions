fetch('https://pokeapi.co/api/v2/pokemon/bidoof')
  .then(response => response.json())
  .then(data => console.log('Best pokemon: ', data));

// async function getResponse() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/bidoof')
//   const data = await response.json();
//   return data
// }

// getResponse().then(data => {
//   console.log('Best Pokemon: ', data)
// })
