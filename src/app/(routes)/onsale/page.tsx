// components/ProductSection.tsx
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  image: string;
  salePrice: number;
  cutPrice: number;
};

const products: Product[] = [
  { id: 1, name: "Product 1", image: "/abc.png", salePrice: 50, cutPrice: 80 },
  { id: 2, name: "Product 2", image: "/abcd.png", salePrice: 75, cutPrice: 100 },
  { id: 3, name: "Product 3", image: "/sh2.png", salePrice: 120, cutPrice: 150 },
];

const ProductSection: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Featured Products</h2>
        <p className="text-gray-600 mt-2">Discover our exclusive deals and bestsellers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow p-4">
            <CardHeader>
              <div className="w-full h-60 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-52 h-52 object-contain rounded-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold text-center mt-4">{product.name}</CardTitle>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-bold text-lg">${product.salePrice}</span>
                <span className="text-gray-400 line-through text-sm">${product.cutPrice}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
