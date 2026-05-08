import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказываем болты и лемеха для плугов Lemken уже третий сезон. Цены ниже, чем у дилеров, а качество — отличное. Доставка пришла быстро, всё в наличии было.",
    name: "Александр В.",
    role: "Фермерское хозяйство, Краснодарский край",
  },
  {
    quote:
      "Нашли нужные ступицы для бороны Amazone по артикулу за 10 минут. Менеджер сразу ответил, подтвердил наличие. Отправили на следующий день — мы успели к севу.",
    name: "Сергей П.",
    role: "Агрохолдинг, Воронежская область",
  },
  {
    quote:
      "Работаем как оптовый покупатель. Удобно — один поставщик на весь крепёж и рабочие органы. Персональный менеджер знает наш парк техники и сам предлагает нужное.",
    name: "Татьяна М.",
    role: "Снабженец, ООО «АгроПром»",
  },
  {
    quote:
      "Купили аналоги PROMIS для плугов KV — держатся ничуть не хуже оригинала, а по цене в 1,5 раза выгоднее. Теперь только здесь и берём расходники.",
    name: "Николай Д.",
    role: "Механизатор, ИП, Ставропольский край",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Фермеры и предприятия со всей России доверяют нам поставку запчастей — и это не случайно.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
