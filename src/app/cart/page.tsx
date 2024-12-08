"use client"

import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { name: 'Gradient Graphic T-shirt', price: 145, image: '/placeholder.svg' },
            { name: 'Checkered Shirt', price: 180, image: '/placeholder.svg' },
            { name: 'Skinny Fit Jeans', price: 240, image: '/placeholder.svg' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-lg">
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 text-lg font-semibold">${item.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">1</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$565</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount (20%)</span>
                <span>-$113</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$15</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$467</span>
              </div>
            </div>
            <Button className="w-full mt-6">Go to Checkout</Button>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

