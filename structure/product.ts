export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  owner_id: string;
  images: string[];
  product_status: STATUS_PRODUCT;
  status: {
    value: SALE_STATUS;
    updated_at: string;
  };
  location: {
    city: string;
  };
  tags: {
    text: string;
    slug: string;
  };
  created_at: string;
  updated_at: string;
};

enum SALE_STATUS {
  SOLD_OUT,
  AVAILABLE,
  INVISIBLE,
}

enum STATUS_PRODUCT {
  NEW,
  USED,
  ALMOST_NEW,
}
