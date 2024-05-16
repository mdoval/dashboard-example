import prisma from "@/db/prisma"

export async function fetchProducts(query: string, currentPage: number) {
    const ITEMS_PER_PAGE = 8;
    const SKIP = (currentPage - 1) * ITEMS_PER_PAGE

    try{
        const productos = await prisma.product.findMany({
            where: {
                title: {
                    contains: query
                }
            },
            include: {
                category: true
            },
            take: ITEMS_PER_PAGE,
            skip: SKIP
        })        
        if(!productos) {
            throw new Error('Error en la consulta de productos')
        }
        return productos
    } catch( error ) {
        console.log(error)
    }
}

export async function fetchProduct(id: number) {
    try{
        const producto = await prisma.product.findUnique({
            where: {
                id
            }
        })
        if(!producto) {
            throw new Error('Error en la consulta de productos')
        }
        return producto
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