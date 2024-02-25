const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
const edad = prompt("Ingresa tu edad:");
const lugarNacimiento = prompt("Ingresa tu lugar de nacimiento:");
const fecha = prompt("Ingresa tu fecha de nacimiento:");
const comidaFavorita = prompt("Ingresa tu comida favorita:");
const carrera = prompt("Ingresa tu carrera:");
const diaFavorito = prompt("Ingresa tu dia favorito de la semana:");

//Construye una lista con la informacion solicitada
const lista = document.createElement("ul");

//Agrega cada dato como elemento de lista
const agregarDato = (etiqueta, valor)=>{
    const elementoLista = document.createElement("li");
    elementoLista.innerHTML = `<strong>${etiqueta}:</strong> ${valor}`;
    lista.appendChild(elementoLista);


};
agregarDato("Nombre", `${nombre} ${apellido}`);
agregarDato("Edad", edad);
agregarDato("Lugar de nacimiento", lugarNacimiento);
agregarDato("Fecha de Nacimiento", fecha);
agregarDato("Comida favorita ", comidaFavorita);
agregarDato("Carrera", carrera);
agregarDato("Día Favorito de la semana", diaFavorito);


const resultadoDiv = document.createElement("div");
resultadoDiv.appendChild(lista);

document.body.appendChild(resultadoDiv);
