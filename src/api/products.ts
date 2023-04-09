import insntace from "./insntace";
import { IProduct, updateForm, createForm } from "../models";


export const getAll = () => {
    return insntace.get("/products");
}
export const getById = (_id: string) => {
    return insntace.get("/products/" + _id)
}
export const addProducts = (data: createForm) => {
    const uri = "/products"
    return insntace.post(uri, data);
}
export const deleteProducts = (_id: string) => {
    return insntace.delete(`/products/${_id}`)
}
export const updateProducts = (id: string, data: updateForm) => {
    const uri = "/products/" + id
    return insntace.patch(uri, data);
}