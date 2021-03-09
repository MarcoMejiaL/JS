function imprimirAnimales(vacas, pollos){
    let strinVaca = String(vacas);
    while(strinVaca.length <3){
        strinVaca ="0"+strinVaca
    }
    console.log(`${strinVaca} Vacas`);
    let strinPollos = String(pollos)
    while(strinPollos.length <3){
        strinPollos ="0"+strinPollos;
    }
    console.log(`${strinPollos} Vacas`);
}
imprimirAnimales(7,11);
