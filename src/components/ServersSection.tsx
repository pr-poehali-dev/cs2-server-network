
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServerCard from '@/components/ServerCard';

const ServersSection = () => {
  // Это примерные данные, в реальном проекте они будут загружаться с сервера
  const servers = [
    {
      id: 1,
      name: 'MN Project | Classic',
      mode: 'Classic',
      map: 'de_dust2',
      players: { current: 28, max: 32 },
      ip: '185.189.255.62:27075',
      isPopular: true,
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark/30">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Наш <span className="gradient-text">сервер</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Присоединяйся к нашему серверу и ощути настоящий классический геймплей CS2.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          {servers.map((server) => (
            <ServerCard
              key={server.id}
              name={server.name}
              mode={server.mode}
              map={server.map}
              players={server.players}
              ip={server.ip}
              isPopular={server.isPopular}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-gaming hover:bg-gaming/10">
            <Link to="/servers">
              Подробнее о сервере
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
