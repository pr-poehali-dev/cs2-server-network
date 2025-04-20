
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Shield, Zap, Star, Crown } from 'lucide-react';

const Store = () => {
  const [activeTab, setActiveTab] = useState('privileges');

  const privileges = [
    {
      id: 1,
      name: 'VIP',
      price: 199,
      oldPrice: 299,
      description: 'Базовый набор привилегий для комфортной игры',
      features: [
        'Префикс [VIP] в чате',
        'Доступ к VIP командам',
        'Бонус +10% к опыту',
        'Сохранение оружия после смены команды',
        'Расширенный выбор моделей',
      ],
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      isPopular: false,
      color: 'from-yellow-500 to-yellow-300',
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 399,
      oldPrice: 599,
      description: 'Расширенный набор привилегий для требовательных игроков',
      features: [
        'Префикс [PREMIUM] в чате',
        'Все возможности VIP',
        'Бонус +25% к опыту',
        'Иммунитет к блокировке голосования',
        'Расширенный арсенал оружия',
        'Доступ к специальным моделям',
        'Возможность использовать цветной чат',
      ],
      icon: <Crown className="h-6 w-6 text-amber-500" />,
      isPopular: true,
      color: 'from-amber-600 to-amber-300',
    },
    {
      id: 3,
      name: 'ADMIN',
      price: 699,
      oldPrice: 999,
      description: 'Полный набор привилегий с доступом к админ-функциям',
      features: [
        'Префикс [ADMIN] в чате',
        'Все возможности PREMIUM',
        'Админ-команды (kick, ban, mute и т.д.)',
        'Невосприимчивость к урону от союзников',
        'Просмотр чата команды противника',
        'Телепортация по карте',
        'Бонус +50% к опыту',
        'Приоритетное место на сервере',
      ],
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      isPopular: false,
      color: 'from-purple-600 to-purple-300',
    }
  ];

  const cases = [
    {
      id: 1,
      name: 'Стандартный кейс',
      price: 99,
      description: 'Базовый набор скинов',
      items: '30 скинов',
      rarity: 'Обычный',
      image: '/placeholder.svg',
      color: 'from-blue-500 to-blue-300',
    },
    {
      id: 2,
      name: 'Премиум кейс',
      price: 249,
      description: 'Премиальные скины с высоким шансом редких предметов',
      items: '25 скинов',
      rarity: 'Редкий',
      image: '/placeholder.svg',
      color: 'from-purple-500 to-purple-300',
    },
    {
      id: 3,
      name: 'Элитный кейс',
      price: 499,
      description: 'Самые редкие и ценные скины в игре',
      items: '20 скинов',
      rarity: 'Легендарный',
      image: '/placeholder.svg',
      color: 'from-amber-500 to-amber-300',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Игровой <span className="gradient-text">магазин</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Приобретай привилегии, открывай кейсы и получай уникальные предметы для игры на наших серверах.
            </p>
          </div>

          <Tabs defaultValue="privileges" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="mb-8 bg-gaming-dark/30 p-1">
              <TabsTrigger value="privileges" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Привилегии
              </TabsTrigger>
              <TabsTrigger value="cases" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                Кейсы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="privileges">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {privileges.map((privilege) => (
                  <Card key={privilege.id} className={`relative overflow-hidden border-gaming/20 bg-gaming-dark/30 transition-all hover:shadow-md hover:shadow-gaming/20 ${privilege.isPopular ? 'border-gaming/50' : ''}`}>
                    {privilege.isPopular && (
                      <Badge className="absolute right-4 top-4 bg-gaming text-white">
                        Популярный выбор
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br bg-opacity-20 backdrop-blur-sm border border-white/10 shadow-inner shadow-white/5 p-2 mx-auto">
                        {privilege.icon}
                      </div>
                      <CardTitle className="text-center text-xl font-bold">{privilege.name}</CardTitle>
                      <CardDescription className="text-center">{privilege.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {privilege.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-gaming/20 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-gaming"></div>
                            </div>
                            <p className="text-sm text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col space-y-4">
                      <div className="flex items-center justify-center">
                        {privilege.oldPrice && (
                          <span className="text-muted-foreground line-through mr-2">
                            {privilege.oldPrice} ₽
                          </span>
                        )}
                        <span className="text-2xl font-bold text-white">
                          {privilege.price} ₽
                        </span>
                      </div>
                      <Button className="w-full cs-button">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cases">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((caseItem) => (
                  <Card key={caseItem.id} className="relative overflow-hidden border-gaming/20 bg-gaming-dark/30 transition-all hover:shadow-md hover:shadow-gaming/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-10 blur-xl pointer-events-none`}></div>
                    <CardHeader className="pb-0">
                      <div className="flex justify-center">
                        <img 
                          src={caseItem.image} 
                          alt={caseItem.name} 
                          className="h-40 w-40 object-contain mb-4"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl font-bold text-center mb-1">{caseItem.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">{caseItem.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-gaming/10 rounded p-2 flex flex-col items-center">
                          <span className="text-xs text-muted-foreground">Предметы</span>
                          <span className="text-sm font-semibold">{caseItem.items}</span>
                        </div>
                        <div className="bg-gaming/10 rounded p-2 flex flex-col items-center">
                          <span className="text-xs text-muted-foreground">Редкость</span>
                          <span className="text-sm font-semibold">{caseItem.rarity}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full flex flex-col space-y-2">
                        <span className="text-center font-bold text-xl">{caseItem.price} ₽</span>
                        <Button className="w-full cs-button">
                          <Zap className="mr-2 h-4 w-4" />
                          Открыть кейс
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 rounded-lg bg-gaming-dark/30 border border-gaming/20">
            <h3 className="text-xl font-bold mb-4">Как активировать привилегии?</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>После оплаты вы получите уникальный код активации</li>
              <li>Присоединитесь к любому нашему серверу</li>
              <li>Напишите в чате команду: !activate [ваш_код]</li>
              <li>Наслаждайтесь вашими новыми привилегиями!</li>
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              По любым вопросам обращайтесь к администрации в нашем Discord сервере.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
