import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CarSelector from "@/components/CarSelector";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import BenefitsSection from "@/components/BenefitsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Моковые данные для категорий
  const categories = [
    { id: "engine", name: "Двигатель и комплектующие", image: "/placeholder.svg", productCount: 1250 },
    { id: "suspension", name: "Подвеска и рулевое", image: "/placeholder.svg", productCount: 860 },
    { id: "electronics", name: "Автоэлектроника", image: "/placeholder.svg", productCount: 540 },
    { id: "brake", name: "Тормозная система", image: "/placeholder.svg", productCount: 480 },
    { id: "body", name: "Кузовные детали", image: "/placeholder.svg", productCount: 720 },
    { id: "oil", name: "Масла и жидкости", image: "/placeholder.svg", productCount: 350 },
  ];

  // Моковые данные для популярных товаров
  const popularProducts = [
    { id: "p1", name: "Масляный фильтр MAHLE OX 339/2D", price: 490, oldPrice: 590, image: "/placeholder.svg", brand: "MAHLE", code: "OX 339/2D", inStock: true },
    { id: "p2", name: "Комплект тормозных колодок FERODO FDB1789", price: 2300, image: "/placeholder.svg", brand: "FERODO", code: "FDB1789", inStock: true },
    { id: "p3", name: "Амортизатор подвески KYB 343307", price: 3900, oldPrice: 4500, image: "/placeholder.svg", brand: "KYB", code: "343307", inStock: true },
    { id: "p4", name: "Воздушный фильтр MANN-FILTER C 30 193", price: 850, image: "/placeholder.svg", brand: "MANN-FILTER", code: "C 30 193", inStock: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        
        {/* Секция с подбором по авто */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <CarSelector />
          </div>
        </section>
        
        {/* Популярные категории */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Популярные категории</h2>
              <Button variant="outline" asChild>
                <Link to="/catalog">Все категории</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} {...category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <BenefitsSection />
        
        {/* Популярные товары */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Популярные товары</h2>
              <Button variant="outline" asChild>
                <Link to="/catalog/popular">Смотреть все</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Баннер с брендами */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Более 500 брендов автозапчастей</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Здесь будут логотипы брендов */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-12 w-24 bg-white shadow-sm rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Логотип бренда" className="h-8" />
                </div>
              ))}
            </div>
            <Button variant="default" className="mt-8" asChild>
              <Link to="/brands">Все бренды</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;