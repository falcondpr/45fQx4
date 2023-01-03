export type User = {
  id: string
  id_user: string
  fullname: string
  username: string
  email: string
  password: string
  avatar: {
    url_image: string
    is_approved: boolean
    created_at: string
  }
  banner: {
    url_image: string
    updated_at: string
  }
  is_verified: {
    is_valid: string
    updated_at: string
  }
  is_premium: {
    is_valid: boolean
    updated_at: string
  }
  created_at: string
  updated_at: string
}
