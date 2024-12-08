"use client";

import { useState } from "react";
import { ProductCard } from "../../components/product-card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
}

const products: Product[] = [
  { id: "1", name: "T-shirt", price: 150, originalPrice: 200, image: "/shirt.png", rating: 4.5 },
  { id: "2", name: "pant", price: 120, originalPrice: 180, image: "/pant.png", rating: 4.2 },
  { id: "3", name: "Shorts", price: 220, originalPrice: 300, image: "/shirt1.png", rating: 4.8 },
  { id: "4", name: "Shirt", price: 500, originalPrice: 600, image: "/shirt2.png", rating: 4.7 },
  { id: "5", name: "Shirt", price: 300, originalPrice: 400, image: "/sh.png", rating: 4.6 },
  { id: "6", name: "Pants", price: 180, originalPrice: 250, image: "/sh1.png", rating: 4.4 },
  // Add more products...
];

interface FilterControlsProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
}

const FilterControls = ({
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}: FilterControlsProps) => {
  return (
    <div className="space-y-4 p-4 bg-white border rounded-lg shadow">
      {/* Filters Header */}
      <h2 className="flex items-center justify-between text-lg font-semibold mb-2">
        Filters
        <SlidersHorizontal className="h-5 w-5" />
      </h2>

      <Accordion type="multiple" className="space-y-2">
        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors */}
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000"].map(
                (color) => (
                  <button
                    key={color}
                    className={cn(
                      "w-8 h-8 rounded-full border transition-all",
                      selectedColors.includes(color)
                        ? "border-black scale-110"
                        : "border-gray-200"
                    )}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      setSelectedColors(
                        selectedColors.includes(color)
                          ? selectedColors.filter((c) => c !== color)
                          : [...selectedColors, color]
                      )
                    }
                  />
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Sizes */}
        <AccordionItem value="sizes">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={cn(
                    "px-2 py-1 border rounded-full text-xs font-medium",
                    selectedSizes.includes(size)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black"
                  )}
                  onClick={() =>
                    setSelectedSizes(
                      selectedSizes.includes(size)
                        ? selectedSizes.filter((s) => s !== size)
                        : [...selectedSizes, size]
                    )
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Apply Button */}
      <Button className="w-full bg-black text-white hover:bg-gray-800">
        Apply Filter
      </Button>
    </div>
  );
};

export default function CategoryPage() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <FilterControls
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
          />
        </div>

        {/* Mobile Filter Sheet */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full mb-4">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterControls
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedColors={selectedColors}
                  setSelectedColors={setSelectedColors}
                  selectedSizes={selectedSizes}
                  setSelectedSizes={setSelectedSizes}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
