let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return;
}

function verificarIntento(){
    let numeroDeUsuario=  parseInt(document.getElementById('valorUsuario').value) ;
    console.log(intentos);

   if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja ();
   }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeeros
    if(listaNumeroSorteado.length ==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numerosposibles');
    }else{
    //si el numero generado esta incluido en la lista
      if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
      }
   }
}     

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensajes de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();




