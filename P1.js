const inventario = [
    { nombre: "libro", stock: 5, precio: 10 },
    { nombre: "enciclopedia", stock: 10, precio: 20 },
    { nombre: "cartuchera", stock: 12, precio: 5 },
    { nombre: "lapicero", stock: 0, precio: 5 }
]

function filtrar() {
    let filtrado = inventario.filter(elemento => elemento.stock > 0);
    let mayus = filtrado.map(f => {
        return f.nombre.toUpperCase();
    })

    mayus.forEach(f => {
        console.log(f)
    })
}

filtrar()
