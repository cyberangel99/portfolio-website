import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import { Field } from 'formik'
import { motion } from 'framer-motion'
import React from 'react'

export default function ContactField({
  renderField,
  name,
  helperText = '',
  label = '',
  delay = 0.5,
  ...rest
}) {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const { error, touched } = meta
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay }
            }}
          >
            <FormControl id={name} isInvalid={error && touched} {...rest}>
              {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
              {renderField({ field, form, meta })}
              <FormErrorMessage>{error}</FormErrorMessage>
              {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
          </motion.div>
        )
      }}
    </Field>
  )
}
