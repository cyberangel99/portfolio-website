import axios from 'axios'

export async function get(url, query?: any) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`, { params: query })
    return response.data
  } catch (error) {
    console.error(error)
    return error.message
  }
}

export async function post(url, data = {}) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`, data)
    return response.data
  } catch (error) {
    console.error(error)
    return error.message
  }
}
