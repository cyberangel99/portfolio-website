import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Textarea
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React, { useRef, useEffect } from 'react'
import { FiBriefcase, FiMail, FiPhone, FiUser } from 'react-icons/fi'
import * as yup from 'yup'

import useContactForm from '../../hooks/contact'
import { IContactPayload } from '../../interfaces'

import ContactField from './ContactField'

const FORM_NAME = 'ContactForm'

const validationSchema = yup.object().shape({
  name: yup.string().required('Your name is required.'),
  email: yup.string().email('Your email is not valid.').required('Your email is required.'),
  phone: yup.string().optional(),
  organization: yup.string().optional(),
  message: yup.string().min(5, 'You message is too short.').required('Your message is required.'),
  reason: yup.string().required('Please select a reason for contacting me.')
})

export default function ContactForm() {
  const { onFormSubmit, isSuccess, isError, isLoading, successMessage } = useContactForm()
  const nameInput = useRef(null)
  const focusNameInput = () => nameInput.current.focus()

  useEffect(() => {
    if (isSuccess) {
      focusNameInput()
    }
  }, [isSuccess])

  return (
    <Box mt={8}>
      <Formik
        initialValues={
          {
            name: '',
            email: '',
            phone: '',
            organization: '',
            message: '',
            reason: ''
          } as IContactPayload
        }
        validateOnMount
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, ...rest }) => {
          const { isSubmitting } = rest
          return (
            <Form noValidate onSubmit={handleSubmit} name={FORM_NAME} data-netlify="true">
              {isError && (
                <Alert status="error" borderRadius={4} my={4}>
                  <AlertIcon />
                  There was an issue submitting your data. Please try again.
                </Alert>
              )}
              {isSuccess && (
                <Alert status="success" borderRadius={4} my={4}>
                  <AlertIcon />
                  {successMessage}
                </Alert>
              )}
              <SimpleGrid columns={{ sm: 1, md: 2 }} rowGap={4} columnGap={4} width="full" mb={8}>
                {/* NAME */}
                <ContactField
                  label="*Name"
                  name="name"
                  helperText="What is your preferred name?"
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiUser} />} />
                      <Input
                        name="name"
                        type="text"
                        value={field.value}
                        ref={nameInput}
                        variant="filled"
                        placeholder="Full name"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                  delay={0.1}
                />
                {/* EMAIL */}
                <ContactField
                  label="*Email"
                  name="email"
                  helperText="What email should I use to contact you?"
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiMail} />} />
                      <Input
                        name="email"
                        type="email"
                        value={field.value}
                        variant="filled"
                        placeholder="Email address"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                  delay={0.2}
                />
                {/* PHONE NUMBER */}
                <ContactField
                  label="Phone Number"
                  name="phone"
                  helperText="You don't have to provide a number."
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiPhone} />} />
                      <Input
                        name="phone"
                        type="text"
                        value={field.value}
                        variant="filled"
                        placeholder="Phone number"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                  delay={0.3}
                />
                {/* ORGANIZATION */}
                <ContactField
                  label="Organization"
                  name="organization"
                  helperText="What organization or business do you represent? Completely optional."
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiBriefcase} />} />
                      <Input
                        name="organization"
                        type="text"
                        value={field.value}
                        variant="filled"
                        placeholder="Organization or business"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                  delay={0.4}
                />
              </SimpleGrid>
              {/* REASON FOR CONTACTING */}
              <ContactField
                label="*Reason For Contact"
                name="reason"
                helperText="What brought you to my website today?"
                renderField={({ field }) => (
                  <Select
                    name="reason"
                    variant="filled"
                    placeholder="Select A Reason"
                    value={field.value}
                    onChange={handleChange}
                  >
                    <option value="inquiry">Project Inquiry</option>
                    <option value="questions">Questions or Comments</option>
                    <option value="error">Report Website Error</option>
                    <option value="other">Other</option>
                  </Select>
                )}
                delay={0.5}
              />
              {/* MESSAGE */}
              <ContactField
                mt={4}
                label="*Message"
                name="message"
                helperText="Enter your full message here."
                renderField={({ field }) => (
                  <Textarea
                    name="message"
                    onChange={handleChange}
                    variant="filled"
                    value={field.value}
                    placeholder="Your important message"
                    rows={6}
                  />
                )}
                delay={0.6}
              />
              {/* Netlify - Required hidden field */}
              <Input type="hidden" value={FORM_NAME} />
              <Box mt={8}>
                <Button
                  leftIcon={<FiMail />}
                  colorScheme="primary"
                  variant="solid"
                  type="submit"
                  isLoading={isSubmitting || isLoading}
                  disabled={isSubmitting || isLoading}
                >
                  Send Message
                </Button>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}
