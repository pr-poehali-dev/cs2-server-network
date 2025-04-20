
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20 blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Добро пожаловать в{' '} 
            <span className="gradient-text">MN Project</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Лучшая сеть игровых серверов для Counter-Strike 2. 
            Присоединяйся к нам и испытай новый уровень игрового опыта!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="cs-button text-lg py-6 px-8">
              Начать играть
            </Button>
            <Link to="/store">
              <Button variant="outline" className="cs-button-outline text-lg py-6 px-8">
                Магазин привилегий
              </Button>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex justify-center">
              <a 
                href="#servers" 
                className="animate-bounce flex flex-col items-center text-muted-foreground hover:text-white transition-colors"
              >
                <span className="mb-2">Наши серверы</span>
                <ChevronDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
