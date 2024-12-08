import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export function ProductCard({ id, name, price, image, rating }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="flex justify-center items-center mt-1">
          <p className="text-sm font-semibold">${price.toFixed(2)}</p>
          <div className="ml-2 flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-xs text-gray-500">({rating.toFixed(1)})</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

