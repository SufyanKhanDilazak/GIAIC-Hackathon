'use client'

import { CartProvider } from './cart-provider'
import { SidebarProvider } from './sidebar-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </CartProvider>
  )
}