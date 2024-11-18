// Obtener el botón y el recuadro de inicio de sesión por su id
const showPresentationButton = document.getElementById('showPresentation');
const showLoginFormButton = document.getElementById('showLoginForm');
const Presentation = document.getElementById('Presentation');
const loginSection = document.getElementById('loginSection');

showPresentationButton.addEventListener('click', function() {
    // Ocultar el botón
    showPresentationButton.style.display = 'none';
    // Mostrar Descripción
    Presentation.classList.remove('hidden');
});

showLoginFormButton.addEventListener('click', function() {
    // Ocultar el botón y ventana 
    showLoginFormButton.style.display = 'none';
    Presentation.classList.add('hidden');
    // Mostrar el formulario de inicio de sesión
    loginSection.classList.remove('hidden');
});