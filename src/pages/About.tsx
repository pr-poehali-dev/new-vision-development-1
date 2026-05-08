import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, ShieldCheck, Zap, Warehouse, Package, Truck, Clock } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "ТОЧНОСТЬ",
    description:
      "Информация, транслируемая клиенту, соответствует действительности на 100%: точная информация и цена на сайте, точный срок доставки, возможность подобрать продукт точно по характеристикам.",
  },
  {
    icon: ShieldCheck,
    title: "НАДЁЖНОСТЬ",
    description:
      "Соответствие требованиям клиента, сформированный опыт и доверие со стороны клиентов и партнёров, транслируемые на рынок. Исполнение в срок, наличие нужного товара или его аналога, прозрачная ценовая политика.",
  },
  {
    icon: Zap,
    title: "УДОБСТВО",
    description:
      "Современные технологии и инструменты: автоматический подбор аналогов, удобный интерфейс, отсрочка платежа, массовое добавление в корзину через Excel-файл, резервирование товара, ЭДО, EDI, онлайн-возвраты — помогают нашим клиентам делать работу проще и прозрачнее.",
  },
]

const stats = [
  { icon: Warehouse, number: "1000 м²", label: "Площадь склада" },
  { icon: Package, number: "250+", label: "Брендов" },
  { icon: Truck, number: "от 1 дня", label: "Доставка" },
  { icon: Clock, number: "24/7", label: "Резервирование" },
]

const requisites = [
  { label: "Полное наименование", value: "Общество с ограниченной ответственностью «АгроХ»" },
  { label: "Юридический адрес", value: "141281, Московская область, г.о. Пушкинский, г. Ивантеевка, ул. Бережок, дом 6, квартира 14" },
  { label: "ИНН", value: "5038191314" },
  { label: "КПП", value: "503801001" },
  { label: "ОГРН", value: "1245000136765" },
]

const bankRequisites = [
  { label: "Банк", value: "ПАО СБЕРБАНК" },
  { label: "БИК", value: "044525225" },
  { label: "К/С", value: "30101810400000000225" },
  { label: "Р/С", value: "40702810740000432537" },
]

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero with team photo */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/f3140087-c5c8-4ab7-92cb-d3d427d7f942.jpg"
          alt="Команда АгроХ"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent flex items-center px-8 sm:px-16">
          <div>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight text-foreground">
              КОМПАНИЯ<br />
              <span className="text-primary">АГРОХ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About text */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Сотрудничество с нашей компанией АгроХ надёжное и удобное. Доступность — одно из наших ключевых преимуществ: с нами легко найти, выбрать и заказать — всю остальную работу мы берём на себя.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы максимально упрощаем взаимодействие клиентов с нашей компанией, чтобы дать им возможность сосредоточиться на том, что действительно важно. Для этого мы предлагаем удобные и технологичные онлайн-сервисы и инструменты.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {values.map((val, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <val.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary tracking-wide">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{val.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services list */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6">Наши сервисы и инструменты</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Выверенный ассортимент",
                "Доступ к ценам и остаткам",
                "Резервирование 24/7",
                "Отсрочка платежа",
                "Массовое добавление через Excel",
                "ЭДО и EDI",
                "Онлайн-возвраты",
                "Автоподбор аналогов",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requisites */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Реквизиты</h2>
                <div className="space-y-4">
                  {requisites.map((req, index) => (
                    <div key={index} className="border-b border-border/50 pb-3 last:border-b-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{req.label}</div>
                      <div className="text-sm font-medium">{req.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Банковские реквизиты</h2>
                <div className="space-y-4">
                  {bankRequisites.map((req, index) => (
                    <div key={index} className="border-b border-border/50 pb-3 last:border-b-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{req.label}</div>
                      <div className="text-sm font-medium font-mono">{req.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
