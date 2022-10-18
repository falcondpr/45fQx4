import axios from '../config/axios'

export const existTeam = async (
  id_user_transmitter: string,
  id_user_receiver: string,
) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/team/members/${id_user_transmitter}/${id_user_receiver}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getTeamsByUser = async (id_user: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/team/${id_user}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
