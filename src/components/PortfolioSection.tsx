import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Детали плугов",
    category: "Lemken, Kverneland, Kuhn, ППО",
    image: "https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/23818ff2-84ab-4d77-ab8c-cf80a0dba4cf.jpg",
    description:
      "Лемеха, отвалы, долота, грудь отвала, полевые доски, стойки корпусов, клинья, углоснимы. Широкий ассортимент для оборотных и фиксированных плугов.",
    tags: ["Лемеха", "Отвалы", "Долота", "Стойки", "Полевые доски"],
  },
  {
    title: "Крепёж для сельхозтехники",
    category: "DIN 608, DIN 933, ISO 5713",
    image: "https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/c6ed27fd-8095-460f-aa21-ddcfa0319cae.jpg",
    description:
      "Болты с квадратным и шестигранным подголовником, гайки самоконтрящиеся, шайбы, шплинты, штифты — всё для надёжного крепления рабочих органов.",
    tags: ["Болты", "Гайки", "Шайбы", "Geomet", "Цинк"],
  },
  {
    title: "Диски и ступицы борон",
    category: "Amazone, Lemken, KV, Horsch",
    image: "https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/23818ff2-84ab-4d77-ab8c-cf80a0dba4cf.jpg",
    description:
      "Гладкие и зубчатые диски D=450–735 мм, ступицы в сборе, подшипники корпусов, кронштейны и стойки. Борсодержащая сталь для повышенного ресурса.",
    tags: ["Диски", "Ступицы", "Подшипники", "Кронштейны"],
  },
  {
    title: "Детали косилок и сеялок",
    category: "Kuhn/КПР-9, Lemken, Amazone, KV",
    image: "https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/c6ed27fd-8095-460f-aa21-ddcfa0319cae.jpg",
    description:
      "Ножи косилок, сошники двухдисковые, загортачи, прикатывающие колёса, высевающие катушки, пружины и крепёж — для поддержания посевной техники в строю.",
    tags: ["Ножи", "Сошники", "Загортачи", "Катушки"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Каталог запчастей</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Основные категории нашего ассортимента. Для получения полного прайс-листа и уточнения наличия — свяжитесь с нами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Запросить цену
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
