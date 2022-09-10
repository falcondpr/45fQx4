import axios from '../config/axios'

export const getRequests = async () => {
  const response = await axios({
    method: 'GET',
    url: '/request',
  })

  return response.data
}
