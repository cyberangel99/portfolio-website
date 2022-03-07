export default async function exit(_, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // Redirect the user back to the index page.
  res.redirect('/')
  return res.end()
}
