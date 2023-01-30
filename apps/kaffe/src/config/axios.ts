import axiosPackage from 'axios'

const axios = axiosPackage.create({
  baseURL: process.env.VITE_API_ENDPOINT_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axios
