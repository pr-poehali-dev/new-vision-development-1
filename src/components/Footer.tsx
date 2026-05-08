export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">⚙ АгроХ</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Запчасти для сельскохозяйственной техники — болты, лемеха, диски, ступицы и многое другое.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 АгроХ. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ассортимент
                </a>
              </li>
              <li>
                <a href="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Условия работы
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Марки техники</h4>
            <ul className="space-y-1">
              {["Lemken", "Kverneland", "Amazone", "Kuhn", "Horsch", "Lemken Saphir"].map((brand) => (
                <li key={brand}>
                  <span className="text-sm text-muted-foreground">{brand}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}