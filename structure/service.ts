export type Service = {
  id: string
  title: string
  description: string
  images: Image[]
  price_start: number
  location: {
    city: string
    department: string
  }
  created_at: string
  updated_at: string
}

type Image = {
  id: string
  url_image: string
  created_at: string
}
