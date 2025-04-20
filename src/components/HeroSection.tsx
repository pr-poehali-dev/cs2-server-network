
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section relative py-32 overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            MN Project <span className="gradient-text">| Classic</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Погрузись в атмосферу классического игрового процесса Counter-Strike 2 
            на нашем уникальном сервере с идеальным балансом и отличным пингом.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="cs-button">
              <span>Начать играть</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gaming hover:bg-gaming/10">
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span>Онлайн: 28/32</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gaming mr-2"></div>
              <span>IP: 185.189.255.62:27075</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gaming/5 clip-path-diagonal z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default HeroSection;
