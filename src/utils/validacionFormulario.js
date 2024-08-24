import { object, string, ref } from "yup"

let userSchema = object({
  nombre: string().required("El campo nombre es requerido"),
  telefono: string().required("El campo telefono es requerido"),
  email: string().email("El campo de email no tiene el formato correcto").required("El campo email es requerido"),
  confirmEmail: string().oneOf([ref('email'), null], 'Email debe de ser igual').required('Confirmacion de email es requerido')
})

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm
