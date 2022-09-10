import axios from '../config/axios'

export const getRequests = async () => {
  const response = await axios({
    method: 'GET',
    url: '/request',
  })

  return response.data
}

export const getRequest = async (id: number) => {
  const response = await axios({
    method: 'GET',
    url: `/request/${id}`,
  })

  return response.data
}
