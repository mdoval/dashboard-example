import { ProductSchema, ProductoFormErrors } from "@/types/types";
import prisma from '@/db/prisma'

export async function createProduct(prevState: ProductoFormErrors | undefined, formData: FormData ) {
    const productoSchema = ProductSchema
    const newProduct = {
        title: formData.get('title'),
        description: formData.get('description'),
        quantity: parseInt(formData.get('quantity') as string),
        price: parseFloat(formData.get('price') as string),
        categoryId: parseInt(formData.get('categoryId') as string)
    }

    const validationData = productoSchema.safeParse(newProduct)    
    if(!validationData.success) {
        console.log(validationData.error?.flatten().fieldErrors)
        const errors: ProductoFormErrors = validationData.error.flatten().fieldErrors
        return errors    
    }

    try {
        const product = await prisma.product.create({data: validationData.data})        
        console.log(product)
    } catch( error ) {
        console.log("Error")
    }
}