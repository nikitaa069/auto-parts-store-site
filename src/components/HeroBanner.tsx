import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Автозапчасти для любых марок автомобилей
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Широкий ассортимент оригинальных и неоригинальных запчастей 
            с доставкой по всей России
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-autoparts hover:bg-autoparts-dark">
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/car-selector">Подбор по автомобилю</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;