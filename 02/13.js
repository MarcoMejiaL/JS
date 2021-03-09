function imprimirEtiquetas(numero, etiqueta){
    let stringNumero = String(numero);
    while(stringNumero.length <3){
        stringNumero = "0" +stringNumero;
    }
    console.log(`${stringNumero} ${etiqueta}`);
}
function animales(vacas, pollos, cerdos){
    imprimirEtiquetas(vacas, "Vacas");
    imprimirEtiquetas(pollos, "Pollos");
    imprimirEtiquetas(cerdos, "Cerdos");
}
animales(7,11,3);
