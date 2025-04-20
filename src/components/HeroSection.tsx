
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Фоновое изображение с оверлеем */}
      <div 
        className="absolute inset-0 bg-black opacity-60 z-0"
        style={{
          backgroundImage: `url('/placeholder.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-0" />
      
      {/* Контент */}
      <div className="container px-4 z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Добро пожаловать в <span className="gradient-text">MN Project</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Сеть игровых серверов Counter-Strike 2 с уникальными режимами и дружелюбным комьюнити
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="cs-button" size="lg">
              <Link to="/servers">
                Начать играть <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gaming hover:bg-gaming/10">
              <Link to="/store">
                Магазин привилегий
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
