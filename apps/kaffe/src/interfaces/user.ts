export type UserIProps = {
  _id?: string
  fullname: string
  username: string
  email: string
  avatar: { url_image: string; is_approved: boolean; updated_at: string }
  banner: { url_image: string; updated_at: string }
  is_verified: { is_valid: string; updated_at: string }
  is_premium: { is_valid: boolean; updated_at: string }
}
