"use server";

import { CategoriaFormErrors, CategoriaSchema, ProductSchema, ProductoFormErrors } from "@/types/types";
import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import path from "path";
import { writeFile } from "fs/promises";

export async function createProduct(
  prevState: ProductoFormErrors | undefined,
  formData: FormData
) {
  const productoSchema = ProductSchema;
  const newProduct = {
    title: formData.get("title"),
    description: formData.get("description"),
    quantity: parseInt(formData.get("quantity") as string),
    published: formData.get("published") === "on",
    price: parseFloat(formData.get("price") as string),
    categoryId: parseInt(formData.get("categoryId") as string),
  };

  const validationData = productoSchema.safeParse(newProduct);
  if (!validationData.success) {
    const errors: ProductoFormErrors =
    validationData.error.flatten().fieldErrors;
    return errors;
  }

  try {
    const product = await prisma.product.create({ data: validationData.data });
    //console.log(product)
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/productos");
  redirect("/dashboard/productos");
}

export async function createCategory(
  prevState: CategoriaFormErrors | undefined,
  formData: FormData
) {
  const categoriaSchema = CategoriaSchema
  const nuevaCategoria = {
    name: formData.get("name")    
  }
  const validationData = categoriaSchema.safeParse(nuevaCategoria)
  if(!validationData.success) {
    const errors: CategoriaFormErrors =
    validationData.error.flatten().fieldErrors;
    return errors;    
  }
  try {
    const categoria = await prisma.category.create({ data: validationData.data });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/categorias");
  redirect("/dashboard/categorias");
}

export async function updateProduct(
  id: number | undefined,
  prevState: ProductoFormErrors | undefined,
  formData: FormData
) {
  const productoSchema = ProductSchema;
  const newProduct = {
    title: formData.get("title"),
    description: formData.get("description"),
    quantity: parseInt(formData.get("quantity") as string),
    price: parseFloat(formData.get("price") as string),
    published: formData.get("published") === "on",
    categoryId: parseInt(formData.get("categoryId") as string),
  };

  const validationData = productoSchema.safeParse(newProduct);
  if (!validationData.success) {
    const errors: ProductoFormErrors =
      validationData.error.flatten().fieldErrors;
    return errors;
  }
  try {
    const newProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: validationData.data,
    });
    console.log(newProduct);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/productos");
  redirect("/dashboard/productos");
}

export async function updateCategoria(
  id: number | undefined,
  prevState: CategoriaFormErrors | undefined,
  formData: FormData
) {
  const categoriaSchema = CategoriaSchema;
  const newCategoria = {
    name: formData.get("name"),
  };

  const validationData = categoriaSchema.safeParse(newCategoria);
  if (!validationData.success) {
    const errors: CategoriaFormErrors =
    validationData.error.flatten().fieldErrors;
    return errors;
  }
  try {
    const newCategoria = await prisma.category.update({
      where: {
        id: id,
      },
      data: validationData.data,
    });
    console.log(newCategoria);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/categorias");
  redirect("/dashboard/categorias");
}

export async function uploadPhoto(formData: FormData) {
  const idproducto: string | undefined = formData.get("id")?.toString();
  const file: File | null = formData.get("file") as unknown as File;
  if (!file) console.log("El archivo no subio");
  const fechaHoraActual: string = new Date()
    .toISOString()
    .replace(/\D/g, "")
    .slice(0, 14);
  const nombre = idproducto + fechaHoraActual + ".jpg";
  //console.log(nombre)
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  //const filePath = path.join(process.cwd(), "public/images/propiedades", file.name);
  const filePath = path.join(process.cwd(), "public/images", nombre);
  //console.log(filePath)
  try {
    let idp: number = 0;
    if (idproducto != undefined) idp = parseInt(idproducto);
    await writeFile(filePath, buffer);
    await prisma.product.update({
      where: { id: idp },
      data: {
        image: `/images/${nombre}`,
      },
    });
    //console.log('Archivo Subido')
  } catch (error) {
    console.log(error);
  }
  revalidatePath(`/dashboard/productos`);
  redirect(`/dashboard/productos`);
}

export async function publicarProducto(id: number, estado: boolean) {
  try {
    const productoActualizado = await prisma.product.update({
      where: {
        id,
      },
      data: { published: estado },
    });
    return JSON.stringify(productoActualizado);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategoria(id: number) {
  try {
    const categoriaBorrada = await prisma.category.delete({
      where: {
        id
      }
    })
    return categoriaBorrada
  } catch( error ) {
    console.log(error)
  }
}
