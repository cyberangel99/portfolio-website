import axios from 'axios'

// Contact us submission
const sendContact = async (values = {} as any, encodedFormData: any) => {
  try {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const response = await axios.post('/', encodedFormData, { headers })
    const message = `Thank you ${values.name} for your form submission. I will be in touch with you shortly using the email, ${values.email}.`
    return { success: true, message, data: response.data }
  } catch (error) {
    throw new Error(error)
  }
}

export default sendContact
