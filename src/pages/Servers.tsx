
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServerCard from '@/components/ServerCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Servers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Модельные данные серверов
  const servers = [
    {
      id: 1,
      name: 'MN Project | Classic',
      mode: 'Classic',
      map: 'de_dust2',
      players: { current: 28, max: 32 },
      ip: '185.189.255.62:27075',
      isPopular: true,
      type: 'classic'
    }
  ];

  const filterServers = (servers, query) => {
    if (!query) return servers;
    return servers.filter(server => {
      return server.name.toLowerCase().includes(query.toLowerCase()) ||
             server.map.toLowerCase().includes(query.toLowerCase());
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Наш <span className="gradient-text">сервер</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Присоединяйся к нашему серверу и ощути настоящий классический геймплей CS2. Мы создали идеальную площадку для ценителей соревновательного режима.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10 bg-gaming-dark/30 border-gaming/20 focus:border-gaming"
                placeholder="Поиск по названию или карте..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="max-w-md mx-auto mb-12">
            {filterServers(servers, searchQuery).map((server) => (
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

          <div className="mt-12 p-6 rounded-lg bg-gaming-dark/30 border border-gaming/20">
            <h3 className="text-xl font-bold mb-4">Как подключиться к серверу?</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Откройте CS2 и нажмите кнопку "Play" в главном меню</li>
              <li>Выберите "Browse Community Servers"</li>
              <li>Нажмите на кнопку "Favorites"</li>
              <li>Нажмите "Add a Server" и введите IP выбранного сервера</li>
              <li>Найдите добавленный сервер в списке и нажмите "Connect"</li>
            </ol>
            <div className="mt-6">
              <Button className="cs-button">
                Начать играть
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servers;
