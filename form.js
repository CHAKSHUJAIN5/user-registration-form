const passwordInput = document.getElementById("password");
const hint = document.getElementById("passwordHint");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = 0;

  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[a-z]/.test(val)) strength++;
  if (/\d/.test(val)) strength++;
  if (/[@#$%^&+=]/.test(val)) strength++;

  if (val.length === 0) {
    hint.textContent =
      "Password must be 8-16 chars, include uppercase, lowercase, number, and special char.";
    hint.style.color = "grey";
  } else if (strength <= 2) {
    hint.style.color = "red";
    hint.textContent = "Weak password";
  } else if (strength === 3 || strength === 4) {
    hint.style.color = "orange";
    hint.textContent = "Medium strength password";
  } else if (strength === 5) {
    hint.style.color = "green";
    hint.textContent = "Strong password";
  }
});

const form = document.querySelector("form");
const submitBtn = document.getElementById("submitbtn");

function validateForm() {
  submitBtn.disabled = !form.checkValidity();
}

form.addEventListener("input", validateForm);
window.addEventListener("load", validateForm);
