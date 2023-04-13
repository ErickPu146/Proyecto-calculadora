// const buttons = document.querySelectorAll('.number')
// const pantalla = document.querySelector('#pantalla');
// const igual = document.querySelector('#igual')
// const reset = document.querySelector('#reset')
// const suma = document.querySelector('#suma')
// const resta = document.querySelector('#resta')
// const multiplicacion = document.querySelector('#multiplicacion');
// let array = [];
// let array2 = []
// let iterador;

// let operacion = '';
// let respuesta = 0;
// let valor = '';

// const valoresSuma = () => {
//     iterador = array.values();
//     pantalla.textContent += '+';
//     for (let value of iterador) {
//         valor += value;
//     }
//     array2.push(valor);
//     array2.push('+');
//     valor = '';
//     array = [];
// }

// const valoresResta = () => {
//     iterador = array.values();
//     pantalla.textContent += '-';
//     for (let value of iterador) {
//         valor += value
//     }
//     array2.push(valor);
//     array2.push('-');
//     valor = '';
//     array = [];
// }

// const valoresMultiplicacion = () => {
//     iterador = array.values();
//     pantalla.textContent += '*';
//     for (let value of iterador) {
//         valor += value;
//     }
//     array2.push(valor);
//     array2.push('*');
//     valor = '';
//     array = [];
// }

// const sumar = (a, b) => {
//     pantalla.textContent += ''
//     respuesta = a + b;
//     resetear();
//     pantalla.textContent = respuesta;
// }
// const restar = (a, b) => {
//     pantalla.textContent += '';
//     respuesta = a - b;
//     resetear();
//     pantalla.textContent = respuesta;
// }
// const multiplicar = (a, b) => {
//     pantalla.textContent += ''
//     respuesta = a * b;
//     resetear();
//     pantalla.textContent = respuesta;
// }

// const resetear = () => {
//     pantalla.textContent = '';
//     array = [];
//     array2 = [];
// };

// const result = () => {
//     for (i = 0; i < array2.length; i++)
//         switch (array2[i]) {
//             case '+':
//                 valoresSuma();
//                 array2.pop();
//                 console.log('suma');
//                 sumar(parseInt(array2[i - 1]), parseInt(array2[i + 1]))
//                 break;
//             case '-':
//                 valoresResta();
//                 array2.pop();
//                 console.log('resta')
//                 restar(array2[i - 1], array2[i + 1])
//                 break;
//             case '*':
//                 valoresMultiplicacion();
//                 array2.pop();
//                 console.log('multiplicacion')
//                 multiplicar(array2[i - 1], array2[i + 1])
//                 break;
//             default:
//                 break;
//         }
// }


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (event) => {
//         pantalla.textContent += event.target.value
//         array.push(event.target.value);
//     })
// }

// suma.addEventListener('click', valoresSuma);
// resta.addEventListener('click', valoresResta);
// multiplicacion.addEventListener('click', valoresMultiplicacion);
// igual.addEventListener('click', result);
// reset.addEventListener('click', resetear);


const pantalla = document.querySelector("#pantalla");
const reset = document.querySelector("#reset");
const igual = document.querySelector("#igual");
const btn = document.querySelectorAll(".btn-accion");
let resultado = 0;

const resetear = () => {
    resultado = 0;
    pantalla.value = '';
    arreglo = [];
}

for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click", (event) => {
        pantalla.value += event.target.value;
    })
}

reset.addEventListener("click", resetear);

igual.addEventListener("click", () => {
    try{
        resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch(error){
        pantalla.value = 'Expresion mal formada'
    }

});

