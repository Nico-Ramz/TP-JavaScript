let pares = [];

const agregarPares = (arrayIng) => {
    for (let i = 1; i <= 20; i++) {
        if(i % 2 == 0){arrayIng.push(i)};
    }
    console.log('Primeros 10 números pares:\n'+arrayIng);
}

agregarPares(pares);