import axios from '../config/axios'

// eslint-disable-next-line
export const LOGIN_USER = (data: any) => {
  try {
    const response = axios({
      method: 'POST',
      url: '/user/login',
      data: JSON.stringify(data),
    })
    return response
  } catch (error) {
    console.log(error)
    return null
  }
}

// eslint-disable-next-line
export const REGISTER_USER = (data: any) => {
  try {
    const response = axios({
      method: 'POST',
      url: '/user/register',
      data: JSON.stringify(data),
    })
    return response
  } catch (error) {
    console.log(error)
    return null
  }
}
