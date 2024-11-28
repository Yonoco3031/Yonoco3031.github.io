// Mostrar contraseña
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');
showPasswordCheckbox.addEventListener('change', () => {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});