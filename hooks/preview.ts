import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const repoName = process.env.NEXT_PUBLIC_PRISMIC_REPO

function getExitPreviewRoute(router) {
  const defaultPreviewExitUrl = '/api/exit-preview'
  const linkUrl = router.asPath
    ? `${defaultPreviewExitUrl}?currentUrl=${router.asPath}`
    : defaultPreviewExitUrl
  return linkUrl
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function useUpdatePreviewRef(previewRef, documentId) {
  const router = useRouter()
  const previewExitRoute = getExitPreviewRoute(router)
  useEffect(() => {
    if (!documentId) return
    const updatePreview = async () => {
      await timeout(1000)

      const rawPreviewCookie = Cookies.get('io.prismic.preview')
      const previewCookie = rawPreviewCookie ? JSON.parse(rawPreviewCookie) : null

      const previewCookieObject = previewCookie ? previewCookie[`${repoName}.prismic.io`] : null

      const previewCookieRef =
        previewCookieObject && previewCookieObject.preview ? previewCookieObject.preview : null

      if (typeof window !== 'undefined') {
        if (router.isPreview) {
          if (rawPreviewCookie && previewCookieRef) {
            if (previewRef !== previewCookieRef) {
              window.location.href = `/api/preview?token=${previewCookieRef}&documentId=${documentId}`
            }
          } else {
            window.location.href = previewExitRoute
          }
        } else if (rawPreviewCookie && previewCookieRef) {
          window.location.href = `/api/preview?token=${previewCookieRef}&documentId=${documentId}`
        }
      }
      return undefined
    }
    updatePreview()
  }, [documentId, previewExitRoute, previewRef, router])
}
