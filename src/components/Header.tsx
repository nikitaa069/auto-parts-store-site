import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-autoparts">
              АвтоЗапчасти
            </span>
            <span className="ml-1 text-xl">🔧</span>
          </Link>

          {/* Поиск - скрыт на мобильных устройствах */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Поиск запчастей..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="default" size="sm">
              Найти
            </Button>
          </div>

          {/* Навигация и корзина */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
                Каталог
              </Link>
              <Link to="/delivery" className="text-foreground hover:text-primary transition-colors">
                Доставка
              </Link>
              <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
            </nav>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-autoparts text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Мобильное меню кнопка */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Поиск запчастей..."
                  className="pl-10 pr-4 py-2 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button variant="default" size="sm">
                Найти
              </Button>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/catalog" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Каталог
              </Link>
              <Link 
                to="/delivery" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Доставка
              </Link>
              <Link 
                to="/contacts" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              <Link 
                to="/cart" 
                className="text-foreground hover:text-primary transition-colors py-2 flex items-center"
                onClick={toggleMenu}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Корзина <span className="ml-2 bg-autoparts text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;