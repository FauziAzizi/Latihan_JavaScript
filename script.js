document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const form = document.getElementById("registrationForm");

  const usernameFeedback = document.getElementById("usernameFeedback");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");

  // Validasi username saat keyup
  usernameInput.addEventListener("keyup", () => {
    const username = usernameInput.value;
    if (/^[a-zA-Z0-9]{5,20}$/.test(username)) {
      usernameFeedback.textContent = "";
    } else {
      usernameFeedback.textContent = "Username harus 5-20 karakter, alfanumerik.";
    }
  });

  // Validasi format email saat change
  emailInput.addEventListener("change", () => {
    const email = emailInput.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailFeedback.textContent = "";
    } else {
      emailFeedback.textContent = "Format email tidak valid.";
    }
  });

  // Verifikasi kekuatan password saat keyup
  passwordInput.addEventListener("keyup", () => {
    const password = passwordInput.value;
    if (password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
      passwordFeedback.textContent = "";
    } else {
      passwordFeedback.textContent = "Password minimal 8 karakter, harus mencakup angka dan huruf.";
    }
  });

  // Konfirmasi kecocokan password saat input
  confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value === passwordInput.value) {
      confirmPasswordFeedback.textContent = "";
    } else {
      confirmPasswordFeedback.textContent = "Password tidak cocok.";
    }
  });

  // Validasi akhir saat submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValidUsername = /^[a-zA-Z0-9]{5,20}$/.test(usernameInput.value);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const isValidPassword = passwordInput.value.length >= 8 && /[a-zA-Z]/.test(passwordInput.value) && /\d/.test(passwordInput.value);
    const isPasswordMatch = confirmPasswordInput.value === passwordInput.value;

    if (isValidUsername && isValidEmail && isValidPassword && isPasswordMatch) {
      alert("Pendaftaran berhasil!");
      form.reset();
    } else {
      alert("Formulir tidak valid. Silakan periksa kembali.");
    }
  });
});
