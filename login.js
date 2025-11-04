const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // para hindi mag-refresh ang page

  // kunin ang input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // example login check (pwede mong palitan kung gusto mo)
  if (username === "admin" && password === "1234") {
    // kapag tama ang username at password, pupunta sa ibang HTML file
    window.open("book.html", "_self");
  } else {
    alert("Invalid username or password!");
  }
});