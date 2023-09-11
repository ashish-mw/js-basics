// function sayHello() {
//   console.log('Hello')
// }

// // document.getElementById('btn')
// // document.getElementsByClassName('btn-red')

// // const btnRed = document.querySelector('.btn-red')


// // adding defer to script tag
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', sayHello)


// variables

// ES6
// let personName = 'Vishnu'

// console.log(personName);

// personName = 'Ram'
// console.log(personName);

// > ES5
// var personName = 'Vishnu'
// console.log(personName);

// 'C' "C"

// let firstName = 'Ram'
// let lastName = 'Singh'

// // let fullName = firstName + ' ' + lastName

// // interpolation
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)


// let person = {
//   firstName: 'Ram',
//   lastName: 'Singh',
// }

// let fullName = `${person.firstName} ${person.lastName}`
// console.log(fullName)


// let favMovies = [
//   'Matrix', 'Ghost in the Shell'
// ]

// for(let i=0; i<favMovies.length; i++) {
//   console.log(favMovies[i]);
// }

// const movie = {
//   title: 'Matrix',
//   releaseDate: '1998'
// }

let favMovies = [
  {
    title: 'Matrix',
    releaseDate: '1998'
  },
  {
    title: 'Ghost in the Shell',
    releaseDate: '1994'
  }
]

for(let i=0; i<favMovies.length; i++) {
  let fullTitle = `${favMovies[i]['title']} - ${favMovies[i]['releaseDate']}`
  console.log(fullTitle);
}