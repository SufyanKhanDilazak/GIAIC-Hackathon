// components/NewArrivals.tsx
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

const newArrivals: Product[] = [
  {
    id: 1,
    name: "Classic White Shirt",
    image: "/sh.png",
    price: 40,
    description:
      "A timeless classic for any occasion, our white shirt is made from high-quality cotton for ultimate comfort and durability.",
  },
  {
    id: 2,
    name: "Casual Denim Shirt",
    image: "/sh2.png",
    price: 60,
    description:
      "Elevate your casual wardrobe with our denim shirt, featuring a modern fit and stylish finish for any outing.",
  },
  {
    id: 3,
    name: "Formal Blue Shirt",
    image: "/sh3.png",
    price: 55,
    description:
      "Perfect for the office or formal events, this blue shirt offers a sleek and professional look with a comfortable fit.",
  },
];

const NewArrivals: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">New Arrivals</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the latest additions to our collection. Perfect for every style and occasion.
        </p>
      </div>
      <div className="space-y-8 px-8 max-w-6xl mx-auto">
        {newArrivals.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col lg:flex-row items-center lg:items-start p-6 hover:shadow-lg transition-shadow"
          >
            <CardHeader className="w-full lg:w-1/3 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-72 object-contain rounded-lg"
              />
            </CardHeader>
            <CardContent className="w-full lg:w-2/3 text-center lg:text-left mt-6 lg:mt-0 lg:ml-8">
              <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
              <p className="text-gray-600 mt-4 text-lg">{product.description}</p>
              <div className="text-gray-800 font-extrabold text-xl mt-6">${product.price}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
