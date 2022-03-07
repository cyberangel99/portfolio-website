// Theme color maker: https://themera.vercel.app/

import { Colors, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.500', 'gray.50')(props),
      fontWeight: '300'
    }
  })
}

const colors: Colors = {
  primary: {
    '50': '#ECF8F6',
    '100': '#CAEDE7',
    '200': '#A8E1D8',
    '300': '#86D5C8',
    '400': '#64C9B9',
    '500': '#42BDA9',
    '600': '#349887',
    '700': '#277266',
    '800': '#1A4C44',
    '900': '#0D2622'
  },
  secondary: {
    '50': '#F0EAFB',
    '100': '#D4C4F3',
    '200': '#B89EEB',
    '300': '#9C78E3',
    '400': '#8152DB',
    '500': '#652DD2',
    '600': '#5124A8',
    '700': '#3D1B7E',
    '800': '#281254',
    '900': '#14092A'
  },
  accent: {
    '50': '#F0EEF7',
    '100': '#D4CFE8',
    '200': '#B8B0D9',
    '300': '#9C90CA',
    '400': '#8071BC',
    '500': '#6452AD',
    '600': '#50428A',
    '700': '#3C3168',
    '800': '#282145',
    '900': '#141023'
  },
  blueGrey: {
    '50': '#F0EEF7',
    '100': '#D4CFE8',
    '200': '#B8B0D9',
    '300': '#9C90CA',
    '400': '#8071BC',
    '500': '#6452AD',
    '600': '#50428A',
    '700': '#3C3168',
    '800': '#282145',
    '900': '#141023'
  },
  teal: {
    '50': '#ECF8F6',
    '100': '#CAEDE7',
    '200': '#A8E1D8',
    '300': '#86D5C8',
    '400': '#64C9B9',
    '500': '#42BDA9',
    '600': '#349887',
    '700': '#277266',
    '800': '#1A4C44',
    '900': '#0D2622'
  },
  purple: {
    '50': '#F0EAFB',
    '100': '#D4C4F3',
    '200': '#B89EEB',
    '300': '#9C78E3',
    '400': '#8152DB',
    '500': '#652DD2',
    '600': '#5124A8',
    '700': '#3D1B7E',
    '800': '#281254',
    '900': '#14092A'
  },
  gray: {
    '300': '#A19FBC',
    '400': '#8784A9',
    '500': '#6C6996',
    '600': '#575478',
    '700': '#413F5A',
    '800': '#2B2A3C',
    '900': '#16151E'
  },
  white: '#F7FAFC',
  black: '#2B2A3C',
  linkedIn: {
    '50': '#E7F2FE',
    '100': '#BBDBFC',
    '200': '#8FC4F9',
    '300': '#64ADF7',
    '400': '#3896F5',
    '500': '#0D7FF3',
    '600': '#0A66C2',
    '700': '#084C92',
    '800': '#053361',
    '900': '#031931'
  },
  instagram: {
    '50': '#F4ECF9',
    '100': '#DFC9EE',
    '200': '#CAA6E2',
    '300': '#B684D7',
    '400': '#A161CC',
    '500': '#8C3EC1',
    '600': '#70329A',
    '700': '#542574',
    '800': '#38194D',
    '900': '#1C0C27'
  },
  youtube: {
    '50': '#FFE5E5',
    '100': '#FFB8B8',
    '200': '#FF8A8A',
    '300': '#FF5C5C',
    '400': '#FF2E2E',
    '500': '#FF0000',
    '600': '#CC0000',
    '700': '#990000',
    '800': '#660000',
    '900': '#330000'
  },
  facebook: {
    '50': '#EDF0F8',
    '100': '#CCD6EB',
    '200': '#AABBDE',
    '300': '#89A1D1',
    '400': '#6886C5',
    '500': '#476CB8',
    '600': '#395693',
    '700': '#2B416E',
    '800': '#1D2B49',
    '900': '#0E1625'
  },
  twitter: {
    '50': '#E7F5FE',
    '100': '#BBE3FB',
    '200': '#90D1F9',
    '300': '#65BFF6',
    '400': '#39ADF4',
    '500': '#0E9BF1',
    '600': '#0B7CC1',
    '700': '#085D91',
    '800': '#063E60',
    '900': '#031F30'
  },
  slack: {
    '50': '#FDF6E8',
    '100': '#F9E7BE',
    '200': '#F5D793',
    '300': '#F1C869',
    '400': '#EEB83F',
    '500': '#EAA915',
    '600': '#BB8711',
    '700': '#8C650D',
    '800': '#5E4408',
    '900': '#2F2204'
  }
}

const fonts = {
  body: "'Oxanium', cursive",
  heading: "'Titillium Web', sans-serif"
}

const shadows = {
  outline: 'none'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const components = {
  Badge: {
    baseStyle: () => ({
      fontWeight: 'normal'
    })
  },
  Button: {
    baseStyle: () => ({
      fontWeight: 400
    })
  },
  Input: {
    baseStyle: () => ({
      background: 'red.500'
    }),
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Textarea: {
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Select: {
    defaultProps: {
      focusBorderColor: 'primary.200'
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: 400
    },
    variants: {
      line: (props) => ({
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        _after: {
          backgroundColor: mode('primary.400', 'primary.200')(props),
          content: '""',
          display: 'block',
          height: '13px',
          borderRadius: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          zIndex: -1,
          w: 'full'
        }
      })
    }
  },
  Text: {
    baseStyle: {
      fontWeight: 300
    },
    variants: {
      highlight: (props) => ({
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        _after: {
          backgroundColor: mode('primary.400', 'primary.200')(props),
          content: '""',
          display: 'block',
          height: '13px',
          borderRadius: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          zIndex: -1,
          w: 'full'
        }
      })
    }
  }
}
const theme = extendTheme({
  colors,
  config,
  fonts,
  shadows,
  styles,
  components
})

export default theme
