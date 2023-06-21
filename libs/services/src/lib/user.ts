import { axios } from '@sura/axios';

const user = {
  get: async (username: string) => {
    const user = await axios({
      method: 'GET',
      url: `/user/find?username=${username}`,
    });

    return user;
  },
  register: async (data: any) => {
    const user = await axios({
      method: 'POST',
      url: '/register',
      data: JSON.stringify(data),
    });

    return user;
  },
};

export default user;
