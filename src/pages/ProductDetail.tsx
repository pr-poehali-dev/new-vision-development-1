import { useParams, useNavigate } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CartDrawer } from "@/components/CartDrawer"
import { useCart } from "@/context/CartContext"
import { getProductById } from "@/data/products"
import { ArrowLeft, ShoppingCart, Phone, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const product = id ? getProductById(decodeURIComponent(id)) : undefined

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <p className="text-2xl font-bold">Деталь не найдена</p>
          <Button onClick={() => navigate("/catalog")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться в каталог
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    add({ name: product.name, article: product.article, category: product.category })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Главная</button>
            <span>/</span>
            <button onClick={() => navigate("/catalog")} className="hover:text-primary transition-colors">Каталог</button>
            <span>/</span>
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-muted/30 aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">{product.category}</Badge>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-muted-foreground">Артикул:</span>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{product.article}</code>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Характеристики</h3>
                  <div className="rounded-xl border border-border overflow-hidden">
                    {product.specs.map((spec, i) => (
                      <div key={i} className={`flex ${i % 2 === 0 ? "bg-muted/30" : "bg-background"}`}>
                        <div className="px-4 py-2.5 w-1/2 text-sm text-muted-foreground border-r border-border">{spec.label}</div>
                        <div className="px-4 py-2.5 w-1/2 text-sm font-medium">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">Цена по запросу</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение 2 часов</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    В наличии
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  variant={added ? "outline" : "default"}
                >
                  {added ? (
                    <><CheckCircle2 className="h-5 w-5 text-green-500" /> Добавлено в корзину</>
                  ) : (
                    <><ShoppingCart className="h-5 w-5" /> В корзину</>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => navigate("/#contact")}
                  asChild
                >
                  <a href="/#contact">
                    <Phone className="h-5 w-5" />
                    Запросить цену
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Доставка по всей России: СДЭК, ПЭК, Деловые линии, Почта России
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-12">
            <Button variant="ghost" onClick={() => navigate("/catalog")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Вернуться в каталог
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
