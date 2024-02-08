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
      event.preventDefault()
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
  const password = document.querySelector("#password");
  const requiredStatement = document.querySelectorAll("span");
  const inputs = document.querySelectorAll("input");
  button.disabled = true;

  requiredStatement.forEach((span) => {
    span.style.visibility = "hidden";
  });

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      requiredStatement.forEach((span) => {
        span.style.visibility = "visible";
      });
    });
  });

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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submitBtn")
  
  button.addEventListener("click", function(event) {
    // Show the SVG animation
    var checkmark = document.querySelector(".checkmark");
    checkmark.style.display = "block";
    button.style.display = "none";
  
    setTimeout(function() {
      document.querySelector(".checkmark__circle").classList.add("animate");
      document.querySelector(".checkmark__check").classList.add("animate");
    }, 1000); 
  
    event.preventDefault();
  });
});
