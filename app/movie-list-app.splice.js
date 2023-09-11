// state of the app
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
  },
  {
    id: '1694415816448',
    title: 'Innocense',
    releaseDate: '1997'
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

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete movie';
  deleteBtn.addEventListener('click', function() {
    // check line 26
    removeMovie(movie['id'])
  })

  div.appendChild(h2)
  div.appendChild(h3)
  div.appendChild(deleteBtn)

  return div;
}

function appendToApp(movieDiv) {
  const app = document.querySelector('#app');
  app.appendChild(movieDiv)
}

function clearApp() {
  const app = document.querySelector('#app');
  app.innerHTML = ''
}

function removeMovie(movieId) {
  // const toDeleteIndex = favMovies.findIndex(function(movie) {
  //   return movie.id == movieId
  // })

  // const toDeleteIndex = favMovies.findIndex((movie) => {
  //   return movie.id == movieId
  // })

  const toDeleteIndex = favMovies.findIndex((movie) => movie.id == movieId)
  favMovies.splice(toDeleteIndex, 1);
  updateMovieListUi()
}

function updateMovieListUi() {
  clearApp()
  for(let i=0 ;i<favMovies.length; i++) {
    const movieDiv = makeMovieDiv(favMovies[i])
    appendToApp(movieDiv)
  }
}

// start of app
updateMovieListUi()