import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const categories = [
  "Все",
  "Болты",
  "Гайки",
  "Шайбы",
  "Винты",
  "Штифты / Шплинты",
  "Диски борон",
  "Ступицы",
  "Плуги",
  "Косилки",
  "Сеялки",
  "Другое",
]

const products = [
  { name: "Болт M10х35-12,9 DIN 608 с/г Geomet", article: "М10х35 DIN608G", category: "Болты" },
  { name: "Болт M10х35-12,9 кв. подголовник DIN 608 б/г Geomet", article: "М10х35 DIN608G", category: "Болты" },
  { name: "Болт M10х45-12,9 DIN 608 с покрытием Geomet 321A б/г", article: "М10х45 DIN608G", category: "Болты" },
  { name: "Болт M12х35-12,9 DIN 608 с/г Geomet", article: "М12х35 DIN608G", category: "Болты" },
  { name: "Болт М10х30-10,9 6-гранный DIN 933 / ГОСТ 7798 цинк", article: "М10х30 DIN933", category: "Болты" },
  { name: "Болт М10х40-12,9 кв. подголовник DIN 608 с/г", article: "М10х40 DIN608", category: "Болты" },
  { name: "Болт М12х35-12,9 кв. подголовник DIN 608 с/г", article: "М12х35 DIN608", category: "Болты" },
  { name: "Болт М12х45-12,9 кв. подголовник DIN 608 с/г", article: "М12х45 DIN608", category: "Болты" },
  { name: "Болт М14х34-12,9 конический MP-1 с/г (лемех)", article: "М14х34 МР-1", category: "Болты" },
  { name: "Болт М16х50-10,9 6-гранный DIN 933 / ГОСТ 7798 цинк", article: "М16х50 DIN933", category: "Болты" },
  { name: "Болт М20х130-10,9 6-гранный DIN 931 черный", article: "М20х130 DIN931", category: "Болты" },
  { name: "Болт М24х85-10,9 6-гранный DIN 931 цинк", article: "М24х85 DIN931", category: "Болты" },
  { name: "Болт крепления ножа, КОК/OROS цинк", article: "КПС-4-0513602/1.319.804", category: "Болты" },
  { name: "Болт вилки тяги М24х1,5х80-12,9 DIN 933 черный", article: "М24х1,5х80 DIN933", category: "Болты" },
  { name: "Гайка М10-8 DIN 934 цинк", article: "М10 DIN934", category: "Гайки" },
  { name: "Гайка М12-10 самоконтрящаяся DIN 985 цинк", article: "М12 DIN985", category: "Гайки" },
  { name: "Гайка М14-10 самоконтрящаяся DIN 985 цинк", article: "М14 DIN985", category: "Гайки" },
  { name: "Гайка М16-10 DIN 934 черная", article: "М16 DIN934", category: "Гайки" },
  { name: "Гайка М20-10 DIN 934 цинк", article: "М20 DIN934", category: "Гайки" },
  { name: "Гайка М24-8 самоконтрящаяся DIN 985 цинк", article: "М24 DIN985", category: "Гайки" },
  { name: "Гайка корончатая М24-8 DIN 935", article: "М24 DIN935", category: "Гайки" },
  { name: "Гайка корончатая М36-8 DIN 935 цинк", article: "М36 DIN935", category: "Гайки" },
  { name: "Гайка шлицевая М60х2 KM12 DIN 981 цинк", article: "М60х2 DIN981", category: "Гайки" },
  { name: "Гайка шлицевая М80х2 KМ16 DIN 981 цинк", article: "М80х2 DIN981", category: "Гайки" },
  { name: "Шайба плоская М10 DIN 125 цинк", article: "10 DIN125", category: "Шайбы" },
  { name: "Шайба плоская М12 DIN 125 цинк", article: "12 DIN125", category: "Шайбы" },
  { name: "Шайба плоская М16 DIN 125 цинк", article: "16 DIN125", category: "Шайбы" },
  { name: "Шайба М20 DIN 1440 цинк", article: "20 DIN1440", category: "Шайбы" },
  { name: "Шайба М30х42х2,5 DIN 988 цинк", article: "30х42х2,5 DIN988", category: "Шайбы" },
  { name: "Гровер Ф10 ГОСТ 6402 / DIN 127 цинк", article: "10 DIN127", category: "Шайбы" },
  { name: "Гровер Ф16 DIN 127 / ГОСТ 6402", article: "16 DIN127", category: "Шайбы" },
  { name: "Шайба пружинная тарельчатая 40x14,3x2, Lemken", article: "40х14,3х2 DIN2093", category: "Шайбы" },
  { name: "Винт М8х25-8,8 DIN 7991 цинк", article: "М8х25 DIN7991", category: "Винты" },
  { name: "Винт М10х25 DIN 912 / ГОСТ 11738 цинк", article: "М10х25 DIN912", category: "Винты" },
  { name: "Винт М12х30-8,8 DIN 912 цинк", article: "М12х30 DIN912", category: "Винты" },
  { name: "Винт М16х50-10,9 DIN 7991 цинк", article: "М16х50 DIN7991", category: "Винты" },
  { name: "Винт М16х60-10,9 DIN 7991 цинк", article: "М16х60 DIN7991", category: "Винты" },
  { name: "Штифт 8х40 DIN 1481", article: "8х40 DIN1481", category: "Штифты / Шплинты" },
  { name: "Штифт 10х55 распорный, Krone", article: "009127172", category: "Штифты / Шплинты" },
  { name: "Штифт 12х50 DIN 1481", article: "12х50 DIN1481", category: "Штифты / Шплинты" },
  { name: "Шплинт 4х40 DIN 94 цинк", article: "4х40 DIN94", category: "Штифты / Шплинты" },
  { name: "Шплинт 6,3x50 DIN 94 цинк", article: "3117648", category: "Штифты / Шплинты" },
  { name: "Диск бороны гладкий D=460х4 mm (4 отв), Amazone", article: "XL041", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=460x4 mm (4 отв), Amazone", article: "XL043", category: "Диски борон" },
  { name: "Диск бороны гладкий D=510x5 mm (4 отв), Amazone", article: "78201987", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=510x5 mm (4 отв), Amazone", article: "78201966", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=465x5 mm (6 отв), Lemken", article: "3490471", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=510x5 mm (4 отв), Lemken", article: "34910027", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=620x6 mm (5 отв), Lemken", article: "3490467", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=645x6 mm (5 отв.), Lemken", article: "34910029", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=520x6 mm (5 отв), KV", article: "AC353952", category: "Диски борон" },
  { name: "Диск бороны зубчатый D=660-40/6GZ (кв отв 40х40), KV/G&B/Kuhn", article: "RF28480", category: "Диски борон" },
  { name: "Диск зубчатый D=735x6 mm (6 отв.), Lemken", article: "34910017", category: "Диски борон" },
  { name: "Ступица диска бороны (6 отв.) прав.резьб., Lemken", article: "55510012", category: "Ступицы" },
  { name: "Ступица диска бороны (6 отв.) лев.резьб., Lemken", article: "55510013", category: "Ступицы" },
  { name: "Ступица диска бороны в сборе 30x117x100 (6 отв) правая, Lemken", article: "5554512", category: "Ступицы" },
  { name: "Ступица диска бороны в сборе 30x117x100 (6 отв) левая, Lemken", article: "5554513", category: "Ступицы" },
  { name: "Ступица диска бороны D160 5xD12 M30x1,5 RH правая, Lemken", article: "5554502", category: "Ступицы" },
  { name: "Ступица диска бороны D160 5xD12 M30x1,5 LH левая, Lemken", article: "5554503", category: "Ступицы" },
  { name: "Ступица диска бороны (5 отв), KV", article: "AC353361", category: "Ступицы" },
  { name: "Корпус ступицы диска (4 отв), Amazone", article: "78100486", category: "Ступицы" },
  { name: "Подшипник корпуса ступицы 30/62/30 RSR, Lemken", article: "3198760", category: "Ступицы" },
  { name: "Лемех (2 отв) Lemken левый", article: "3352031", category: "Плуги" },
  { name: "Лемех (2 отв) Lemken правый", article: "3352030", category: "Плуги" },
  { name: "Лемех длинный (3 отв) Lemken левый", article: "3352035", category: "Плуги" },
  { name: "Лемех длинный (3 отв) Lemken правый", article: "3352034", category: "Плуги" },
  { name: "Лемех KV левый", article: "KK073005", category: "Плуги" },
  { name: "Лемех KV правый", article: "KK073004", category: "Плуги" },
  { name: "Лемех Марафон левый 622135", article: "622135u", category: "Плуги" },
  { name: "Лемех Марафон правый 622134", article: "622134u", category: "Плуги" },
  { name: "Отвал Lemken левый PROMIS", article: "3441041", category: "Плуги" },
  { name: "Отвал Lemken правый PROMIS", article: "3441040", category: "Плуги" },
  { name: "Отвал KV левый PROMIS", article: "KK073291", category: "Плуги" },
  { name: "Отвал KV правый PROMIS", article: "KK073290", category: "Плуги" },
  { name: "Долото Lemken левое", article: "3364051", category: "Плуги" },
  { name: "Долото Lemken правое", article: "3364050", category: "Плуги" },
  { name: "Долото KV левое", article: "KK063090", category: "Плуги" },
  { name: "Долото KV правое", article: "KK053090", category: "Плуги" },
  { name: "Полевая доска Lemken оборотная узкая", article: "3411504", category: "Плуги" },
  { name: "Полевая доска Lemken оборотная широкая", article: "3411508", category: "Плуги" },
  { name: "Стойка корпуса плуга Lemken 80x35x707", article: "4644991", category: "Плуги" },
  { name: "Нож косилки (107x45x4 mm) Kuhn/КПР-9 левый", article: "55903210", category: "Косилки" },
  { name: "Нож косилки (107x45x4 mm) Kuhn/КПР-9 правый", article: "55903310", category: "Косилки" },
  { name: "Нож косилки (122х45х4 mm) Kuhn/КПР-9 длинный левый", article: "VPE56451200", category: "Косилки" },
  { name: "Нож косилки (122х45х4 mm) Kuhn/КПР-9 длинный правый", article: "VPE56451300", category: "Косилки" },
  { name: "Ротор (диск косилочный) Kuhn/КПР-9", article: "56810400", category: "Косилки" },
  { name: "Модуль (опора диска) в сборе, Kuhn/КПР-9", article: "56803940", category: "Косилки" },
  { name: "Редуктор привода бруса левый, Kuhn/КПР-9", article: "K7006330", category: "Косилки" },
  { name: "Диск сошника D=402x4 mm (5 отв), Amazone", article: "961301", category: "Сеялки" },
  { name: "Диск сошника D=350x3 mm (6 отв), Lemken", article: "3490010", category: "Сеялки" },
  { name: "Диск сошника D=410x5 mm (5 отв), KV", article: "AC353950", category: "Сеялки" },
  { name: "Сошник двухдисковый в сборе, Lemken", article: "6826032", category: "Сеялки" },
  { name: "Загортач d=9 mm, Lemken", article: "3537056", category: "Сеялки" },
  { name: "Загортач d=8 mm, KV", article: "AC495754", category: "Сеялки" },
  { name: "Колесо прикатывающее (б/подш), KV", article: "AC819921", category: "Сеялки" },
  { name: "Пружина натяжения сошника, Lemken", article: "5821125", category: "Сеялки" },
  { name: "Лапа стрельчатая (G25 6x250 mm), Lemken", article: "3374356", category: "Другое" },
  { name: "Лапа стрельчатая 320 мм., Amazone", article: "78708737", category: "Другое" },
  { name: "Стойка S-образная 45х12 (1 отв.) без наконечника", article: "300801", category: "Другое" },
  { name: "Наконечник стойки 45х12 оборотный", article: "302019", category: "Другое" },
  { name: "Зуб фрезы Amazone быстросъемный (18mm) левый", article: "954427", category: "Другое" },
  { name: "Зуб фрезы Amazone быстросъемный (18mm) правый", article: "954426", category: "Другое" },
  { name: "Зуб фрезы Lemken быстросъемный (18mm) левый", article: "3377049", category: "Другое" },
  { name: "Зуб фрезы Lemken быстросъемный (18mm) правый", article: "3377048", category: "Другое" },
  { name: "Зуб пружинный d=13,00 mm левый, Lemken", article: "35310034", category: "Другое" },
  { name: "Кольцо стопорное 28х1,5 DIN 471", article: "28х1,5 DIN471", category: "Другое" },
  { name: "Эксцентрик М24х88/D45-25-24-М24, Lemken PROMIS", article: "3018214", category: "Другое" },
]

export default function Catalog() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("Все")

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Все" || p.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.article.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              5000+ позиций
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Каталог запчастей</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Найдите нужную деталь по названию или артикулу. Для уточнения цены и наличия — свяжитесь с нами.
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
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Артикул</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Категория</th>
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Цена</th>
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
                        key={index}
                        className="border-b border-border/50 last:border-b-0 hover:bg-primary/5 transition-colors group"
                      >
                        <td className="px-4 py-3 text-muted-foreground">{index + 1}</td>
                        <td className="px-4 py-3 font-medium group-hover:text-primary transition-colors">{product.name}</td>
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{product.article}</td>
                        <td className="px-4 py-3">
                          <Badge variant="secondary" className="text-xs font-normal">
                            {product.category}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href="#contact"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = "/#contact"
                            }}
                            className="text-xs text-primary hover:underline font-medium"
                          >
                            Запросить цену
                          </a>
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
