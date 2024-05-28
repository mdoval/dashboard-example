import prisma from "@/db/prisma"
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 8;
const ITEMS_PUBLISHED_PER_PAGE = 10;

export async function fetchProducts(query: string, currentPage: number) {
    noStore();
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

export async function fetchPublishedProducts(query: string, currentPage: number) {
    noStore();
    const SKIP = (currentPage - 1) * ITEMS_PUBLISHED_PER_PAGE

    try{
        const productos = await prisma.product.findMany({
            where: {
                title: {
                    contains: query
                },
                published: {
                    equals: true
                }
            },
            include: {
                category: true
            },
            take: ITEMS_PUBLISHED_PER_PAGE,
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

export async function productsCountPages(query: string) {
    noStore();

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
        })
        if(!productos) {
            throw new Error('Error en la consulta de productos')
        }
        const pages = (Math.ceil(productos.length / ITEMS_PER_PAGE))
//        console.log(productos.length / ITEMS_PER_PAGE)
//        console.log(pages)
        return pages
    } catch( error ) {
        console.log(error)
    }
}

export async function productsPublishedCountPages(query: string) {
    noStore();

    try{
        const productos = await prisma.product.findMany({
            where: {
                title: {
                    contains: query
                },
                published: {
                    equals: true
                }
            },
            include: {
                category: true
            },
        })
        if(!productos) {
            throw new Error('Error en la consulta de productos')
        }
        const pages = (Math.ceil(productos.length / ITEMS_PUBLISHED_PER_PAGE))
        return pages
    } catch( error ) {
        console.log(error)
    }
}

export async function fetchProduct(id: number) {
    noStore();
    try {
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
    noStore();
    
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

export async function fetchCategoriesFiltered(query: string, currentPage: number) {
    noStore();
    const SKIP = (currentPage - 1) * ITEMS_PER_PAGE

    try {
        const categorias = await prisma.category.findMany({
            where: {
                name: {
                    contains: query
                }
            },
            take: ITEMS_PER_PAGE,
            skip: SKIP
        })
        return categorias
    } catch(error) {
        console.log(error)
    }

}

export async function categoriasCountPages(query: string) {
    noStore();

    try{
        const categorias = await prisma.category.findMany({
            where: {
                name: {
                    contains: query
                }
            },
        })
        if(!categorias) {
            throw new Error('Error en la consulta de productos')
        }
        const pages = (Math.ceil(categorias.length / ITEMS_PER_PAGE))
        return pages
    } catch( error ) {
        console.log(error)
    }
}

export async function fetchCategoria(id: number) {
    noStore();
    try {
        const categoria = await prisma.category.findUnique({
            where: {
                id
            }
        })
        if(!categoria) {
            throw new Error('Error en la consulta de productos')
        }
        return categoria
    } catch( error ) {
        console.log(error)
    }
}