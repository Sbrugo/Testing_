function suma(a,b){
    if(isNaN(a) || isNaN(b)){
        return 0;
    }else return a+b;
}
console.log(suma("a","b"));

function resta(a,b){
    if(isNaN(a) || isNaN(b)){
        return 0;
    }else return a-b;
}

function multiplicacion(a,b){
    if(isNaN(a) || isNaN(b)){
        return 0;
    }else return a*b;
}

function division(a,b){
    if(isNaN(a) || isNaN(b)){
        return 0;
    }else if(b==0){
        return null;
    }else return a/b 
}

module.exports = {suma, resta, multiplicacion, division}; // esto exporta los casos 

//como usar esta info para hacer pruebas 