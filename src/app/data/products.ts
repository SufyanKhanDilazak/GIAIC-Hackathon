export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    description: string;
    colors: string[];
    sizes: string[];
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Classic White T-Shirt',
      price: 29.99,
      image: '/shirt.png',
      rating: 4.5,
      description: 'A comfortable and versatile white t-shirt for everyday wear.',
      colors: ['white', 'black', 'gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '2',
      name: 'Slim Fit Jeans',
      price: 59.99,
      image: '/pant.png',
      rating: 4.3,
      description: 'Stylish slim fit jeans that offer both comfort and style.',
      colors: ['blue', 'black', 'gray'],
      sizes: ['28', '30', '32', '34', '36']
    },
    {
      id: '3',
      name: 'Striped Polo Shirt',
      price: 39.99,
      image: '/shirt1.png',
      rating: 4.2,
      description: 'A classic striped polo shirt perfect for casual outings.',
      colors: ['navy', 'red', 'green'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '4',
      name: 'Graphic Print T-Shirt',
      price: 34.99,
      image: '/shirt2.png',
      rating: 4.0,
      description: 'Express yourself with this unique graphic print t-shirt.',
      colors: ['white', 'black'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '5',
      name: 'Leather Sneakers',
      price: 89.99,
      image: '/sh.png',
      rating: 4.7,
      description: 'Premium leather sneakers for a stylish and comfortable look.',
      colors: ['white', 'black', 'brown'],
      sizes: ['7', '8', '9', '10', '11']
    },
    {
      id: '6',
      name: 'Canvas Slip-Ons',
      price: 49.99,
      image: '/sh1.png',
      rating: 4.4,
      description: 'Casual and comfortable canvas slip-on shoes for everyday wear.',
      colors: ['navy', 'red', 'white'],
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: '7',
      name: 'Running Shoes',
      price: 79.99,
      image: '/sh2.png',
      rating: 4.6,
      description: 'High-performance running shoes for your active lifestyle.',
      colors: ['blue', 'black', 'gray'],
      sizes: ['7', '8', '9', '10', '11']
    },
    {
      id: '8',
      name: 'Classic Loafers',
      price: 69.99,
      image: '/sh3.png',
      rating: 4.5,
      description: 'Elegant loafers suitable for both casual and formal occasions.',
      colors: ['brown', 'black'],
      sizes: ['7', '8', '9', '10', '11']
    }
  ];
  
  