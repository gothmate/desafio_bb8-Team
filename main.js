let user = 'teste@gmail.com'
let passw = '1234'

let userLogged = document.getElementById('email').value
let userPass = document.getElementById('pass').value

function login() {
  let loginDiv = `<section id="login" style="visibility: visible">
  <div class="caixa-login">
  <img src="./images/Logo.png" alt="logotipo" />
  <h1>Welcome back</h1>
  <input id="email" type="text" placeholder="e-mail" /><br />
  <input id="pass" type="password" placeholder="senha" /><br />
  <div class="keepme">
  <input class="keep" type="checkbox" /><label for="keep"
  >Keep me logged in</label
  >
  </div>
  <a id="login-btn" onclick="fecharLogin()" href="#">Log in</a>
  <p>
  New here? <span><a id="register" href="#">Register</a></span>
  </p>
  </div>
  </section>`
  let loginPage = document.getElementById('login')
  loginPage.innerHTML = loginDiv
  console.log(userLogged, userPass)
}

function fecharLogin() {
  if (userLogged === user && userPass === passw) {
    loginDiv = '<section id="login" style="visibility: hidden"></section>'
    console.log('Logado')
  } else {
    alert('Login e/ou senha incorreto')
  }
}
