const pantalla = document.querySelector('.pantalla'); // Seleccionamos el elemento con la clase pantalla

let operacionPendiente = ''; // Variable para almacenar la operación pendiente

let numeroAnterior = ''; // Variable para almacenar el número anterior

let operadorActual = null; // Variable para almacenar el operador actual

let reiniciarPantalla = false; // Variable para saber si se debe reiniciar la pantalla

// Función para agregar un número a la pantalla
function agregar(valor) {
    if (reiniciarPantalla) {
        pantalla.value = '';
        reiniciarPantalla = false;
    }
    if (['+'].includes(valor)) {
        if(operadorActual !== null) {
            calcular();
        }
        numeroAnterior = pantalla.value;
        operadorActual = valor;
        reiniciarPantalla = true;
    } else if (['-'].includes(valor)) {
        if(operadorActual !== null) {
            calcular();
        }
        numeroAnterior = pantalla.value;
        operadorActual = valor;
        reiniciarPantalla = true;
    } else if (['*'].includes(valor)) {
        if(operadorActual !== null) {
            calcular();
        }
        numeroAnterior = pantalla.value;
        operadorActual = valor;
        reiniciarPantalla = true;
    } else if (['/'].includes(valor)) {
        if(operadorActual !== null) {
            calcular();
        }
        numeroAnterior = pantalla.value;
        operadorActual = valor;
        reiniciarPantalla = true;
    } else if (['√'].includes(valor)) {
        if(operadorActual !== null) {
            calcular();
        }
        numeroAnterior = pantalla.value;
        operadorActual = valor;
        reiniciarPantalla = true; 
    } else {
        pantalla.value += valor;
    }
}

// Función para limpiar la pantalla
function limpiar() {
    pantalla.value = '';
    operacionPendiente = '';
    numeroAnterior = '';
    operadorActual = null;
}

function borrar(){
    pantalla.value = pantalla.value.slice(0, -1);
}

// Función para calcular el resultado
function calcular() {

    //Para que funcione la raiz sin elegir 2 numeros
    if (operadorActual === null)
        return;

    //if (operadorActual === null || reiniciarPantalla) 
    //    return;

        const numero1 = parseFloat(numeroAnterior);
        const numero2 = parseFloat(pantalla.value);

        if (isNaN(numero1) || isNaN(numero2)) {
            pantalla.value = 'Error';
            setTimeout(limpiar, 1500);
            return
        }

        let resultado;

        switch (operadorActual) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':  
                resultado = numero1 / numero2;
                break;
            case '√':  
                resultado = Math.sqrt(numero2);
                break;
        }
    
    
    
    
    //Redondear a 8 decimales
    resultado = Math.round(resultado * 100000000) / 100000000;
    
    pantalla.value = resultado;
    operadorActual = null;
    reiniciarPantalla = true;
    numeroAnterior = '';
    }

    
    //Manejo de eventos del teclado
    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        const key = event.key;

        //NUmeros y operadores
        if(/[0-9\+\-\*\/\.]/.test(key)) {
            agregar(key);
        }

        //Enter
        else if(key === 'Enter') {
            calcular();
        }

        //Escape para limpiar
        else if(key === 'Escape') {
            limpiar();
        }

        //Borrar
        else if(key === 'Backspace') {
            borrar();
        }

    });