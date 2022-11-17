export interface Order {
  user: string;
  totalProducts: number;
  id: string;
  products: Product[];
  createdAt: CreatedAt;
  totalPaid: number;
}

export interface CreatedAt {
  seconds: number;
  nanoseconds: number;
}

export interface Product {
  title: string;
  price: number;
  id: number;
  image: Image;
  quantity: number;
}

export interface Image {
  src: string;
  blurHeight: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  height: number;
}
