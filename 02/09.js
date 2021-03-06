function gallina() {
    return huevo();
}

function huevo() {
    return gallina();
}
console.log(gallina() + " vino primero");