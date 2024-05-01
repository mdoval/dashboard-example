import prisma from "@/db/prisma"

export async function fetchProducts() {
    try{
        const productos = await prisma.product.findMany()
        if(!productos) {
            throw new Error('Error en la consulta de productos')
        }
        return productos
    } catch( error ) {
        console.log(error)
    }
}

export async function fetchCategories() {
    try {
        const categories = await prisma.category.findMany()
        if(!categories) {
            throw new Error('Error en la consulta de cateogiras')
        }
        return categories
    } catch( error ) {
        console.log(error)
    }
}