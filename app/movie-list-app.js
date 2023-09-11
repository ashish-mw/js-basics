let favMovies = [
  {
    id: '1694415809280',
    title: 'Matrix',
    releaseDate: '1998'
  },
  {
    id: '1694415816447',
    title: 'Ghost in the Shell',
    releaseDate: '1994'
  }
];

/**
 * <div class="movie-card">
      <h2>Matrix</h2>
      <h3>1998</h3>
    </div>
 *
 */
function makeMovieDiv(movie) {
  // outer div
  const div = document.createElement('div')
  div.setAttribute('class', 'movie-card')

  const id = `movie-${movie['id']}`
  div.setAttribute('id', id)

  // title
  const h2 = document.createElement('h2')
  h2.innerText = movie['title'];

  const h3 = document.createElement('h3')
  h3.innerText = movie['releaseDate']

  div.appendChild(h2)
  div.appendChild(h3)

  return div;
}

function appendToApp(movieDiv) {
  const app = document.querySelector('#app');
  app.appendChild(movieDiv)
}

for(let i=0 ;i<favMovies.length; i++) {
  const movieDiv = makeMovieDiv(favMovies[i])
  appendToApp(movieDiv)
}