import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"
import { Search, ShoppingCart, ChevronRight, CheckCircle2 } from "lucide-react"

const categories = [
  "Все", "Болты", "Гайки", "Шайбы", "Винты",
  "Штифты / Шплинты", "Диски борон", "Ступицы", "Плуги", "Косилки", "Сеялки", "Другое",
]

export default function Catalog() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("Все")
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set())
  const navigate = useNavigate()
  const { add } = useCart()

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Все" || p.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.article.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.stopPropagation()
    add({ name: product.name, article: product.article, category: product.category })
    setAddedIds((prev) => new Set([...prev, product.id]))
    setTimeout(() => {
      setAddedIds((prev) => { const s = new Set(prev); s.delete(product.id); return s })
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {products.length}+ позиций
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Каталог запчастей</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Нажмите на деталь для подробного описания. Добавляйте в корзину и запрашивайте цену сразу по всему списку.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8 max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              className="pl-10 py-5 text-base"
              placeholder="Поиск по названию или артикулу..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Показано: <span className="font-semibold text-foreground">{filtered.length}</span> из {products.length} позиций
          </p>

          {/* Table */}
          <div className="rounded-xl border border-border overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground w-8">#</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Наименование</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden sm:table-cell">Артикул</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden md:table-cell">Категория</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-muted-foreground">
                        Ничего не найдено. Попробуйте другой запрос.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((product, index) => (
                      <tr
                        key={product.id}
                        className="border-b border-border/50 last:border-b-0 hover:bg-primary/5 transition-colors group cursor-pointer"
                        onClick={() => navigate(`/catalog/${product.id}`)}
                      >
                        <td className="px-4 py-3 text-muted-foreground text-xs">{index + 1}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="font-medium group-hover:text-primary transition-colors">{product.name}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </div>
                          <span className="sm:hidden text-xs text-muted-foreground font-mono">{product.article}</span>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground hidden sm:table-cell">{product.article}</td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <Badge variant="secondary" className="text-xs font-normal">{product.category}</Badge>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button
                            size="sm"
                            variant={addedIds.has(product.id) ? "outline" : "ghost"}
                            className="gap-1.5 h-8 text-xs"
                            onClick={(e) => handleAddToCart(e, product)}
                          >
                            {addedIds.has(product.id) ? (
                              <><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Добавлено</>
                            ) : (
                              <><ShoppingCart className="h-3.5 w-3.5" /> В корзину</>
                            )}
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Не нашли нужную позицию?{" "}
            <a href="/#contact" className="text-primary hover:underline font-medium">
              Напишите нам
            </a>{" "}
            — подберём по артикулу или марке техники.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
