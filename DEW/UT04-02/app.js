const DOM = {
    frm: document.getElementById('frm'),
    nombreUsuario: document.getElementById('username'),
    contrasena: document.getElementById('password'),
    nombre: document.getElementById('name'),
    apellidos: document.getElementById('lastname'),
    telefono: document.getElementById('phone'),
    codigoPostal: document.getElementById('zipcode'),
    dni: document.getElementById('dni'),
    titulo: document.getElementById('title'),
    descripcion: document.getElementById('description')
}

frm.addEventListener("submit", function (e) {
    let formIsValid = true;

    // Validar Nombre de Usuario
    if (!DOM.nombreUsuario.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorUsername").innerText = "El nombre de usuario debe tener entre 4 y 15 caracteres.";
    } else {
        document.getElementById("errorUsername").innerText = "";
    }

    // Validar Contraseña
    if (!DOM.contrasena.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorPassword").innerText = "La contraseña debe tener al menos 4 números.";
    } else {
        document.getElementById("errorPassword").innerText = "";
    }

    // Validar Nombre
    if (!DOM.nombre.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorName").innerText = "Este campo es obligatorio.";
    } else {
        document.getElementById("errorName").innerText = "";
    }

    // Validar Apellidos
    if (!DOM.apellidos.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorLastname").innerText = "Este campo es obligatorio.";
    } else {
        document.getElementById("errorLastname").innerText = "";
    }

    // Validar Teléfono
    if (!DOM.telefono.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorPhone").innerText = "El teléfono debe tener el formato (+34)XXXXXXXXX.";
    } else {
        document.getElementById("errorPhone").innerText = "";
    }

    // Validar Código Postal
    if (!DOM.codigoPostal.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorZipcode").innerText = "El código postal debe empezar con 38 y tener 5 dígitos.";
    } else {
        document.getElementById("errorZipcode").innerText = "";
    }

    // Validación de Título y Descripción de Publicación
    if (!DOM.titulo.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorTitle").innerText = "El título debe tener entre 4 y 15 caracteres.";
    } else {
        document.getElementById("errorTitle").innerText = "";
    }
    if (!DOM.descripcion.checkValidity()) {
        formIsValid = false;
        document.getElementById("errorDescription").innerText = "La descripción debe tener entre 4 y 120 caracteres.";
    } else {
        document.getElementById("errorDescription").innerText = "";
    }

    // Prevenir el envío si el formulario no es válido
    if (!formIsValid) {
        e.preventDefault();
    }
});

// Mostrar contraseña
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');
showPasswordCheckbox.addEventListener('change', () => {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});

function updateCounter(fieldId, maxLength) {
    const field = document.getElementById(fieldId);
    const counter = document.getElementById(`${fieldId}-counter`);
    const currentLength = field.value.length;
    counter.textContent = `${currentLength} / ${maxLength}`;
}