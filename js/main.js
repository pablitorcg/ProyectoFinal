

const edad = 18;

let entrada = alert("Bienvenidos a Linda Shop, aqui podras encontrar, tendencia y la ultima moda en vigencia para mujeres!");
let ingreso = parseInt(prompt("Ingrese su edad."));
let coincide = (edad <= ingreso);
let repetir = true;


while (repetir) {
    if (coincide) {
        alert("Ahora si, a ponerse a la moda!!");
        repetir = false;

    } else if (ingreso < edad) {
        alert("Eres menor, debes hablar con tus mayores para poder abonar!! ");
        repetir = false;
    } else {
        ingreso = parseInt(prompt("Por favor, ingrese un numero valido"));
        coincide = (edad <= ingreso);
    }
}   