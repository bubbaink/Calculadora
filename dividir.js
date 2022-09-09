const process = require("process");
const colors = require("colors");


function dividir(a,b) {
    if (a / b === 0) {
        return "Me rompiste </3, intenta sin 0 en division".red
    }else if (a / b == "Infinity") {
        return "Me rompiste de manera infinita </3, no estoy hecho para resolver operaciones complejas".yellow
    }else if(a == 0 && b == 0){
        return "¿Pusiste 2 o mas ceros?".cyan.underline+"¿no fui claro con los ceros? Creo que debo expresarme mejor.".yellow.underline     
    }
    return a/b
    
}

module.exports = dividir;
//console.log(dividir(1,1));