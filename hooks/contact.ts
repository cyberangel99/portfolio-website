import { FormikHelpers } from 'formik'
import { useState } from 'react'

import { IContactPayload } from '../interfaces'

import { useAppDispatch, useAppSelector } from '../state/hooks'
import { resetContact, sendMessage } from '../state/modules/contact'
import showNotification from '../utils/notification'

const useContactForm = () => {
  const { isSuccess, isError, isLoading } = useAppSelector((state) => state.contact)
  const dispatch = useAppDispatch()
  const [successMessage, setSuccessMessage] = useState('')
  // Handle form submission
  const onFormSubmit = async (values: IContactPayload, formikHelpers: FormikHelpers<any>) => {
    const { setSubmitting, resetForm } = formikHelpers
    try {
      setSubmitting(true)
      const { payload } = await dispatch(sendMessage(values))
      setSuccessMessage(payload.message)
      showNotification({ title: payload.message, status: 'success', duration: 15000 })
      setSubmitting(false)
      resetForm()
      setTimeout(() => {
        // Clears success flag and message
        dispatch(resetContact())
        setSuccessMessage('')
      }, 7000)
    } catch (error) {
      setSubmitting(false)
      showNotification({
        title: 'There was an issue submitting your data. Please try again.',
        duration: 5000,
        status: 'error'
      })
    }
  }

  return {
    onFormSubmit,
    isSuccess,
    isError,
    isLoading,
    successMessage
  }
}

export default useContactForm
