import { createContext, useContext, useState, ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  article: string
  category: string
  qty: number
}

interface CartContextType {
  items: CartItem[]
  add: (product: Omit<CartItem, "qty" | "id">) => void
  remove: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clear: () => void
  total: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const add = (product: Omit<CartItem, "qty" | "id">) => {
    const id = `${product.article}-${product.name}`.replace(/\s/g, "_")
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { ...product, id, qty: 1 }]
    })
  }

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return remove(id)
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const clear = () => setItems([])
  const total = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
