document.getElementById('infoBtn').addEventListener('click', function () {
  const infoSection = document.getElementById('info');
  infoSection.classList.toggle('hidden');
});

document.querySelectorAll('.agrandar').forEach(button => {
  button.addEventListener('click', function() {
    // Cerrar cualquier modal existente
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Obtener los datos de la imagen y la información
    const imgSrc = this.previousElementSibling.src; // Obtener la imagen
    const titulo = this.getAttribute('data-titulo');
    const descripcion = this.getAttribute('data-descripcion');
    const caracteristicas = this.getAttribute('data-caracteristicas');

    // Crear el modal y agregar la imagen
    const modal = document.createElement('div');
    modal.classList.add('modal'); // Aplicar la clase que tiene los estilos del modal

    const modalImg = document.createElement('img');
    modalImg.src = imgSrc; // Establecer la fuente de la imagen
    modal.appendChild(modalImg); // Insertar la imagen dentro del modal

    // Crear el contenedor de información
    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
      <h3>${titulo}</h3>
      <p>${descripcion}</p>
      <ul>
        <li><strong>Características:</strong> ${caracteristicas}</li>
      </ul>
    `;
    modal.appendChild(info); // Insertar la información dentro del modal

    // Crear y agregar el botón de cierre
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Cerrar';
    closeBtn.classList.add('cerrar'); // Añadir la clase para el estilo del botón
    modal.appendChild(closeBtn); // Insertar el botón en el modal

    // Agregar el modal al body de la página
    document.body.appendChild(modal);

    // Event listener para cerrar el modal al hacer clic en "Cerrar"
    closeBtn.addEventListener('click', () => {
      modal.remove(); // Eliminar el modal al hacer clic en "Cerrar"
    });
  });
});

const fondo = document.querySelector('.fondo-cambiante');
const imagenes = [
  'img/img7.jpeg',
  'img/img8.jpeg',
  'img/img9.jpeg',
  'img/img10.jpeg',
  'img/img11.jpeg',
  'img/img12.jpeg',
]; // Cambia por las rutas reales de tus imágenes

let indice = 0;

function cambiarFondo() {
  fondo.style.backgroundImage = `url(${imagenes[indice]})`;
  indice = (indice + 1) % imagenes.length; // Repetir en bucle
}

cambiarFondo(); // Mostrar la primera imagen al cargar
setInterval(cambiarFondo, 5000); // Cambia cada 5 segundos

const mensaje = document.querySelector('.mensaje-llamativo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    mensaje.classList.add('oculto'); // Oculta al hacer scroll
  } else {
    mensaje.classList.remove('oculto'); // Muestra al volver arriba
  }
});


