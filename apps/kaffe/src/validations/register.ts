import { toast } from 'react-hot-toast'
import { ResponseValidation } from '../interfaces/validation'

// eslint-disable-next-line
export const ValidationUserRegister = (userInfo: any) => {
  const { fullname, username, email, password, confirmPassword } = userInfo

  if (
    fullname === '' ||
    !fullname ||
    email === '' ||
    !email ||
    username === '' ||
    !username ||
    password === '' ||
    !password ||
    confirmPassword === '' ||
    !confirmPassword
  ) {
    return toast.error('Todos los campos son obligatorios')
  }

  // eslint-disable-next-line
  const regexValidationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if (!regexValidationEmail.test(email)) {
    return toast.error('El email debe ser valido!')
  }

  if (password.length <= 5) {
    return toast.error('La contrasena debe tener al menos 6 caracteres')
  }

  if (confirmPassword !== password) {
    return toast.error('Las contrasenas no coinciden')
  }

  return {
    success: true,
    message: 'Validacion correcta',
  } as ResponseValidation
}
