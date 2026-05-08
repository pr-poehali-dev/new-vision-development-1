import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/context/CartContext"
import { ShoppingCart, Trash2, Plus, Minus, Send, PackageOpen } from "lucide-react"

export function CartDrawer() {
  const { items, remove, updateQty, clear, total } = useCart()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<"cart" | "form" | "done">("cart")
  const [form, setForm] = useState({ name: "", phone: "", email: "", comment: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[cart] order:", { items, form })
    setStep("done")
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      setStep("cart")
      if (step === "done") clear()
    }, 300)
  }

  return (
    <Sheet open={open} onOpenChange={(v) => { setOpen(v); if (!v) setTimeout(() => { setStep("cart"); if (step === "done") clear() }, 300) }}>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-lg hover:bg-primary/10 transition-colors">
          <ShoppingCart className="h-5 w-5 text-foreground" />
          {total > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold animate-bounce">
              {total}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[380px] sm:w-[480px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Корзина {total > 0 && <span className="text-sm font-normal text-muted-foreground">({total} поз.)</span>}
          </SheetTitle>
        </SheetHeader>

        {step === "cart" && (
          <div className="flex flex-col flex-1 overflow-hidden mt-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center py-16">
                <PackageOpen className="h-16 w-16 text-muted-foreground/40" />
                <p className="text-muted-foreground">Корзина пуста</p>
                <p className="text-sm text-muted-foreground">Добавьте детали из каталога</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-muted/40 border border-border/50">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight line-clamp-2">{item.name}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">{item.article}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary mt-1 inline-block">{item.category}</span>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-6 h-6 rounded bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-6 h-6 rounded bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Итого позиций:</span>
                    <span className="font-semibold">{items.length} наименований ({total} шт.)</span>
                  </div>
                  <Button className="w-full" size="lg" onClick={() => setStep("form")}>
                    <Send className="mr-2 h-4 w-4" />
                    Запросить цену корзины
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clear}>
                    Очистить корзину
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {step === "form" && (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-y-auto mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">Заполните контакты — мы свяжемся с вами и озвучим цены по всем позициям.</p>
            <div className="space-y-1">
              <label className="text-sm font-medium">Имя *</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ваше имя" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Телефон *</label>
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 900 123-45-67" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">E-mail</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.ru" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Комментарий</label>
              <Textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Срочность, количество, марка техники..." rows={3} />
            </div>
            <div className="pt-2 space-y-2">
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Отправить заявку
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => setStep("cart")}>
                Назад
              </Button>
            </div>
          </form>
        )}

        {step === "done" && (
          <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Заявка отправлена!</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Мы получили ваш запрос и свяжемся с вами в течение 2 часов с ценами по всем позициям.
            </p>
            <Button onClick={handleClose} className="mt-4">
              Закрыть
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
