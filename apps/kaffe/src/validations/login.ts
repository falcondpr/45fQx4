import { toast } from 'react-hot-toast'

// eslint-disable-next-line
export const ValidationUserLogin = (userInfo: any) => {
  const { password, email } = userInfo
  if (!email || email === '' || password === '' || !password) {
    return toast.error('Todos los campos son obligatorios')
  }

  if (password.length <= 5) {
    return toast.error('La contrasena debe tener al menos 6 caracteres')
  }

  return {
    success: true,
    message: 'Validacion correcta',
  }
}
