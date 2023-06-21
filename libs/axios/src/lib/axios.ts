import axiosPackage from 'axios';

export const axios = axiosPackage.create({
  // baseURL: '',
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
