function par(a){
    if(a<0){
        return "es negativo " +false;
    }
    else if(a%2==0) {
        return true;
    }
    else{
        return "no es par " +false;
    }

}
console.log(par(75));