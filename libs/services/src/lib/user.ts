import { axios } from '@sura/axios';

const user = {
  get: async (username: string) => {
    const user = await axios({
      method: 'GET',
      url: `/user/find?username=${username}`,
    });

    return user;
  },
};

export default user;
