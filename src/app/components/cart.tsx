import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Cart() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="aspect-square relative w-20">
                        <Image
                          src="/placeholder.svg"
                          alt="Product image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Product Name</div>
                        <div className="text-sm text-muted-foreground">
                          Color: Black
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Button variant="outline" size="icon">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">1</span>
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$399.98</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>$399.98</span>
              </div>
            </div>
            <Button className="w-full mt-6">Proceed to Checkout</Button>
          </div>
          <div className="flex gap-4">
            <Input placeholder="Coupon Code" />
            <Button>Apply Coupon</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

