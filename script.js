const correctPassword = "112233";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  localStorage.setItem("savedUser", username);

  if (password === correctPassword) {
    window.location.href = "https://uzum.uz";
  } else {
    message.textContent = "Неверный пароль. Попробуйте снова.";
  }
}
