import axiosPackage from 'axios'

const axios = axiosPackage.create({
  // baseURL: process.env.VITE_API_ENDPOINT_DEV,
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axios
