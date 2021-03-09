function ceros(numero, amplitud){
    let cadena = String(numero);
    while(cadena.length <amplitud){
        cadena = "0"+ cadena;
    }
    return cadena
}

function animales(vacas, pollos, cerdos){
    console.log(`${ceros(vacas,3)} Vacas`);
    console.log(`${ceros(pollos,3)} Pollos`);
    console.log(`${ceros(cerdos,3)} Cerdos`);
}
animales(7,11,3);