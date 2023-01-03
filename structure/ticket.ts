export type Ticket = {
  id: string
  id_user_vendor: string
  id_user_buyer: string
  purchase_code: string
  id_product: string
  price: string
  status_ticket: STATUS_TICKET
  created_at: string
  updated_at: string
}

enum STATUS_TICKET {
  CANCELLED,
  SOLD_OUT,
  ON_HOLD,
}
