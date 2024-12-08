"use client";

import { useState } from "react";
import { ProductCard } from "../../components/product-card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
}

interface Filters {
  colors: string[];
  sizes: string[];
  styles: string[];
}

const products: Product[] = [
  { id: "1", name: "T-shirt", price: 150, originalPrice: 200, image: "/sh.png", rating: 4.5 },
  { id: "2", name: "T-shirt", price: 120, originalPrice: 180, image: "/sh1.png", rating: 4.2 },
  { id: "3", name: "short", price: 220, originalPrice: 300, image: "/sh2.png", rating: 4.8 },
  { id: "4", name: "shirt", price: 500, originalPrice: 600, image: "/sh3.png", rating: 4.7 },
  { id: "5", name: "shirt", price: 300, originalPrice: 400, image: "/shirt.png", rating: 4.6 },
  { id: "6", name: "pant", price: 180, originalPrice: 250, image: "/pant.png", rating: 4.4 },
  // Add more products as needed...
];

const filters: Filters = {
  colors: ["red", "green", "blue", "yellow", "pink", "purple", "black", "white"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  styles: ["Casual", "Formal", "Party", "Gym"],
};

interface FilterControlsProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  selectedStyles: string[];
  setSelectedStyles: (styles: string[]) => void;
  className?: string;
}

const FilterControls = ({
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  selectedStyles,
  setSelectedStyles,
  className,
}: FilterControlsProps) => (
  <div className={cn("space-y-8 w-full", className)}>
    <div>
      <h3 className="font-semibold mb-4">Price Range</h3>
      <Slider
        defaultValue={[0, 500]}
        max={500}
        step={1}
        value={priceRange}
        onValueChange={setPriceRange}
        className="w-full"
      />
      <div className="flex justify-between mt-2 text-sm">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-4">Colors</h3>
      <div className="grid grid-cols-4 gap-2">
        {filters.colors.map((color) => (
          <button
            key={color}
            onClick={() => {
              setSelectedColors(
                selectedColors.includes(color)
                  ? selectedColors.filter((c) => c !== color)
                  : [...selectedColors, color]
              );
            }}
            className={cn(
              "w-8 h-8 rounded-full border-2 transition-all",
              selectedColors.includes(color) ? "border-black scale-110" : "border-transparent"
            )}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-4">Size</h3>
      <div className="space-y-2">
        {filters.sizes.map((size) => (
          <div key={size} className="flex items-center">
            <Checkbox
              id={`size-${size}`}
              checked={selectedSizes.includes(size)}
              onCheckedChange={(checked) => {
                setSelectedSizes(
                  checked ? [...selectedSizes, size] : selectedSizes.filter((s) => s !== size)
                );
              }}
            />
            <label
              htmlFor={`size-${size}`}
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {size}
            </label>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-4">Dress Style</h3>
      <div className="space-y-2">
        {filters.styles.map((style) => (
          <div key={style} className="flex items-center">
            <Checkbox
              id={`style-${style}`}
              checked={selectedStyles.includes(style)}
              onCheckedChange={(checked) => {
                setSelectedStyles(
                  checked ? [...selectedStyles, style] : selectedStyles.filter((s) => s !== style)
                );
              }}
            />
            <label
              htmlFor={`style-${style}`}
              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {style}
            </label>
          </div>
        ))}
      </div>
    </div>
    <Button className="w-full">Apply Filters</Button>
  </div>
);

export default function CategoryPage() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:flex lg:justify-center lg:w-1/4 xl:w-1/5">
          <FilterControls
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedStyles={selectedStyles}
            setSelectedStyles={setSelectedStyles}
            className="w-full max-w-[300px] sticky top-4 self-start"
          />
        </div>
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
                  selectedStyles={selectedStyles}
                  setSelectedStyles={setSelectedStyles}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
