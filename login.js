document.getElementById("login").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const Username = "admin@123";
  const Password = "12345";

  if (username === Username && password === Password) {
    message.style.color = "green";
    message.innerText = "Login Successful";

    // redirect after 1 seconds
    setTimeout(function () {
      window.location.href = "main.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Invalid Credentials";
    setTimeout(function () {
      location.reload();
    }, 1500);
  }
});
