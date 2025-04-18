import { ShieldCheck, Truck, CreditCard, RotateCcw } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-autoparts" />,
      title: "Гарантия качества",
      description: "Все товары сертифицированы и имеют гарантию производителя"
    },
    {
      icon: <Truck className="h-10 w-10 text-autoparts" />,
      title: "Быстрая доставка",
      description: "Доставка по всей России. В крупных городах - на следующий день"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-autoparts" />,
      title: "Удобная оплата",
      description: "Наличные, банковские карты, онлайн-платежи и другие способы"
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-autoparts" />,
      title: "Возврат и обмен",
      description: "Легкий возврат и обмен товара в случае брака или ошибки"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;