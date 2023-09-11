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
    id: '1694415816450',
    title: 'Jurassic Park',
    releaseDate: '1995'
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
  deleteBtn.innerText = 'X';
  deleteBtn.addEventListener('click', function() {
    removeMovie(movie['id'])
  })

  div.appendChild(h2)
  div.appendChild(h3)
  div.appendChild(deleteBtn)


  return div;
}

function removeMovie(movieId) {
  console.log('Deleting ', movieId)
  // const filteredArray = favMovies.filter(function(movie) {
  //   return movie.id != movieId
  // })
  const filteredArray = favMovies.filter((movie) => movie.id != movieId)
  favMovies = filteredArray;
  updateMovieListUI()
}

function addMovie(movie) {
  favMovies.push(movie)
  updateMovieListUI()
}

function appendToApp(movieDiv) {
  const app = document.querySelector('#app');
  app.appendChild(movieDiv)
}

function clearApp() {
  const app = document.querySelector('#app');
  app.innerHTML = ''
}

function updateMovieListUI() {
  clearApp()
  for(let i=0 ;i<favMovies.length; i++) {
    const movieDiv = makeMovieDiv(favMovies[i])
    appendToApp(movieDiv)
  }
}

function hookForm() {
  const form = document.querySelector('#add-movie-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.querySelector('#movie-name').value
    const year = document.querySelector('#movie-year').value

    /**
    {
      id: '1694415809280',
      title: 'Matrix',
      releaseDate: '1998'
    }
    **/
    const movie = {
      id: new Date().getTime(),
      title: name,
      releaseDate: year
    }
    addMovie(movie);
  })
}

// start of app
updateMovieListUI()
hookForm()

// C - create
// R - read
// U
// D - delete