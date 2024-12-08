import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from './components/product-card'
import ReviewsSection from './components/Reviews'
import { products } from './data/products'

export default function Home() {
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div className="container mx-auto px-1 sm:px-1 lg:px-1 py-8 space-y-12 sm:space-y-8">
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-950 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 p-4 md:p-8 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>  
            <p className="text-sm sm:text-base text-gray-600 max-w-md">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>  
            <Button variant="secondary" className="bg-black text-white rounded-full px-8 sm:px-16 py-3 hover:bg-gray-900">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image 
              src="/picc.png" 
              alt="Hero Image" 
              width={600} 
              height={600} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-7 bg-black py-6 sm:py-8 px-4 sm:px-12 items-center justify-items-center rounded-xl">
        {[
          { name: 'Versac', logo: '/versace.png' },
          { name: 'Zara', logo: '/zara.png' },
          { name: 'Gucci', logo: '/gucci.png' },
          { name: 'Prada', logo: '/prada.png' },
          { name: 'Calvin Klein', logo: '/calvin.png' }
        ].map(({ name, logo }) => (
          <div 
            key={name} 
            className="w-16 sm:w-24 h-8 sm:h-12 flex items-center justify-center"
          >
            <Image 
              src={logo} 
              alt={`${name} logo`} 
              width={96} 
              height={48} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6 mt-48">TOP SELLING</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Browse by Style Section */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-center">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center">
            <Image
              src="/1.png"
              alt="Casual Style"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Casual</h3>
              <Link href="/category/casual" className="text-white hover:underline">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Party', image: '/2.png' },
              { name: 'Gym', image: '/3.png' },
              { name: 'Style', image: '/4.png' }
            ].map(({ name, image }) => (
              <div key={name} className="relative aspect-square flex items-center justify-center">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
                  <h3 className="text-lg font-bold mb-1 text-white">{name}</h3>
                  <Link
                    href={`/category/${name.toLowerCase()}`}
                    className="text-white hover:underline"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  )
}

