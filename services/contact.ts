import { post } from '.'

// Contact us submission
const sendContact = async (values = {} as any, encodedFormData: any) => {
  try {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    await post('/', encodedFormData, { headers })
    const message = `Thank you ${values.name} for your form submission. I will be in touch with you shortly using the email, ${values.email}.`
    return { success: true, message }
  } catch (error) {
    throw new Error(error)
  }
}

export default sendContact
