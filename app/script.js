function sayHello() {
  console.log('Hello')
}

// document.getElementById('btn')
// document.getElementsByClassName('btn-red')

// const btnRed = document.querySelector('.btn-red')


// adding defer to script tag
const btn = document.querySelector('#btn');
btn.addEventListener('click', sayHello)


