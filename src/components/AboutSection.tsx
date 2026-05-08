import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Широкий ассортимент", description: "Более 5000 позиций для Lemken, Kverneland, Amazone, Kuhn, KV и других марок" },
  { title: "Наличие на складе", description: "Большинство позиций всегда в наличии — отгрузка без ожидания" },
  { title: "Честные цены", description: "Оптовые и розничные цены без скрытых наценок. Скидки постоянным покупателям" },
  { title: "Оригиналы и аналоги", description: "Предлагаем как оригинальные детали, так и качественные аналоги PROMIS, Agri" },
  { title: "Быстрая отгрузка", description: "Отправляем заказы в день оформления или на следующий рабочий день" },
  { title: "Экспертная поддержка", description: "Поможем подобрать деталь по артикулу, марке техники или фотографии" },
]

const stats = [
  { number: "5000+", label: "Позиций в каталоге" },
  { number: "15+", label: "Лет на рынке" },
  { number: "20+", label: "Марок техники" },
  { number: "1-2", label: "Дня до отгрузки" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О компании АгроХ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Надёжный поставщик{" "}
            <span className="text-primary relative">
              с 2010 года
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Специализируемся на поставке запасных частей для почвообрабатывающей и посевной техники. Работаем с фермерами, агрохолдингами и дилерами по всей России.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
