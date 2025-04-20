
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServerCard from './ServerCard';
import { ChevronRight } from 'lucide-react';

const servers = [
  {
    id: 1,
    name: 'MN Project | Classic',
    map: 'de_dust2',
    players: '18/20',
    address: '185.185.185.185:27015',
    type: 'Classic',
    isPopular: true,
  },
  {
    id: 2,
    name: 'MN Project | AWP',
    map: 'awp_india',
    players: '16/20',
    address: '185.185.185.185:27016',
    type: 'AWP',
    isPopular: false,
  },
  {
    id: 3,
    name: 'MN Project | Retake',
    map: 'de_mirage',
    players: '14/20',
    address: '185.185.185.185:27017',
    type: 'Retake',
    isPopular: false,
  },
];

const ServersSection = () => {
  return (
    <section className="py-16" id="servers">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Наши <span className="gradient-text">серверы</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбирай любой из наших серверов и начинай играть прямо сейчас! 
            Каждый сервер имеет уникальный геймплей и особенности.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {servers.map((server) => (
            <ServerCard key={server.id} server={server} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/servers">
            <Button className="cs-button-outline group">
              Все серверы
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
