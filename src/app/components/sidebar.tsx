"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "./sidebar-provider";

const navItems = [
  { name: "Home", href: "/" },
  { name: "New Arrivals", href: "/new" },
  { name: "On Sale", href: "/onsale" },
  { name: "Brands", href: "/brands" },
];

const categories = [
  { name: "Shop", href: "/category/formal" },

];

export function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <>
      {/* Background overlay with fade-in effect */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ease-in-out lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-950 shadow-lg transition-transform duration-500 ease-in-out transform z-50 w-80 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ScrollArea className="h-full">
          {/* Close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <span className="text-lg font-bold tracking-wider">SHOP.CO</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-white"
              onClick={toggle}
            >
              <X size={24} />
            </Button>
          </div>

          {/* Navigation links */}
          <div className="p-4">
            <nav>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-white"
                      onClick={toggle}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {/* Categories dropdown */}
                <li>
                  <Button
                    variant="ghost"
                    className="w-full flex justify-between items-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  >
                    Categories
                    {isCategoriesOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                  {isCategoriesOpen && (
                    <ul className="ml-4 mt-3 space-y-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            href={category.href}
                            className="block py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-white"
                            onClick={toggle}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
