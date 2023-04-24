export type Business = {
  id: string;
  banner: string;
  avatar: string;
  category: string;
  tags: string[];
  name: string;
  username: string;
  ownerId: string[];
  location: {
    state: string;
    city: string;
    country: string;
  };
  address: {
    name: string;
    latitude: string;
    longitude: string;
  };
  createdAt: string;
  updatedAt: string;
};
