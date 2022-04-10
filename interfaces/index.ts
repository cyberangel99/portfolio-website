// UI
export type IHashRouteMenuItem = {
  name: string
  hash: string
  color: string
}

// CONTACT
export type IContactPayload = {
  name: string
  email: string
  phone?: string
  organization?: string
  message: string
  reason: string
}
