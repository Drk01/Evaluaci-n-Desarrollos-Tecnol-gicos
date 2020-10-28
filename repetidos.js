function repetidos(oración) {
  let objetoPalabras = [];
    let palabras = oración.split(' ');
    
    palabras.forEach((i) => {
        objetoPalabras[i] = (objetoPalabras[i] | 0) + 1;
    } )

  return objetoPalabras;
}

console.log(
  repetidos(
    "Esto es una prueba, de ver cuantas veces se repite una palabra en una oración"
  )
);
