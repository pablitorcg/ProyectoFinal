
const edad = 18;

const entrada = alert("Bienvenidos a Linda Shop, aca encontraras toda la moda y la tendencia actual!ðâð«â");
let ingreso = parseInt(prompt("Ingrese su edad."));
let repetir = true;

function coincide(ingreso) {
    return (18 <= ingreso)
};

if (coincide(ingreso)) {
    alert("Listo, Aponerce a la moda! ðââ");
    repetir = false;
}
while (repetir) {
    if (isNaN(ingreso)) {
        ingreso = parseInt(prompt("Por favor, ingrese un nÃºmero vÃ¡lido!ââ"));
        continue
    } else if (coincide(ingreso)) {
        alert("Listo, Aponerce a la moda! ðââ");
        repetir = false;
    } else {
        alert("â ï¸âEres menor, debes hablar con tus mayores.â ï¸â");
        repetir = false;
    }
}

// Array con objeto //
const IndumentariaPromo = [
    {
        id: 1,
        Tipo: "Pollera",
        Talle: 1,
        color: 'roja',
        
    },
    {
        id: 2,
        Tipo: "Pollera",
        Talle: 2,
        color: 'blanca',
        
    },
    {
        id: 3,
        Tipo: "Pollera",
        Talle: 3,
        color: 'azul',
        
    },
    {
        id: 4,
        Tipo: "Vestidos",
        Talle: 1,
        color: 'blanco',
        
    },
    {
        id: 5,
        Tipo: "Vestidos",
        Talle: 2,
        color: 'rosa',
        
    },
    {
        id: 6,
        Tipo: "Vestidos",
        Talle: 3,
        color: 'violeta',
        
    },
    {
        id: 7,
        Tipo: "Camperas",
        Talle: 1,
        color: 'azul',
        
    },
    {
        id: 8,
        Tipo: "Camperas",
        Talle: 2,
        color: 'negra',
        
    },
];

// metodo de busqueda con FIND 
let valorBuscado = "Pollera"
const busqueda = IndumentariaPromo.find(IndumentariaPromo => IndumentariaPromo.nombre === valorBuscado)
console.log(busqueda)

// formulario de inicio de secion

const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})