export interface UserType {
  _id: string
  name: string
  username: string
  email: string
  password: string
  created_at: string
}

export interface UpdateUserType {
  name: string
  username: string
  email: string
  password: string
}
