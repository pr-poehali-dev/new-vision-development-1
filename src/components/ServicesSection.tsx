import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Shield, Truck, Package, Star, Phone } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Крепёжные изделия",
    description:
      "Болты, гайки, шайбы, шплинты всех стандартов — DIN 608, DIN 933, DIN 931, ISO 5713 и другие. Классы прочности 8.8, 10.9, 12.9. Покрытия: цинк, Geomet, черный. Поставка от 1 штуки до крупного опта.",
  },
  {
    icon: Wrench,
    title: "Детали плугов",
    description:
      "Лемеха, отвалы, долота, полевые доски, стойки корпуса для Lemken, Kverneland, Kuhn, ППО (Минойты) и других марок. Оригинальные и аналоговые исполнения. Широкий выбор для любого типа почвы.",
  },
  {
    icon: Star,
    title: "Диски и ступицы борон",
    description:
      "Гладкие и зубчатые диски D=450–735 мм для Amazone, Lemken, KV. Ступицы в сборе с подшипниками, кронштейны, стойки режущих узлов. Борсодержащая сталь и стандартная.",
  },
  {
    icon: Shield,
    title: "Детали косилок и сеялок",
    description:
      "Ножи косилок Kuhn/КПР-9, модули ротора, сошники, загортачи, диски сошников, прикатывающие катки для Amazone, Lemken Saphir, KV. Полный ассортимент расходных и силовых деталей.",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    description:
      "Отправляем по всей России транспортными компаниями и Почтой России. Срок отгрузки со склада — 1-2 рабочих дня. Крупным покупателям — специальные условия доставки.",
  },
  {
    icon: Phone,
    title: "Подбор по артикулу",
    description:
      "Поможем подобрать деталь по артикулу оригинала, марке и модели техники. Наши специалисты знают ассортимент и быстро найдут нужную позицию или аналог по выгодной цене.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наш ассортимент
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">поставляем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Более 5000 позиций запчастей для сельскохозяйственной техники ведущих мировых производителей — всегда в наличии на складе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
