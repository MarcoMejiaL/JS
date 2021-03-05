/* ajedres */
let filas =2;
let columnas =8;
let a='';

for (let i=0; i<=filas; i++){
    for(let j=0; j<=columnas; j++){
        if((i+j)%2==0){
            a =a+' '
        }
        else{
            a= a+'+';
        }
        
    }
    
    a =a+'\n'
}
console.log(a);