// Validación básica del formulario (no envía datos a un servidor).
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var message = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            message.textContent = 'Gracias por tu mensaje. Este formulario es una demostración y todavía no envía información.';
            message.className = 'mt-3 text-success';
            form.reset();
        });
    }
});
