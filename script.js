document.addEventListener('DOMContentLoaded', function() {
    console.log("sistema de InnovaBet cargado correctamente");
    alert("Bienvenido a InnovaBet");

    // Reloj dinámico en tiempo real (12 horas)
    function actualizarReloj() {
        const ahora = new Date();
        let horas = ahora.getHours();
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        const ampm = horas >= 12 ? 'PM' : 'AM';

        horas = horas % 12 || 12;
        const horasFormateadas = String(horas).padStart(2, '0');

        const relojElemento = document.getElementById("reloj");
        if (relojElemento) {
            relojElemento.textContent = `Hora actual: ${horasFormateadas}:${minutos}:${segundos} ${ampm}`;
        }
    }
    setInterval(actualizarReloj, 1000);
    actualizarReloj();

    // Evento change en el menú desplegable <select>
    const selectServicio = document.getElementById("servicio");
    if (selectServicio) {
        selectServicio.addEventListener("change", function(e) {
            console.log("Servicio seleccionado:", e.target.value);
        });
    }

    // Eventos de mouseover y mouseleave en botones
    const botones = document.querySelectorAll("input[type='submit'], input[type='reset']");
    botones.forEach(function(boton) {
        boton.addEventListener("mouseover", function() {
            console.log("El cursor entró al botón:", boton.value);
        });
        boton.addEventListener("mouseleave", function() {
            console.log("El cursor salió del botón:", boton.value);
        });
    });

    // Validación de formulario y almacenamiento en localStorage
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombre = document.getElementById("Nombre").value.trim();
            const correo = document.getElementById("Correo").value.trim();
            const telefono = document.getElementById("Telefono").value.trim();
            const servicio = document.getElementById("servicio").value;
            const mensaje = document.getElementById("Mensaje").value.trim();

            if (!nombre || !correo || !telefono || !servicio || !mensaje) {
                alert("Por favor, llena todos los campos del formulario.");
                return;
            }

            const datosContacto = {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                servicio: servicio,
                mensaje: mensaje,
                fecha: new Date().toLocaleString()
            };

            localStorage.setItem("contactoInnovaBet", JSON.stringify(datosContacto));
            console.log("Datos guardados en LocalStorage:", datosContacto);

            alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud para ${servicio}.`);
            formulario.reset();
        });
    }
});