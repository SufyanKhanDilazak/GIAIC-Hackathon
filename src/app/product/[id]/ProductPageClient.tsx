"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Define interface for Review
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

// Define interface for Related Product
interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Explicitly define Product interface
interface Product {
  name: string;
  price: number;
  image: string;
  colors?: string[];
}

interface ProductPageClientProps {
  product?: Product;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "Posted on August 14, 2023",
    comment: "This shirt is amazing! The fabric is so soft and comfortable, and the fit is perfect. I got so many compliments when I wore it.",
  },
  {
    id: 2,
    name: "Michael R.",
    rating: 4,
    date: "Posted on August 12, 2023",
    comment: "Great quality shirt, runs true to size. The design is exactly as pictured.",
  },
  {
    id: 3,
    name: "Emily L.",
    rating: 5,
    date: "Posted on August 10, 2023",
    comment: "Love this shirt! The color is vibrant and it's so comfortable to wear.",
  },
  {
    id: 4,
    name: "David K.",
    rating: 4,
    date: "Posted on August 8, 2023",
    comment: "Good quality material and nice fit. Would buy again.",
  },
  {
    id: 5,
    name: "Jessica T.",
    rating: 5,
    date: "Posted on August 6, 2023",
    comment: "Excellent product! Fast shipping and the shirt looks even better in person.",
  },
];

const relatedProducts: RelatedProduct[] = [
  {
    id: "1",
    name: "Pure Soft Cotton Tee",
    price: 45.00,
    image: "/shirt.png",
  },
  {
    id: "2",
    name: "Good Pant",
    price: 55.00,
    image: "/pant.png",
  },
  {
    id: "3",
    name: "Soft Shirt",
    price: 65.00,
    image: "/shirt1.png",
  },
  {
    id: "4",
    name: "Orange Shirt",
    price: 45.00,
    image: "/shirt2.png",
  },
];

export default function ProductPageClient({ product }: ProductPageClientProps) {
  // Initialize hooks unconditionally
  const [selectedColor, setSelectedColor] = useState<string>("#556B2F");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);

  // Use useMemo to provide a safe default
  const initialColor = useMemo(() => {
    return product?.colors?.[0] || "#556B2F";
  }, [product]);

  // Use useEffect to update color when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(initialColor);
    }
  }, [initialColor, product]);

  // If no product, show loading state (keep hooks above this)
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-md bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={product.image}
                  alt={`${product.name} view ${index}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">
                ${(product.price * 1.3).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Select Colors</h3>
              <div className="flex gap-2">
                {(product.colors || ["#556B2F", "#8B4513", "#000000"]).map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Select Size</h3>
              <div className="flex gap-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1 bg-black text-white hover:bg-black/90">
                Add to Cart
              </Button>
            </div>
          </div>

          <Tabs defaultValue="buying" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buying">Buying & Returns</TabsTrigger>
              <TabsTrigger value="reviews">All Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="buying" className="mt-4">
              <div className="prose max-w-none">
                <p>
                  Free shipping on orders over $50. We offer a 30-day return policy for unworn items.
                  Please see our returns page for more details.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{review.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`} className="group">
              <div className="aspect-square relative overflow-hidden rounded-md bg-gray-100 mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}