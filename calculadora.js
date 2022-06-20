const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const raizcubica = (num1)=>{
    return Math.cbrt(num1)
}
const raizcuadradada = (num1)=>{
    return Math.sqrt(num1)
}
const potencia = (num1)=>{
    return parseInt(num1) * parseInt(num1);
}



alert(" Bienvenido a la calculadora magistral, Pulse en Aceptar para continuar :D ");
let operacion = prompt(" 5: Potencias, 6: Raiz cubica, 7: Raiz cuadradada  4: Suma, 3: Resta, 2: Division, 1: Multiplicacion");

if (operacion == 4){
    let numero1 = prompt(" Dame el primer numero para hacer la suma");
    let numero2 = prompt(" Dame el segundo numero para hacer la suma");
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}

else if (operacion == 3){
    let numero1 = prompt(" Dame el primer numero para hacer la resta")
    let numero2 = prompt(" Dame el segundo numero para hacer la resta")
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}

else if (operacion == 2){
    let numero1 = prompt(" Dame el primer numero para hacer la division")
    let numero2 = prompt(" Dame el segundo numero para hacer la division")
    resultado = dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}

else if (operacion == 1){
    let numero1 = prompt(" Dame el primer numero para hacer la multiplicacion")
    let numero2 = prompt(" Dame el segundo numero para hacer la multiplicacion")
    resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 7){
    let numero1 = prompt("Dame el numero para hacer la operacion");
    resultado = raizcuadradada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6){
    let numero1 = prompt("Dame el numero para hacer la operacion");
    resultado = raizcubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5){
    let numero1 = prompt("Dame el numero");
    resultado = potencia(numero1);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("no existe esa opcion FLACO")
}