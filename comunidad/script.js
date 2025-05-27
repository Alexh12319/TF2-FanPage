function verificarUsuario() {

    let correo = document.getElementById("correoElectrónico").value;
    let contraseña = document.getElementById("contraseña").value;
 
     if (correo == "Sniper@gmail.com" && contraseña == "Avocado132") {
 
         document.getElementById("verificador").innerHTML = "Ha iniciado usted sesion"
 
     } else {
         document.getElementById("verificador").innerHTML = "Correo o contraseña incorrecta"
     }
 }
 
 
 
 
 
 
 document.getElementById("uploadBtn").addEventListener("click", function() {
     document.getElementById("fileInput").click(); //! Hace clic en el input de archivos oculto
     //?(Lo que hice hoy en todas las actividades)
 });
 
 
 //! Agrega un evento de clic al botón "Subir Imágenes"
 document.getElementById("uploadBtn").addEventListener("click", function() {
     //! Simula un clic en el input de archivos oculto para abrir el explorador de archivos
     document.getElementById("fileInput").click();
 });
 
 //! Agrega un evento cuando el usuario selecciona archivos en el input
 document.getElementById("fileInput").addEventListener("change", function(event) {
     const files = event.target.files; //! Obtiene la lista de archivos seleccionados
     const carouselInner = document.querySelector(".carousel-inner"); //! Obtiene el contenedor del carrusel donde están las imágenes
 
     //! Recorre todos los archivos seleccionados por el usuario
     for (let file of files) {
         const reader = new FileReader(); //! Crea un objeto FileReader para leer el contenido del archivo
 
         //! Cuando el archivo se ha leído completamente, se ejecuta esta función
         reader.onload = function(e) {
             //! Crear un nuevo elemento <div> para la imagen dentro del carrusel
             const newItem = document.createElement("div");
             newItem.classList.add("carousel-item"); // Se le asigna la clase "carousel-item"
 
             //! Crear un elemento <img> para mostrar la imagen
             const newImg = document.createElement("img");
             newImg.src = e.target.result; //! Se asigna el contenido de la imagen en base64
             newImg.classList.add("d-block", "w-100"); //! Se agregan clases de Bootstrap para tamaño y posicionamiento
             newImg.alt = "Nuevo meme"; //! Se asigna un texto alternativo
 
             //! Se agrega la imagen dentro del div de la imagen del carrusel
             newItem.appendChild(newImg);
 
             //! Si no hay ninguna imagen activa en el carrusel, se activa esta
             if (!document.querySelector(".carousel-item.active")) {
                 newItem.classList.add("active");
             }
 
             //! Se agrega el nuevo div con la imagen dentro del carrusel
             carouselInner.appendChild(newItem);
         };
 
         //! Se lee el archivo como una URL en base64 para poder mostrarlo en el navegador
         reader.readAsDataURL(file);
     }
 });
 