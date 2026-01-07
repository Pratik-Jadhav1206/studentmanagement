document.getElementById("login").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const correctUsername = "admin@123";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.innerText = "Login Successful";

    // redirect after 1.5 seconds
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
