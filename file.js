//Check if password matches
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const pwd = document.getElementById("pwd");
  const phoneNumber = document.getElementById("phone-number");
  const firstName = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const submitButton = document.getElementById("submitBtn");
  const errorMessage = document.querySelector(".error");
  const shortPassword = document.querySelector(".shortPwd");

  const updatePasswordMatch = (event) => {
    const passwordValue = password.value;
    const pwdValue = pwd.value;

    // Password match validation
    if (passwordValue === pwdValue) {
      password.style.backgroundColor = "#50AFAC";
      pwd.style.backgroundColor = "#50AFAC";
      errorMessage.textContent = "";
      event.preventDefault();
    } else {
      password.style.backgroundColor = "#DA576B";
      pwd.style.backgroundColor = "#DA576B";
      errorMessage.textContent = "*Passwords do not match";
    }

    // Password length validation
    if (pwdValue.length < 8) {
      shortPassword.textContent =
        "*Your password must be at least 8 characters";
    } else {
      shortPassword.textContent = "";
    }
  };

  const emailError = document.querySelector(".mailError");
  const email = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Email validation
  const updateEmailValidation = () => {
    const emailValue = email.value;
    if (!emailPattern.test(emailValue)) {
      email.style.backgroundColor = "#DA576B";
      emailError.textContent = "*Please enter a valid email address";
    } else {
      email.style.backgroundColor = "";
      emailError.textContent = "";
    }

    if (emailValue === "") {
      email.style.backgroundColor = "";
      emailError.textContent = "";
    }
  };

  submitButton.addEventListener("click", () => {
    password.style.backgroundColor = "";
    pwd.style.backgroundColor = "";

    setTimeout(() => {
      pwd.disabled = true;
      pwd.style.backgroundColor = "lightgray";

      password.disabled = true;
      password.style.backgroundColor = "lightgray";

      firstName.disabled = true;
      firstName.style.backgroundColor = "lightgray";

      lastName.disabled = true;
      lastName.style.backgroundColor = "lightgray";

      email.disabled = true;
      email.style.backgroundColor = "lightgray";

      phoneNumber.disabled = true;
      phoneNumber.style.backgroundColor = "lightgray";
    }, 1000);
  });

  email.addEventListener("input", updateEmailValidation);
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
  const button = document.getElementById("submitBtn");

  button.addEventListener("click", function (event) {
    // Show the SVG animation
    var checkmark = document.querySelector(".checkmark");
    checkmark.style.display = "block";
    button.style.display = "none";

    setTimeout(function () {
      document.querySelector(".checkmark__circle").classList.add("animate");
      document.querySelector(".checkmark__check").classList.add("animate");
    }, 1000);

    event.preventDefault();
  });
});
