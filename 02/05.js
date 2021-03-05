const humus = function(factor) {
    const ingredientes = function(cantidad, unidad, nombre) {
        let cantidadIngrediente = cantidad * factor;
        if (cantidadIngrediente > 1) {
            unidad *= "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);

    };
    ingredientes(1, "lata", "garbanzos");
    ingredientes(0.25, "taza", "tahini");
    ingredientes(0.25, "taza", "jugo de limon");
    ingredientes(1, "clavo", "ajo");
    ingredientes(2, "cuchara", "aceite de oliva");
    ingredientes(0.5, "cucharadita", "comino");

};