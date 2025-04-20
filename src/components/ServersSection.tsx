
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
    },
    {
      id: 2,
      name: 'MN Project | AWP',
      mode: 'AWP Only',
      map: 'awp_india',
      players: { current: 12, max: 24 },
      ip: '185.189.255.62:27076',
      isPopular: false,
    },
    {
      id: 3,
      name: 'MN Project | Retake',
      mode: 'Retake',
      map: 'de_mirage',
      players: { current: 8, max: 16 },
      ip: '185.189.255.62:27077',
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-gaming-dark/30">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Наши <span className="gradient-text">серверы</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбирай любой сервер по вкусу. Разнообразные режимы и карты не дадут тебе заскучать.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
              Смотреть все серверы
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
