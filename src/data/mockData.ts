
import { Product, Category } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max",
    description: "Apple's latest flagship phone with A15 Bionic chip and ProMotion display",
    price: 1099.99,
    discountPercentage: 5,
    rating: 4.8,
    stock: 34,
    brand: "Apple",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: "2",
    title: "Samsung Galaxy S22 Ultra",
    description: "Samsung's premium phone with S Pen support and 108MP camera",
    price: 1199.99,
    discountPercentage: 10,
    rating: 4.7,
    stock: 28,
    brand: "Samsung",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1628815129010-15153b243c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww"
    ]
  },
  {
    id: "3",
    title: "MacBook Pro 16-inch",
    description: "Powerful laptop for professionals with M2 Pro chip",
    price: 2499.99,
    rating: 4.9,
    stock: 15,
    brand: "Apple",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: "4",
    title: "Sony WH-1000XM4 Headphones",
    description: "Premium noise-cancelling wireless headphones",
    price: 349.99,
    discountPercentage: 15,
    rating: 4.8,
    stock: 42,
    brand: "Sony",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: "5",
    title: "Nike Air Max 270",
    description: "Comfortable athletic shoes with air cushioning",
    price: 150,
    rating: 4.5,
    stock: 65,
    brand: "Nike",
    category: "fashion",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww"
    ]
  },
  {
    id: "6",
    title: "Amazon Echo Dot (4th Gen)",
    description: "Smart speaker with Alexa voice assistant",
    price: 49.99,
    discountPercentage: 20,
    rating: 4.6,
    stock: 120,
    brand: "Amazon",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZWNob3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZWNob3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBzcGVha2VyfGVufDB8fDB8fHww"
    ]
  },
  {
    id: "7",
    title: "Levi's 501 Original Fit Jeans",
    description: "Classic straight leg jeans in stonewash blue",
    price: 69.5,
    rating: 4.7,
    stock: 85,
    brand: "Levi's",
    category: "fashion",
    thumbnail: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: "8",
    title: "DJI Mini 2 Drone",
    description: "Ultralight foldable drone with 4K camera",
    price: 449,
    rating: 4.8,
    stock: 18,
    brand: "DJI",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: "9",
    title: "Instant Pot Duo 7-in-1",
    description: "Multi-functional pressure cooker, slow cooker, rice cooker and more",
    price: 89.99,
    discountPercentage: 25,
    rating: 4.7,
    stock: 42,
    brand: "Instant Pot",
    category: "home",
    thumbnail: "https://images.unsplash.com/photo-1599734994845-91ee3968b761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFudCUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1599734994845-91ee3968b761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFudCUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585443835125-d85407d54297?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc3N1cmUlMjBjb29rZXJ8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: "10",
    title: "Le Creuset Dutch Oven",
    description: "Enameled cast iron dutch oven, 5.5 quart in flame orange",
    price: 369.95,
    rating: 4.9,
    stock: 7,
    brand: "Le Creuset",
    category: "home",
    thumbnail: "https://images.unsplash.com/photo-1631984564919-1d9b681af247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBvdmVufGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1631984564919-1d9b681af247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBvdmVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1585442735740-de97c8a026b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va3dhcmV8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    id: "11",
    title: "YETI Rambler Tumbler",
    description: "30 oz stainless steel vacuum insulated tumbler",
    price: 38,
    rating: 4.8,
    stock: 95,
    brand: "YETI",
    category: "home",
    thumbnail: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVtYmxlciUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVtYmxlciUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVtYmxlciUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    id: "12",
    title: "Bose QuietComfort Earbuds",
    description: "True wireless noise cancelling earbuds",
    price: 279,
    discountPercentage: 10,
    rating: 4.6,
    stock: 31,
    brand: "Bose",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  }
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "toys",
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  }
];
