
//Inicio de sesión
function verificarUsuario() {

    let correo = document.getElementById("correoElectrónico").value;
    let contraseña = document.getElementById("contraseña").value;
 
     if (correo == "Sniper@gmail.com" && contraseña == "Avocado132") {
 
         document.getElementById("verificador").innerHTML = "Ha iniciado usted sesion"
 
     } else {
         document.getElementById("verificador").innerHTML = "Correo o contraseña incorrecta"
     }
 }
 
 