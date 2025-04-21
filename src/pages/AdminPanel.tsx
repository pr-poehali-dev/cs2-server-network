
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  Users, 
  ShoppingBag, 
  CreditCard, 
  PlusCircle, 
  Edit, 
  Trash, 
  AlertTriangle, 
  Clock, 
  Tag 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth, User } from '@/contexts/AuthContext';

// Тип для промо-акций в магазине
interface Promotion {
  id: string;
  title: string;
  description: string;
  discountPercentage: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
}

const AdminPanel = () => {
  const { isAdmin, user, updateUserBalance } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [balanceAmount, setBalanceAmount] = useState<number>(0);
  
  // Форма для промо-акции
  const [newPromotion, setNewPromotion] = useState<Omit<Promotion, 'id' | 'isActive'>>({
    title: '',
    description: '',
    discountPercentage: 10,
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Неделя с текущей даты
  });

  // Перенаправляем неадминов
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  // Эффект для загрузки данных (имитация API)
  useEffect(() => {
    // Загрузка пользователей (имитация)
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'tafikorgi',
        email: 'admin@mnproject.ru',
        role: 'admin',
        balance: 10000,
        avatar: 'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
        registeredAt: new Date('2023-01-01'),
        lastLogin: new Date(),
      },
      {
        id: '2',
        username: 'player1',
        email: 'player1@example.com',
        role: 'user',
        balance: 500,
        steamId: '76561198123456789',
        avatar: 'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
        registeredAt: new Date('2023-02-15'),
        lastLogin: new Date('2023-10-01'),
      },
      {
        id: '3',
        username: 'player2',
        email: 'player2@example.com',
        role: 'user',
        balance: 1200,
        steamId: '76561198987654321',
        avatar: 'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
        registeredAt: new Date('2023-03-20'),
        lastLogin: new Date('2023-09-28'),
      },
    ];
    
    setUsers(mockUsers);

    // Загрузка промо-акций (имитация)
    const mockPromotions: Promotion[] = [
      {
        id: '1',
        title: 'Летняя распродажа',
        description: 'Скидки на все привилегии в честь летних каникул',
        discountPercentage: 30,
        startDate: new Date('2023-06-01'),
        endDate: new Date('2023-08-31'),
        isActive: true,
      },
      {
        id: '2',
        title: 'Черная пятница',
        description: 'Самые большие скидки года на привилегии',
        discountPercentage: 50,
        startDate: new Date('2023-11-24'),
        endDate: new Date('2023-11-27'),
        isActive: false,
      },
    ];
    
    setPromotions(mockPromotions);
  }, []);

  // Выдача баланса пользователю
  const handleAddBalance = () => {
    if (!selectedUser) return;
    
    updateUserBalance(selectedUser.id, balanceAmount);
    
    // Обновляем локальный список пользователей
    setUsers(prevUsers => 
      prevUsers.map(u => 
        u.id === selectedUser.id 
          ? { ...u, balance: u.balance + balanceAmount } 
          : u
      )
    );
    
    toast({
      title: "Баланс обновлен",
      description: `Пользователю ${selectedUser.username} добавлено ${balanceAmount} ₽`,
    });
    
    setSelectedUser(null);
    setBalanceAmount(0);
  };

  // Создание промо-акции
  const handleCreatePromotion = () => {
    const newPromo: Promotion = {
      id: Date.now().toString(),
      ...newPromotion,
      isActive: true
    };
    
    setPromotions(prev => [...prev, newPromo]);
    
    toast({
      title: "Акция создана",
      description: `Акция "${newPromotion.title}" успешно создана`,
    });
    
    // Сброс формы
    setNewPromotion({
      title: '',
      description: '',
      discountPercentage: 10,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  };

  // Удаление промо-акции
  const handleDeletePromotion = (id: string) => {
    setPromotions(prev => prev.filter(promo => promo.id !== id));
    
    toast({
      title: "Акция удалена",
      description: "Промо-акция успешно удалена",
    });
  };

  // Переключение статуса акции
  const handleTogglePromotion = (id: string) => {
    setPromotions(prev => 
      prev.map(promo => 
        promo.id === id 
          ? { ...promo, isActive: !promo.isActive } 
          : promo
      )
    );
    
    const promo = promotions.find(p => p.id === id);
    
    toast({
      title: promo?.isActive ? "Акция приостановлена" : "Акция активирована",
      description: `Акция "${promo?.title}" ${promo?.isActive ? 'приостановлена' : 'активирована'}`,
    });
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Панель <span className="gradient-text">администратора</span></h1>
            <p className="text-muted-foreground">
              Добро пожаловать, {user?.username}. Здесь вы можете управлять пользователями, товарами и акциями.
            </p>
          </div>

          <Tabs defaultValue="users" className="space-y-4">
            <TabsList className="bg-gaming-dark/30 border border-gaming/20">
              <TabsTrigger value="users" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <Users className="mr-2 h-4 w-4" />
                Пользователи
              </TabsTrigger>
              <TabsTrigger value="store" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Магазин
              </TabsTrigger>
              <TabsTrigger value="promotions" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <Tag className="mr-2 h-4 w-4" />
                Акции
              </TabsTrigger>
            </TabsList>
            
            {/* Вкладка пользователей */}
            <TabsContent value="users" className="space-y-4">
              <Card className="border-gaming/20 bg-gaming-dark/30">
                <CardHeader>
                  <CardTitle className="text-xl">Управление пользователями</CardTitle>
                  <CardDescription>
                    Просмотр и управление учетными записями пользователей проекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gaming/20 hover:bg-gaming/5">
                        <TableHead>Пользователь</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Роль</TableHead>
                        <TableHead>Баланс</TableHead>
                        <TableHead>Регистрация</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="border-gaming/20 hover:bg-gaming/5">
                          <TableCell className="font-medium flex items-center gap-2">
                            {user.avatar && (
                              <img 
                                src={user.avatar} 
                                alt={user.username} 
                                className="h-6 w-6 rounded-full"
                              />
                            )}
                            {user.username}
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.role === 'admin' 
                                ? 'bg-gaming/20 text-gaming' 
                                : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {user.role === 'admin' ? 'Администратор' : 'Пользователь'}
                            </span>
                          </TableCell>
                          <TableCell>{user.balance} ₽</TableCell>
                          <TableCell>{formatDate(user.registeredAt)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="border-gaming/20 hover:bg-gaming/10 hover:text-gaming"
                                    onClick={() => setSelectedUser(user)}
                                  >
                                    <CreditCard className="h-4 w-4 mr-1" />
                                    Баланс
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md border-gaming/20 bg-gaming-dark/90 backdrop-blur-lg">
                                  <DialogHeader>
                                    <DialogTitle>Изменение баланса</DialogTitle>
                                    <DialogDescription>
                                      Добавить средства пользователю {selectedUser?.username}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="balance">Сумма</Label>
                                      <Input
                                        id="balance"
                                        type="number"
                                        placeholder="Введите сумму"
                                        value={balanceAmount}
                                        onChange={(e) => setBalanceAmount(Number(e.target.value))}
                                        className="bg-gaming-dark/50 border-gaming/20"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button 
                                      onClick={handleAddBalance} 
                                      className="cs-button"
                                    >
                                      Добавить средства
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-gaming/20 hover:bg-gaming/10 hover:text-gaming"
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Изменить
                              </Button>
                              
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Удалить
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Вкладка магазина */}
            <TabsContent value="store" className="space-y-4">
              <Card className="border-gaming/20 bg-gaming-dark/30">
                <CardHeader>
                  <CardTitle className="text-xl">Управление товарами</CardTitle>
                  <CardDescription>
                    Редактирование и добавление товаров в магазин проекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <AlertTriangle className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Управление товарами в разработке</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Этот раздел находится в разработке и будет доступен в ближайшем обновлении. 
                      Пожалуйста, загляните позже.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Вкладка акций */}
            <TabsContent value="promotions" className="space-y-4">
              <Card className="border-gaming/20 bg-gaming-dark/30">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-xl">Управление акциями</CardTitle>
                    <CardDescription>
                      Создание и управление промо-акциями в магазине
                    </CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="cs-button">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Создать акцию
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md border-gaming/20 bg-gaming-dark/90 backdrop-blur-lg">
                      <DialogHeader>
                        <DialogTitle>Создание новой акции</DialogTitle>
                        <DialogDescription>
                          Заполните форму для создания промо-акции
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Название акции</Label>
                          <Input
                            id="title"
                            placeholder="Например: Летняя распродажа"
                            value={newPromotion.title}
                            onChange={(e) => setNewPromotion({...newPromotion, title: e.target.value})}
                            className="bg-gaming-dark/50 border-gaming/20"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Описание</Label>
                          <Input
                            id="description"
                            placeholder="Краткое описание акции"
                            value={newPromotion.description}
                            onChange={(e) => setNewPromotion({...newPromotion, description: e.target.value})}
                            className="bg-gaming-dark/50 border-gaming/20"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="discount">Процент скидки</Label>
                          <Input
                            id="discount"
                            type="number"
                            min="1"
                            max="99"
                            placeholder="Например: 25"
                            value={newPromotion.discountPercentage}
                            onChange={(e) => setNewPromotion({...newPromotion, discountPercentage: Number(e.target.value)})}
                            className="bg-gaming-dark/50 border-gaming/20"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="startDate">Дата начала</Label>
                            <Input
                              id="startDate"
                              type="date"
                              value={newPromotion.startDate.toISOString().split('T')[0]}
                              onChange={(e) => setNewPromotion({...newPromotion, startDate: new Date(e.target.value)})}
                              className="bg-gaming-dark/50 border-gaming/20"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="endDate">Дата окончания</Label>
                            <Input
                              id="endDate"
                              type="date"
                              value={newPromotion.endDate.toISOString().split('T')[0]}
                              onChange={(e) => setNewPromotion({...newPromotion, endDate: new Date(e.target.value)})}
                              className="bg-gaming-dark/50 border-gaming/20"
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button 
                          onClick={handleCreatePromotion} 
                          className="cs-button"
                        >
                          Создать акцию
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gaming/20 hover:bg-gaming/5">
                        <TableHead>Название</TableHead>
                        <TableHead>Скидка</TableHead>
                        <TableHead>Период</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {promotions.map((promo) => (
                        <TableRow key={promo.id} className="border-gaming/20 hover:bg-gaming/5">
                          <TableCell className="font-medium">
                            <div>
                              <span className="block">{promo.title}</span>
                              <span className="text-xs text-muted-foreground">{promo.description}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                              {promo.discountPercentage}%
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{formatDate(promo.startDate)} - {formatDate(promo.endDate)}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              promo.isActive 
                                ? 'bg-green-500/20 text-green-500' 
                                : 'bg-red-500/20 text-red-500'
                            }`}>
                              {promo.isActive ? 'Активна' : 'Неактивна'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className={`border-gaming/20 ${
                                  promo.isActive 
                                    ? 'hover:bg-yellow-500/10 hover:text-yellow-500' 
                                    : 'hover:bg-green-500/10 hover:text-green-500'
                                }`}
                                onClick={() => handleTogglePromotion(promo.id)}
                              >
                                {promo.isActive ? 'Приостановить' : 'Активировать'}
                              </Button>
                              
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                                onClick={() => handleDeletePromotion(promo.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Удалить
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
