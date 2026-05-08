import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToSection = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/" + hash)
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </a>
            <button onClick={() => goToSection("#services")} className="text-sm font-medium hover:text-primary transition-colors bg-transparent border-0 cursor-pointer">
              Ассортимент
            </button>
            <a href="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <button onClick={() => goToSection("#pricing")} className="text-sm font-medium hover:text-primary transition-colors bg-transparent border-0 cursor-pointer">
              Условия
            </button>
            <button onClick={() => goToSection("#contact")} className="text-sm font-medium hover:text-primary transition-colors bg-transparent border-0 cursor-pointer">
              Контакты
            </button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}