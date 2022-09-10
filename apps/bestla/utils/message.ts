import axios from '../config/axios'

export const getMessages = async () => {
  const response = await axios({
    method: 'GET',
    url: `/`,
  })

  return response.data
}
