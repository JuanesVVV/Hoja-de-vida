document.addEventListener("DOMContentLoaded", function() {
    
    
    document.getElementById("mensaje").addEventListener("click", function() {
        alert("Gracias por visitar mi página");
    });

    
    document.getElementById("contacto").addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje");

        if (nombre === "" || email === "") {
            mensaje.textContent = "Por favor, completa todos los campos.";
            mensaje.style.color = "red";
        } else if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            mensaje.textContent = "Por favor, ingresa un correo válido.";
            mensaje.style.color = "red";
        } else {
            mensaje.textContent = "Formulario enviado correctamente.";
            mensaje.style.color = "green";
        }
    });

});