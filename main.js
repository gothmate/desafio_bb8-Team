let user = 'teste@teste.com'
let passw = '1234'

let userLogged = document.getElementById('email').value
let userPass = document.getElementById('pass').value
let loginPage = document.getElementById('login')
let regPage = document.getElementById('register')

function login() {
  loginPage.style.visibility = 'visible'
}

function register() {
  regPage.style.visibility = 'visible'
}

function fecharLogin() {
  console.log(userLogged)
  console.log(userPass)

  if (userLogged == user && userPass == passw) {
    loginPage.style.visibility = 'hidden'
  } else {
    loginPage.style.visibility = 'hidden'
  }
}

function registrar() {
  regPage.style.visibility = 'hidden'
  loginPage.style.visibility = 'visible'
}
