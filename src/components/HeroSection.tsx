import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* TEXT BLOCK — top */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Запчасти для с/х техники оптом и в розницу</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
            Запчасти для{" "}
            <span className="text-primary relative inline-block">
              агротехники
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            Болты, диски борон, лемеха, отвалы, стойки плугов — всё для Lemken, Kverneland, Amazone, Kuhn и других марок. Быстрая отгрузка по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-10">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
              asChild
            >
              <a href="/#contact">
                Запросить цену
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="/catalog">Каталог деталей</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up">
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
      </div>

      {/* ANIMATED COMBINE — bottom */}
      <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden">
        {/* Background field image */}
        <img
          src="https://cdn.poehali.dev/projects/9721dc70-772f-4f70-bc5b-fe163b104273/files/0040ad88-f981-4e73-aca4-9e615c585237.jpg"
          alt="Поле пшеницы"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay at top so text reads well */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-transparent" />
        {/* Animated combine */}
        <div
          className="absolute bottom-12 animate-combine"
          style={{ willChange: "transform" }}
        >
          <svg
            width="260"
            height="120"
            viewBox="0 0 260 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Body */}
            <rect x="60" y="30" width="140" height="60" rx="8" fill="#E67E22" />
            <rect x="60" y="30" width="140" height="25" rx="8" fill="#F39C12" />
            {/* Cab */}
            <rect x="140" y="10" width="55" height="45" rx="6" fill="#2C3E50" />
            <rect x="145" y="14" width="45" height="30" rx="4" fill="#85C1E9" opacity="0.7" />
            {/* Exhaust */}
            <rect x="185" y="4" width="6" height="16" rx="3" fill="#555" />
            <ellipse cx="188" cy="4" rx="4" ry="3" fill="#888" />
            {/* Header / cutting bar */}
            <rect x="10" y="60" width="55" height="18" rx="4" fill="#BDC3C7" />
            <rect x="6" y="64" width="8" height="10" rx="2" fill="#95A5A6" />
            <rect x="16" y="64" width="8" height="10" rx="2" fill="#95A5A6" />
            <rect x="26" y="64" width="8" height="10" rx="2" fill="#95A5A6" />
            <rect x="36" y="64" width="8" height="10" rx="2" fill="#95A5A6" />
            <rect x="46" y="64" width="8" height="10" rx="2" fill="#95A5A6" />
            {/* Wheels */}
            <circle cx="100" cy="95" r="22" fill="#2C3E50" />
            <circle cx="100" cy="95" r="14" fill="#555" />
            <circle cx="100" cy="95" r="5" fill="#BDC3C7" />
            <circle cx="175" cy="100" r="16" fill="#2C3E50" />
            <circle cx="175" cy="100" r="10" fill="#555" />
            <circle cx="175" cy="100" r="4" fill="#BDC3C7" />
            {/* Dust particles */}
            <circle cx="240" cy="105" r="3" fill="#D4A017" opacity="0.6" />
            <circle cx="248" cy="100" r="2" fill="#D4A017" opacity="0.4" />
            <circle cx="244" cy="112" r="2" fill="#D4A017" opacity="0.5" />
          </svg>
        </div>
        {/* Ground line */}
        <div className="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
        {/* Dust trail */}
        <div className="absolute bottom-10 left-0 right-0 animate-dust">
          <div className="flex gap-4 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="rounded-full bg-amber-300"
                style={{ width: `${8 + i * 4}px`, height: `${6 + i * 3}px`, marginTop: `${i % 3 * 4}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes combine-move {
          0% { transform: translateX(-320px); }
          100% { transform: translateX(calc(100vw + 20px)); }
        }
        @keyframes dust-move {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        .animate-combine {
          animation: combine-move 16s linear infinite;
        }
        .animate-dust {
          animation: dust-move 16s linear infinite;
        }
      `}</style>
    </section>
  )
}
