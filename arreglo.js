function arreglo(arreglo) {

    let arregloNuevo = [];
    for (let i = 0; i < arreglo.length; i++) {        
        if (typeof arreglo[i] == 'object') {
            
            arregloNuevo.push(
                arreglo[i].map( value => value  )
            )
        }
    }
    
    return arregloNuevo
}

// [ 1,2, [3, 4], 1, [ ] ]
console.log(arreglo([[1, 2], [[3, 4]], [1, []]]));
