import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-bold mb-4">О компании</h3>
            <p className="text-sm mb-4">
              Мы предлагаем широкий ассортимент качественных автозапчастей для различных марок автомобилей по доступным ценам.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-autoparts">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-autoparts">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-autoparts">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Категории */}
          <div>
            <h3 className="text-lg font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/engine" className="text-sm hover:text-autoparts">
                  Двигатель и комплектующие
                </Link>
              </li>
              <li>
                <Link to="/catalog/suspension" className="text-sm hover:text-autoparts">
                  Подвеска и рулевое
                </Link>
              </li>
              <li>
                <Link to="/catalog/electronics" className="text-sm hover:text-autoparts">
                  Автоэлектроника
                </Link>
              </li>
              <li>
                <Link to="/catalog/brake" className="text-sm hover:text-autoparts">
                  Тормозная система
                </Link>
              </li>
              <li>
                <Link to="/catalog/oil" className="text-sm hover:text-autoparts">
                  Масла и жидкости
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-sm hover:text-autoparts">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm hover:text-autoparts">
                  Гарантия и возврат
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-autoparts">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm hover:text-autoparts">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-autoparts" />
                <span className="text-sm">8 (800) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-autoparts" />
                <span className="text-sm">info@автозапчасти.рф</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-autoparts" />
                <span className="text-sm">г. Москва, ул. Автомобильная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2023 АвтоЗапчасти. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-autoparts">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-autoparts">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;