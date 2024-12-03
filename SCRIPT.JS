// Script básico para manejar el formulario de pedidos
document.getElementById('pedido-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores de los campos del formulario
    const direccion = document.getElementById('direccion').value;
    const metodoPago = document.getElementById('metodo-pago').value;

    // Validación de los campos
    if (direccion === "" || metodoPago === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar un mensaje de confirmación en la página
    const mensaje = `¡Pedido confirmado!\nDirección: ${direccion}\nMétodo de Pago: ${metodoPago}`;
    alert(mensaje);
});

// Script básico para manejar el formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación de los campos
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar un mensaje de agradecimiento
    const agradecimiento = `¡Gracias por tu mensaje, ${nombre}!\nNos pondremos en contacto contigo pronto.`;
    alert(agradecimiento);
});
