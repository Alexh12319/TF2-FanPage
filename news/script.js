

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
 
 


/*fetch ("https://api.rawg.io/api/games/11859?key=fd18e977310d4134bc443a017235198c")
.then(response => response.json())
.then(data => { const description = data.description;
document.getElementById("parches").innerHTML = "<div + class='descripcion'>" + description + "</div>" })
.catch(error => console.error("Error:", error));*/

fetch("https://api.rawg.io/api/games/11859/achievements?key=fd18e977310d4134bc443a017235198c")
.then(response => response.json())
.then(data =>  {

    let logrosContainer = document.getElementById("logros");
    logrosContainer.innerHTML = "";

    for ( let i = 0; i < 10 &&  i < data.results.length; i++) {
        
        let logro = data.results[i];

        document.getElementById("logros").innerHTML +=  `<p>${i + 1}: ${logro.name} ${logro.description} <img src="${logro.image}" class="imageAchievement"><br>`;
    };
})
.catch(error => console.error("Error:", error));


/* 
datos = undefined;
fetch("https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=5&maxlength=300&format=json")
.then(response => response.json())
.then(data => { console.log(data); datos = data; })
.catch(error => console.error("Error:", error));
*/


console.log(datos);

for (let i = 0; i < datos.appnews.newsitems.length; i++) {

        let news = datos.appnews.newsitems[i];


        document.getElementById("noticias").innerHTML += 
        `<p class="new_text">${i + 1}:<a href ="${news.url}" target="_blank">${news.title}</a>:</p>
        <img src="${news.url_2}" class="newImage">
        <p class="new_text">${news.contents}</p> <br><br>`



    }
