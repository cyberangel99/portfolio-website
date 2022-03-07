import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react'
import theme from './theme'

const toast = createStandaloneToast({ theme })

const showNotification = (options: UseToastOptions) => {
  toast.closeAll()
  toast({
    ...options,
    title: options.title,
    duration: options.duration || null,
    status: options.status || 'info',
    position: options.position || 'bottom-left',
    isClosable: options.isClosable || true
  })
}

export default showNotification
