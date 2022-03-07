import { RichText, RichTextBlock } from 'prismic-reactjs'
import readingTime from 'reading-time'

const getReadingTime = (content: RichTextBlock[]) => readingTime(RichText.asText(content))

export default getReadingTime
