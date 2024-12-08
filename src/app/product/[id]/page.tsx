import { use } from 'react';
import { products } from '../../data/products';
import ProductPageClient from './ProductPageClient';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  return <ProductPageClient product={product} />;
}
