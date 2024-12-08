export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    images: string[]
    colors: string[]
    sizes: string[]
    category: string
    description: string
    rating: number
    reviews: Review[]
  }
  
  export interface Review {
    id: number
    author: string
    rating: number
    text: string
    date: string
  }
  
  export interface CartItem {
    id: string
    productId: string
    name: string
    price: number
    color: string
    size: string
    quantity: number
    image: string
  }
  
  