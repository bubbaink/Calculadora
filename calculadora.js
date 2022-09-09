const process = require("process")
const color = require("colors")
const sumar = require("./sumar")
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")

const operacion = process.argv[2]
const n1 = +process.argv[3]
const n2 = +process.argv[4]

if(operacion === "restar"){
    console.log(restar(n1,n2));
}else if(operacion === "multiplicar"){
    console.log(multiplicar(n1,n2));
}else if(operacion === "dividir"){
    console.log(dividir(n1,n2));
}else if(operacion === "sumar"){
    console.log(sumar(n1,n2));
}else if (operacion !== "restar" || "sumar" || "dividir" || "multiplicar"){
    console.log("***************************************************".rainbow);
    console.log("Operacion sin exito/No aclarada.".cyan);
    console.log("Opciones:".cyan.underline);
    console.log("Sumar, Restar, Multiplicar, Dividir.".cyan);
    console.log("***************************************************".rainbow)
    console.log("no tengo mas opciones, mi creador se quedo corto :C".yellow.underline);
    console.log("***************************************************".rainbow)
}


 




