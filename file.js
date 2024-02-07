//Check if password matches
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const pwd = document.getElementById("pwd");
  const errorMessage = document.querySelector(".error")

  const updatePasswordMatch = () => {
    const passwordValue = password.value;
    const pwdValue = pwd.value;
    if (passwordValue === pwdValue) {
      password.style.backgroundColor = "lightgreen";
      pwd.style.backgroundColor = "lightgreen";
      errorMessage.textContent = ""
    } else {
      password.style.backgroundColor = "tomato";
      pwd.style.backgroundColor = "tomato";
      errorMessage.textContent = "*Passwords do not match";
    }
  };

  pwd.addEventListener("input", updatePasswordMatch);
  password.addEventListener("input", updatePasswordMatch);
  form.addEventListener("submit", function (event) {
    updatePasswordMatch();
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const firstName = document.querySelector("#name");
  const lastName = document.querySelector("#last-name");
  button.disabled = true;

  firstName.addEventListener("input", () => {
    if(firstName.value !== "" && lastName.value !== "") {
      button.disabled = false;
    }
    else {
      button.disabled = true;
    }
  });
  lastName.addEventListener("input", () => {
    if(firstName.value !== "" && lastName.value !== "") {
      button.disabled = false;
    }
    else {
      button.disabled = true;
    }
  })
});