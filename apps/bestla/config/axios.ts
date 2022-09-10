import axiosPackage from 'axios'

const axios = axiosPackage.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axios
