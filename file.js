//Check if password matches
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const pwd = document.getElementById("pwd");
  const errorMessage = document.querySelector(".error");

  const updatePasswordMatch = (event) => {
    const passwordValue = password.value;
    const pwdValue = pwd.value;
    if (passwordValue === pwdValue) {
      password.style.backgroundColor = "#50AFAC";
      pwd.style.backgroundColor = "#50AFAC";
      errorMessage.textContent = "";
    } else {
      password.style.backgroundColor = "#DA576B";
      pwd.style.backgroundColor = "#DA576B";
      errorMessage.textContent = "*Passwords do not match";
      event.preventDefault();
    }
  };

  pwd.addEventListener("input", updatePasswordMatch);
  password.addEventListener("input", updatePasswordMatch);
  form.addEventListener("submit", function (event) {
    updatePasswordMatch(event);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const firstName = document.querySelector("#name");
  const lastName = document.querySelector("#last-name");
  const password = document.getElementById("password");

  button.disabled = true;

  firstName.addEventListener("input", () => {
    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      password.value !== ""
    ) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

  lastName.addEventListener("input", () => {
    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      password.value !== ""
    ) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

    password.addEventListener("input", () => {
      if (
        firstName.value !== "" &&
        lastName.value !== "" &&
        password.value !== ""
      ) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });
});
