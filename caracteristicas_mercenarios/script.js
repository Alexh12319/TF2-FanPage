//!Comentarios de la IA
//?Comentarios propios 


//?Inicio de sesión
//?Funcion en el boton de iniciar sesion para comprobar los datos
function verificarUsuario() {

   let correo = document.getElementById("correoElectrónico").value; //?Crea la variable correo
   let contraseña = document.getElementById("contraseña").value; //? Crea la variable contraseña

    if (correo == "Sniper@gmail.com" && contraseña == "Avocado132") { //?Si el correo es este "" Y la contraseña es esta

        document.getElementById("verificador").innerHTML = "Ha iniciado usted sesion" //? Déjale pasar

    } else {
        document.getElementById("verificador").innerHTML = "Correo o contraseña incorrecta" //? Algo anda mal
    }
}

window.onload = () => {
  // Oculta todos los mercenarios al iniciar la página
  const mercenarios = document.querySelectorAll('.mercenary');
  mercenarios.forEach(m => {
    m.style.display = 'none';
  });
};


//! Variable global para almacenar el elemento actualmente visible
let current = null;
//! Función que muestra un mercenario específico según su id
function show_mercenary(name) {
  //! Obtiene el elemento con el id correspondiente
  const next = document.getElementById(name);
  //! Si no se encuentra el elemento, muestra un error en la consola y termina
  if (!next) {
    console.error(`❌ No se encontró el elemento con id="${name}"`);
    return;
  }
  //! Si el elemento ya está visible, no hace nada
  if (current && current.id === name) return;
  //! Si ya hay un elemento visible actualmente...
  if (current) {
    //! Quita la clase que activa la animación o visibilidad
    current.classList.remove('active');
    //! Espera 300ms para permitir que la transición de salida se vea
    setTimeout(() => {
      //! Oculta el elemento actual
      current.style.display = 'none';
      //! Muestra el nuevo elemento
      next.style.display = 'block';
      //! Espera un poco antes de añadir la clase activa para que la transición se aplique
      setTimeout(() => next.classList.add('active'), 10);
      //! Actualiza la variable 'current' al nuevo elemento
      current = next;
    }, 300);

    //? Si ya existe una imagen seleccionada, se retira y se pone la seleccionada

  } else {
    //! Si no hay ningún elemento visible aún (primera vez que se muestra algo)
    next.style.display = 'block';
    //! Añade la clase activa con un pequeño retraso para activar la transición
    setTimeout(() => next.classList.add('active'), 10);
    //! Guarda este nuevo elemento como el actual
    current = next;
  }
}
    //? Basicamente este fragmento hace que al llamar a un elemento del dropdown
    //? aparezca en una transicion definida en el CSS si no se a seleccionado otra ya 