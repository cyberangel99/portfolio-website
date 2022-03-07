import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function PreviewBar() {
  const router = useRouter()
  const handleCloseClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/api/exit-preview'
    }
  }
  return (
    <>
      {router.isPreview && (
        <Alert
          status="info"
          borderRadius={0}
          variant="solid"
          p={3}
          colorScheme="accent"
          justifyContent="center"
        >
          <AlertIcon />
          You are in preview mode. Click the close button to the right to exit preview mode.
          <CloseButton position="absolute" right="8px" top="8px" onClick={handleCloseClick} />
        </Alert>
      )}
    </>
  )
}
