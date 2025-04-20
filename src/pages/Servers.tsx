
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServerCard from '@/components/ServerCard';
import { Button } from '@/components/ui/button';
import { Search, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  {
    id: 4,
    name: 'MN Project | Casual',
    map: 'de_inferno',
    players: '12/20',
    address: '185.185.185.185:27018',
    type: 'Casual',
    isPopular: false,
  },
  {
    id: 5,
    name: 'MN Project | Deathmatch',
    map: 'de_anubis',
    players: '15/20',
    address: '185.185.185.185:27019',
    type: 'Deathmatch',
    isPopular: false,
  },
  {
    id: 6,
    name: 'MN Project | Surf',
    map: 'surf_mesa',
    players: '10/20',
    address: '185.185.185.185:27020',
    type: 'Surf',
    isPopular: false,
  },
];

const Servers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredServers = servers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          server.map.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          server.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && server.type.toLowerCase() === activeTab.toLowerCase();
  });

  const serverTypes = ['all', ...new Set(servers.map(server => server.type.toLowerCase()))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Список <span className="gradient-text">серверов</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Выбирай любой из наших серверов и начинай играть прямо сейчас! 
              У нас есть серверы для любого стиля игры.
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Найти сервер..." 
                className="pl-9 bg-gaming-dark/30 border-gaming/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="cs-button-outline" onClick={() => setSearchQuery('')}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Сбросить
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="mb-8 bg-gaming-dark/30 p-1">
              {serverTypes.map((type) => (
                <TabsTrigger 
                  key={type} 
                  value={type}
                  className="capitalize data-[state=active]:bg-gaming data-[state=active]:text-white"
                >
                  {type === 'all' ? 'Все' : type}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              {filteredServers.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredServers.map((server) => (
                    <ServerCard key={server.id} server={server} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Серверы не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска или выбрать другую категорию
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 rounded-lg bg-gaming-dark/30 border border-gaming/20">
            <h3 className="text-xl font-bold mb-4">Как начать играть?</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Запустите CS2</li>
              <li>Откройте консоль (по умолчанию клавиша ~)</li>
              <li>Введите команду: connect [ip:port]</li>
              <li>Наслаждайтесь игрой на наших серверах!</li>
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              При возникновении проблем с подключением обратитесь к администрации в нашем Discord сервере.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servers;
