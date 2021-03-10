function letra(palabra, letra){

    

    for(let i=0; i < palabra.length; i++){

        if(palabra[i] == letra){
            console.log(`la letra ${letra}  de la palabra ${palabra} se encuentra en la posicion ${i+1}`);
        }
        else{
            console.log(`la posicion ${i+1} tiene la letra ${palabra[i]}`);
        }
    }
}

letra('marco', 'm');