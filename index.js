// Seleccion
const pantalla = document.querySelector("#pantalla");
const reset = document.querySelector("#reset");
const igual = document.querySelector("#igual");
const btn = document.querySelectorAll(".btn-accion");

let resultado = 0;

//Funcion para limpiar pantalla
const resetear = () => {
    resultado = 0;
    pantalla.value = '';
}

//Funcion para dar el resultado de las operaciones
const respuesta = () => {
    try{
        resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch(error){
        pantalla.value = 'Expresion mal formada'
    }
}

//Para tomar el valor de cada boton seleccionado
for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click", (event) => {
        pantalla.value += event.target.value;
    })
}

//Ejecutara la funcion de limpiar pantalla
reset.addEventListener("click", resetear);

//Ejecutara la funcion para dar el resultado
igual.addEventListener("click", respuesta);

