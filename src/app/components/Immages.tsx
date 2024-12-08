import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Product 1", image: "/abc.png", price: 50 },
  { id: 2, name: "Product 2", image: "/abcd.png", price: 75 },
  { id: 3, name: "Product 3", image: "/sh2.png", price: 120 },
  { id: 4, name: "Product 4", image: "/sh.png", price: 150 },
];

const Immages: FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-gray-950">YOU MIGHT ALSO LIKE</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 px-6 max-w-full mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow p-4 max-w-xs mx-auto">
            <CardHeader>
              <div className="w-full h-60 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold text-center mt-4">{product.name}</CardTitle>
              <div className="text-center mt-4">
                <span className="text-green-600 font-bold text-lg">${product.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Immages;
