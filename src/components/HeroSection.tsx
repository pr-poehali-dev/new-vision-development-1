import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Settings, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{ top: "20%", left: "10%", animationDuration: "4s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "15%", animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-muted/20 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Settings
          className="absolute text-muted-foreground/30 animate-float"
          style={{ top: "15%", left: "15%", animationDelay: "0s" }}
          size={40}
        />
        <Wrench
          className="absolute text-muted-foreground/30 animate-float"
          style={{ top: "25%", right: "20%", animationDelay: "2s" }}
          size={35}
        />
        <Sparkles
          className="absolute text-muted-foreground/30 animate-float"
          style={{ bottom: "20%", left: "20%", animationDelay: "1s" }}
          size={30}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Запчасти для с/х техники оптом и в розницу</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
            Запчасти для{" "}
            <span className="text-primary relative inline-block">
              агротехники
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 animate-fade-in-up animate-delay-100 leading-relaxed">
            Болты, гайки, диски борон, лемеха, отвалы, стойки плугов — всё для Lemken, Kverneland, Amazone, Kuhn и других марок. Быстрая отгрузка по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up animate-delay-200 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <a href="#contact">
                Запросить цену
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
              asChild
            >
              <a href="#portfolio">Каталог деталей</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>5000+ позиций</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>Отгрузка за 1-2 дня</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
              <span>Работаем с 2010 года</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up animate-delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/c6ed27fd-8095-460f-aa21-ddcfa0319cae.jpg"
              alt="Склад запчастей для сельхозтехники"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
