/* fizz y buzz */



for(let i =1; i <=100; i++){

    if(i%3 ==0 && i%5==0){
            console.log(`el numero ${i} es un fizzbuzz`);
    }
    else if (i%3 ==0) {
        console.log(`el numero ${i} es fizz`);
    }
    else if ( i%5 ==0) {
        console.log(`el numero ${i} es buzz`);
        
    }
    
    else{
        console.log(`el numero ${i} no es ni fizz ni buzz`);
    }
}