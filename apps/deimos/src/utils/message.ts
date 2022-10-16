import axios from '../config/axios'

export const getMessages = async (id_team: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `message/id_team/${id_team}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
