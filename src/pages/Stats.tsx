
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowUpDown, Star, Trophy, Target, Clock, Skull } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Stats = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState('rank');
  const [sortDirection, setSortDirection] = useState('asc');
  const [isSearching, setIsSearching] = useState(false);

  // Модельные данные игроков
  const players = [
    {
      id: 1,
      name: 'ProKiller',
      steamId: 'STEAM_0:1:12345678',
      rank: 1,
      kills: 5423,
      deaths: 1245,
      kd: 4.36,
      headshots: 3256,
      hsPercentage: 60,
      playtime: 342,
      server: 'Classic',
      isVip: true
    },
    {
      id: 2,
      name: 'Sniper_Elite',
      steamId: 'STEAM_0:0:23456789',
      rank: 2,
      kills: 4892,
      deaths: 1532,
      kd: 3.19,
      headshots: 2951,
      hsPercentage: 60,
      playtime: 298,
      server: 'AWP',
      isVip: true
    },
    {
      id: 3,
      name: 'FragMaster',
      steamId: 'STEAM_0:1:34567890',
      rank: 3,
      kills: 4256,
      deaths: 1873,
      kd: 2.27,
      headshots: 2543,
      hsPercentage: 60,
      playtime: 276,
      server: 'Classic',
      isVip: false
    },
    {
      id: 4,
      name: 'HeadshotKing',
      steamId: 'STEAM_0:0:45678901',
      rank: 4,
      kills: 3987,
      deaths: 1654,
      kd: 2.41,
      headshots: 2792,
      hsPercentage: 70,
      playtime: 265,
      server: 'Classic',
      isVip: false
    },
    {
      id: 5,
      name: 'TacticalPlayer',
      steamId: 'STEAM_0:1:56789012',
      rank: 5,
      kills: 3752,
      deaths: 1489,
      kd: 2.52,
      headshots: 1876,
      hsPercentage: 50,
      playtime: 254,
      server: 'Retake',
      isVip: true
    },
  ];

  const sortedPlayers = [...players].sort((a, b) => {
    const factor = sortDirection === 'asc' ? 1 : -1;
    return a[sortColumn] > b[sortColumn] ? factor : -factor;
  });

  const filteredPlayers = sortedPlayers.filter(player => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    player.steamId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    // В реальном проекте здесь был бы запрос на сервер
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  const topStats = [
    {
      title: 'Убийства',
      value: '5,423',
      player: 'ProKiller',
      icon: <Skull className="h-5 w-5 text-gaming" />,
    },
    {
      title: 'K/D соотношение',
      value: '4.36',
      player: 'ProKiller',
      icon: <Target className="h-5 w-5 text-gaming" />,
    },
    {
      title: 'Точность',
      value: '70%',
      player: 'HeadshotKing',
      icon: <Star className="h-5 w-5 text-gaming" />,
    },
    {
      title: 'Время в игре',
      value: '342ч',
      player: 'ProKiller',
      icon: <Clock className="h-5 w-5 text-gaming" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Статистика <span className="gradient-text">игроков</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Отслеживайте свои достижения и сравнивайте их с другими игроками. Станьте лучшим на наших серверах!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {topStats.map((stat, index) => (
              <Card key={index} className="border-gaming/20 bg-gaming-dark/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    {stat.icon}
                    <span className="ml-2">{stat.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <CardDescription>
                    Лидер: {stat.player}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <form onSubmit={handleSearch}>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    className="pl-10 bg-gaming-dark/30 border-gaming/20 focus:border-gaming"
                    placeholder="Поиск по нику или Steam ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="cs-button" disabled={isSearching}>
                  {isSearching ? "Поиск..." : "Найти"}
                </Button>
              </div>
            </form>
          </div>

          <Tabs defaultValue="classic" className="mb-12">
            <TabsList className="mb-8 bg-gaming-dark/30 p-1">
              <TabsTrigger value="classic" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Classic
              </TabsTrigger>
              <TabsTrigger value="awp" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                AWP
              </TabsTrigger>
              <TabsTrigger value="retake" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Retake
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Все серверы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="rounded-md border border-gaming/20 overflow-hidden">
                <Table>
                  <TableCaption>Статистика лучших игроков на всех серверах</TableCaption>
                  <TableHeader className="bg-gaming-dark/30">
                    <TableRow>
                      <TableHead className="w-16" onClick={() => handleSort('rank')}>
                        <div className="flex items-center cursor-pointer">
                          <Trophy className="h-4 w-4 mr-1" />
                          <span>Ранг</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead onClick={() => handleSort('kills')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Убийства</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('deaths')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Смерти</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('kd')}>
                        <div className="flex items-center cursor-pointer">
                          <span>K/D</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('hsPercentage')}>
                        <div className="flex items-center cursor-pointer">
                          <span>HS %</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('playtime')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Время</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead>Сервер</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlayers.map((player) => (
                      <TableRow key={player.id} className="hover:bg-gaming/5">
                        <TableCell className="font-medium">#{player.rank}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <span className="mr-2">{player.name}</span>
                            {player.isVip && (
                              <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
                                VIP
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{player.kills.toLocaleString()}</TableCell>
                        <TableCell>{player.deaths.toLocaleString()}</TableCell>
                        <TableCell>{player.kd.toFixed(2)}</TableCell>
                        <TableCell>{player.hsPercentage}%</TableCell>
                        <TableCell>{player.playtime}ч</TableCell>
                        <TableCell>{player.server}</TableCell>
                      </TableRow>
                    ))}
                    {filteredPlayers.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                          Игроки не найдены
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="classic">
              <div className="rounded-md border border-gaming/20 overflow-hidden">
                <Table>
                  <TableCaption>Статистика лучших игроков на сервере Classic</TableCaption>
                  <TableHeader className="bg-gaming-dark/30">
                    <TableRow>
                      <TableHead className="w-16" onClick={() => handleSort('rank')}>
                        <div className="flex items-center cursor-pointer">
                          <Trophy className="h-4 w-4 mr-1" />
                          <span>Ранг</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead onClick={() => handleSort('kills')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Убийства</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('deaths')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Смерти</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('kd')}>
                        <div className="flex items-center cursor-pointer">
                          <span>K/D</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('hsPercentage')}>
                        <div className="flex items-center cursor-pointer">
                          <span>HS %</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('playtime')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Время</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlayers.filter(p => p.server === 'Classic').map((player) => (
                      <TableRow key={player.id} className="hover:bg-gaming/5">
                        <TableCell className="font-medium">#{player.rank}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <span className="mr-2">{player.name}</span>
                            {player.isVip && (
                              <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
                                VIP
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{player.kills.toLocaleString()}</TableCell>
                        <TableCell>{player.deaths.toLocaleString()}</TableCell>
                        <TableCell>{player.kd.toFixed(2)}</TableCell>
                        <TableCell>{player.hsPercentage}%</TableCell>
                        <TableCell>{player.playtime}ч</TableCell>
                      </TableRow>
                    ))}
                    {filteredPlayers.filter(p => p.server === 'Classic').length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          Игроки не найдены
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="awp">
              <div className="rounded-md border border-gaming/20 overflow-hidden">
                <Table>
                  <TableCaption>Статистика лучших игроков на сервере AWP</TableCaption>
                  <TableHeader className="bg-gaming-dark/30">
                    <TableRow>
                      <TableHead className="w-16" onClick={() => handleSort('rank')}>
                        <div className="flex items-center cursor-pointer">
                          <Trophy className="h-4 w-4 mr-1" />
                          <span>Ранг</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead onClick={() => handleSort('kills')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Убийства</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('deaths')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Смерти</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('kd')}>
                        <div className="flex items-center cursor-pointer">
                          <span>K/D</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('hsPercentage')}>
                        <div className="flex items-center cursor-pointer">
                          <span>HS %</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('playtime')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Время</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlayers.filter(p => p.server === 'AWP').map((player) => (
                      <TableRow key={player.id} className="hover:bg-gaming/5">
                        <TableCell className="font-medium">#{player.rank}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <span className="mr-2">{player.name}</span>
                            {player.isVip && (
                              <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
                                VIP
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{player.kills.toLocaleString()}</TableCell>
                        <TableCell>{player.deaths.toLocaleString()}</TableCell>
                        <TableCell>{player.kd.toFixed(2)}</TableCell>
                        <TableCell>{player.hsPercentage}%</TableCell>
                        <TableCell>{player.playtime}ч</TableCell>
                      </TableRow>
                    ))}
                    {filteredPlayers.filter(p => p.server === 'AWP').length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          Игроки не найдены
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="retake">
              <div className="rounded-md border border-gaming/20 overflow-hidden">
                <Table>
                  <TableCaption>Статистика лучших игроков на сервере Retake</TableCaption>
                  <TableHeader className="bg-gaming-dark/30">
                    <TableRow>
                      <TableHead className="w-16" onClick={() => handleSort('rank')}>
                        <div className="flex items-center cursor-pointer">
                          <Trophy className="h-4 w-4 mr-1" />
                          <span>Ранг</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead onClick={() => handleSort('kills')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Убийства</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('deaths')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Смерти</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('kd')}>
                        <div className="flex items-center cursor-pointer">
                          <span>K/D</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('hsPercentage')}>
                        <div className="flex items-center cursor-pointer">
                          <span>HS %</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                      <TableHead onClick={() => handleSort('playtime')}>
                        <div className="flex items-center cursor-pointer">
                          <span>Время</span>
                          <ArrowUpDown className="h-3 w-3 ml-1" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlayers.filter(p => p.server === 'Retake').map((player) => (
                      <TableRow key={player.id} className="hover:bg-gaming/5">
                        <TableCell className="font-medium">#{player.rank}</TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <span className="mr-2">{player.name}</span>
                            {player.isVip && (
                              <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
                                VIP
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{player.kills.toLocaleString()}</TableCell>
                        <TableCell>{player.deaths.toLocaleString()}</TableCell>
                        <TableCell>{player.kd.toFixed(2)}</TableCell>
                        <TableCell>{player.hsPercentage}%</TableCell>
                        <TableCell>{player.playtime}ч</TableCell>
                      </TableRow>
                    ))}
                    {filteredPlayers.filter(p => p.server === 'Retake').length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          Игроки не найдены
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 rounded-lg bg-gaming-dark/30 border border-gaming/20">
            <h3 className="text-xl font-bold mb-4">Как просмотреть подробную статистику?</h3>
            <p className="text-muted-foreground mb-4">
              Для просмотра более подробной статистики и истории игр, выполните следующие шаги:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Найдите себя в таблице рейтинга, используя поиск по нику или Steam ID</li>
              <li>Нажмите на свой ник в таблице для просмотра детальной статистики</li>
              <li>Настройте временной период для анализа своего прогресса</li>
              <li>Поделитесь своими достижениями с друзьями или в нашем Discord сервере</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stats;
