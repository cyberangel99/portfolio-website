import Color from 'color'

export const hexToRGBA = (hex: string, opacity = 1) => Color(hex).fade(opacity).string()

export default hexToRGBA
