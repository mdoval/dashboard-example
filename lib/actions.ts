import { ProductoFormErrors } from "@/types/types";

export function createProduct(prevState: ProductoFormErrors, formData: FormData ) {
    const errors: ProductoFormErrors = {}
    errors.description = "Error en Descripcion"
    errors.category = "Error en Categoria"
    return errors
}