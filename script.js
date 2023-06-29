const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const submit = document.getElementById("submit");
const passwordError = document.getElementById("password_error");

function password_check() {
    if(password.value == "" || confirmPassword.value == "") {
        return;
    }
    if(password.value == confirmPassword.value) {
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        passwordError.textContent = "";
        return;
    }
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    passwordError.textContent = "Passwords do not match";
    
}

submit.addEventListener("click", function() {
    password_check();
    console.log("booo");
});
