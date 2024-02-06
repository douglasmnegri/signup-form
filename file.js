//Check if password matches
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const pwd = document.getElementById("pwd");

  const updatePasswordMatch = () => {
    const passwordValue = password.value;
    const pwdValue = pwd.value;
    if (passwordValue === pwdValue) {
      password.style.backgroundColor = "lightgreen";
      pwd.style.backgroundColor = "lightgreen";
    } else {
      password.style.backgroundColor = "tomato";
      pwd.style.backgroundColor = "tomato";
    }
  };

  pwd.addEventListener("input", updatePasswordMatch);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    updatePasswordMatch();
  })
});
