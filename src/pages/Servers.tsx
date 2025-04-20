
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServerCard from '@/components/ServerCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    },
    {
      id: 2,
      name: 'MN Project | AWP',
      mode: 'AWP Only',
      map: 'awp_india',
      players: { current: 12, max: 24 },
      ip: '185.189.255.62:27076',
      isPopular: false,
      type: 'awp'
    },
    {
      id: 3,
      name: 'MN Project | Retake',
      mode: 'Retake',
      map: 'de_mirage',
      players: { current: 8, max: 16 },
      ip: '185.189.255.62:27077',
      isPopular: false,
      type: 'retake'
    },
    {
      id: 4,
      name: 'MN Project | Surf',
      mode: 'Surf',
      map: 'surf_utopia',
      players: { current: 14, max: 24 },
      ip: '185.189.255.62:27078',
      isPopular: false,
      type: 'surf'
    },
    {
      id: 5,
      name: 'MN Project | Classic #2',
      mode: 'Classic',
      map: 'de_mirage',
      players: { current: 22, max: 32 },
      ip: '185.189.255.62:27079',
      isPopular: false,
      type: 'classic'
    },
    {
      id: 6,
      name: 'MN Project | Zombie',
      mode: 'Zombie Escape',
      map: 'ze_FFVII_Mako_Reactor',
      players: { current: 18, max: 32 },
      ip: '185.189.255.62:27080',
      isPopular: true,
      type: 'zombie'
    },
  ];

  const filterServers = (servers, query, type = 'all') => {
    return servers.filter(server => {
      const matchesQuery = server.name.toLowerCase().includes(query.toLowerCase()) ||
                          server.map.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === 'all' || server.type === type;
      return matchesQuery && matchesType;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Наши <span className="gradient-text">серверы</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Выбирай любой сервер по вкусу. Разнообразные режимы и карты не дадут тебе заскучать. Присоединяйся к игре прямо сейчас!
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

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8 bg-gaming-dark/30 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Все серверы
              </TabsTrigger>
              <TabsTrigger value="classic" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Classic
              </TabsTrigger>
              <TabsTrigger value="awp" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                AWP
              </TabsTrigger>
              <TabsTrigger value="retake" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Retake
              </TabsTrigger>
              <TabsTrigger value="surf" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Surf
              </TabsTrigger>
              <TabsTrigger value="zombie" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Zombie
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </TabsContent>

            <TabsContent value="classic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServers(servers, searchQuery, 'classic').map((server) => (
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
            </TabsContent>

            <TabsContent value="awp">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServers(servers, searchQuery, 'awp').map((server) => (
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
            </TabsContent>
            
            <TabsContent value="retake">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServers(servers, searchQuery, 'retake').map((server) => (
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
            </TabsContent>
            
            <TabsContent value="surf">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServers(servers, searchQuery, 'surf').map((server) => (
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
            </TabsContent>
            
            <TabsContent value="zombie">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServers(servers, searchQuery, 'zombie').map((server) => (
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
            </TabsContent>
          </Tabs>

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
