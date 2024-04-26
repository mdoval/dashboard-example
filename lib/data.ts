export async function fetchProductos() {
    try{
        const productos = await fetch('http://localhost:3001/products')
        if(!productos.ok) {
            throw new Error('Error en la consulta de productos')
        }
        return productos.json()
    } catch( error ) {
        console.log(error)
    }
}