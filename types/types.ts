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
    categoryId: z.number({invalid_type_error: "La cantidad no puede ser un string"}),
})