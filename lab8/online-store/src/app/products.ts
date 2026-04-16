import { Product } from './product.model';
import { Category } from './category.model';
export const categories: Category[]=[
  { id:1,name: 'Smartphones'},
  { id:2,name: 'laptops'},
  { id:3,name: 'Headphones'},
  { id:4,name: 'Tablets'}
];
export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15',
    description: 'Apple smartphone.',
    price: 389.767,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    likes:0,
    categoryId:1
  },
  {
    id: 2,
    name: 'Samsung S23',
    description: 'Samsung flagship',
    price: 365000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h65/69065034727454.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=750000000',
    likes:0,
    categoryId:1
  },
  {
    id: 3,
    name: 'MacBook Air 13',
    description: 'Apple laptop.',
    price: 458990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
    likes:0,
    categoryId:2
  },
  {
    id: 4,
    name: 'Xiaomi 13',
    description: 'Xiaomi smartphone',
    price: 574500,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h50/86009484148766.png?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/xiaomi-13-12-gb-256-gb-zelenyi-109329846/?c=750000000',
    likes:0,
    categoryId:1
  },
  {
    id: 5,
    name: 'iPad Pro 3',
    description: 'Apple tablet',
    price: 511354,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
    likes:0,
    categoryId:4
  },
  {
    id: 6,
    name: 'AirPods Pro',
    description: 'Apple earphones',
    price: 128824,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
    likes:0,
    categoryId:3
  },
  {
    id: 7,
    name: 'Samsung Watch 8',
    description: 'Smart watch',
    price: 127146,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/p48/54615336.png?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-8-40-mm-serebristyi-belyi-142949811/?c=750000000',
    likes:0,
    categoryId:1
  },
  {
    id: 8,
    name: 'PlayStation 5',
    description: 'Gaming console',
    price: 301898,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    likes:0,
    categoryId:1
  },
  {
    id: 9,
    name: 'Logitech Mouse',
    description: 'Wireless mouse',
    price: 37190,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p30/17653657.png?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/logitech-gaming-mouse-g703-chernyi-132718787/?c=750000000',
    likes:0,
    categoryId:2
  },
  {
    id: 10,
    name: 'HP Laptop',
    description: 'Office laptop',
    price: 269990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/p03/110889874.jpg?format=gallery-medium',
    images: ['','',''],
    link: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0309ci-15-6-8-gb-ssd-512-gb-bez-os-d10cvea-158530784/?c=750000000',
    likes:0,
    categoryId:2
  },
  ];
