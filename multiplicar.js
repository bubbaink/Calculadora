const process = require("process")
const color = require("colors")

function multiplicar(a,b) { 
    if (a * b == 0){
        return "Toda multiplicacion por 0 da 0".yellow.underline
    
    }return a * b     
}

module.exports = multiplicar;

//console.log(multiplicar(1,1));