/* eslint-disable consistent-return */
import linkResolver from '../../utils/linkResolver'
import { PrismicClient } from '../../utils/prismic'

export default async (req, res) => {
  const { token: ref, documentId } = req.query
  const redirectUrl = await PrismicClient.getPreviewResolver(ref, documentId).resolve(
    linkResolver,
    '/'
  )

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({ ref })

  res.redirect(redirectUrl)
  res.end()
}
