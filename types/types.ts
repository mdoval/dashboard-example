import { z } from "zod";

export interface ProductoFormErrors {
    title?: string[],
    description?: string[],
    quantity?: string[],
    price?: string[],
    category?: string[],
}

export const ProductSchema =  z.object({
    title: z.string().min(1, { message: "El titulo no puede estar vacio" }),
    description: z.string().min(1, { message: "El titulo no puede estar vacio" }),
    quantity: z.number({invalid_type_error: "La cantidad no puede ser un string",}),
    price: z.number({invalid_type_error: "La cantidad no puede ser un string"}),
    published: z.boolean({invalid_type_error: "el valor de Published debe ser boolean"}),
    categoryId: z.number({invalid_type_error: "La cantidad no puede ser un string"}),
})

export interface CategoriaFormErrors {
    name?: string[]
}

export const CategoriaSchema = z.object({
    name: z.string().min(1, { message: "El NAME no puede estar vacio" }),
})