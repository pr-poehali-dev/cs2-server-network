
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">MN <span className="gradient-text">Project</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-white hover:text-gaming transition-colors">
            Главная
          </Link>
          <Link to="/servers" className="text-sm font-medium text-white hover:text-gaming transition-colors">
            Серверы
          </Link>
          <Link to="/store" className="text-sm font-medium text-white hover:text-gaming transition-colors">
            Магазин
          </Link>
          <Link to="/stats" className="text-sm font-medium text-white hover:text-gaming transition-colors">
            Статистика
          </Link>
          <Link to="/rules" className="text-sm font-medium text-white hover:text-gaming transition-colors">
            Правила
          </Link>
          <Button className="cs-button">
            Начать играть
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-gaming-dark/95 backdrop-blur-md">
            <Link 
              to="/" 
              className="px-4 py-2 text-white hover:bg-gaming/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/servers" 
              className="px-4 py-2 text-white hover:bg-gaming/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Серверы
            </Link>
            <Link 
              to="/store" 
              className="px-4 py-2 text-white hover:bg-gaming/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Магазин
            </Link>
            <Link 
              to="/stats" 
              className="px-4 py-2 text-white hover:bg-gaming/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Статистика
            </Link>
            <Link 
              to="/rules" 
              className="px-4 py-2 text-white hover:bg-gaming/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Правила
            </Link>
            <Button className="cs-button w-full">
              Начать играть
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
