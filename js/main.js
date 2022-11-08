
const edad = 18;

const entrada = alert("Bienvenidos a Linda Shop, aca encontraras toda la moda y la tendencia actual!💘​💫​");
let ingreso = parseInt(prompt("Ingrese su edad."));
let repetir = true;

function coincide(ingreso) {
    return (18 <= ingreso)
};

if (coincide(ingreso)) {
    alert("Listo, Aponerce a la moda! 💖​​");
    repetir = false;
}
while (repetir) {
    if (isNaN(ingreso)) {
        ingreso = parseInt(prompt("Por favor, ingrese un número válido!❌​"));
        continue
    } else if (coincide(ingreso)) {
        alert("Listo, Aponerce a la moda! 💖​​");
        repetir = false;
    } else {
        alert("⚠️​Eres menor, debes hablar con tus mayores.⚠️​");
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