import * as Yup from 'yup'

export interface IProduct {
    _id?: string,
    name: string,
    price: number,
    priceSale: number,
    description: string,
    longDescription: string,
    character: string,
    images: { base_url: string }[],


}

export interface IUser {
    _id?: number | string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    confilmpassword?: string,
    role?: string,
}


export const createSchema = Yup.object({
    name: Yup.string().required("Trường này là bắt buộc"),
    price: Yup.number().required("Trường này là bắt buộc"),
    priceSale: Yup.number().required("Trường này là bắt buộc"),
    description: Yup.string().required("Trường này là bắt buộc"),
    longDescription: Yup.string().required("Trường này là bắt buộc"),
    character: Yup.string().required("Trường này là bắt buộc"),
})

export type createForm = Yup.InferType<typeof createSchema>



export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>


export const updateSchema = Yup.object({
    name: Yup.string().required("Trường này là bắt buộc"),
    price: Yup.number().required("Trường này là bắt buộc"),
    priceSale: Yup.number().required("Trường này là bắt buộc"),
    description: Yup.string().required("Trường này là bắt buộc"),
    longDescription: Yup.string().required("Trường này là bắt buộc"),
    character: Yup.string().required("Trường này là bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>