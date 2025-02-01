function mostrarServicio(idServicio) {
    const template = document.getElementById(idServicio);
    const contenido = template.content.cloneNode(true);
    document.getElementById('content').innerHTML = ''; // Limpiar el contenedor
    document.getElementById('content').appendChild(contenido);
}
