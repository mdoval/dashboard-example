export function createProduct(prevState: {field: string, message: string}[] | undefined, formData: FormData ) {
    return [{field: "title", message: "El titulo no puede ser nulo"},{field: "price", message: "El precio es muy alto"}]
}