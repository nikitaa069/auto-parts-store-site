import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CarSelector = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  // Моковые данные
  const brands = ["Audi", "BMW", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes", "Nissan", "Toyota", "Volkswagen"];
  const models = {
    "": [],
    "Audi": ["A1", "A3", "A4", "A6", "Q3", "Q5", "Q7"],
    "BMW": ["1 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X5"],
    "Toyota": ["Camry", "Corolla", "RAV4", "Land Cruiser", "Highlander"],
    // ... и т.д. для других марок
  };
  const years = Array.from({ length: 2023 - 1990 + 1 }, (_, i) => (2023 - i).toString());

  // Обработчик кнопки поиска
  const handleSearch = () => {
    if (brand && model && year) {
      console.log("Поиск запчастей для:", { brand, model, year });
      // В реальном приложении здесь был бы редирект на страницу результатов
    }
  };

  return (
    <Card className="border shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Подбор запчастей по автомобилю</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите марку" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select 
              value={model} 
              onValueChange={setModel} 
              disabled={!brand}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите модель" />
              </SelectTrigger>
              <SelectContent>
                {brand && models[brand as keyof typeof models]?.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select 
              value={year} 
              onValueChange={setYear} 
              disabled={!model}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите год" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4" 
          disabled={!brand || !model || !year}
          onClick={handleSearch}
        >
          Найти запчасти
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarSelector;