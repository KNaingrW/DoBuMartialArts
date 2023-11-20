const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const showPasswordButton = document.getElementById('showPassword');
const showConfirmPasswordButton = document.getElementById('showConfirmPassword');

showPasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

showConfirmPasswordButton.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
    } else {
        confirmPasswordInput.type = 'password';
    }
});