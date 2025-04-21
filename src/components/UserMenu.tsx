
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { 
  User, 
  LogOut, 
  Settings, 
  ShoppingCart, 
  Shield, 
  CreditCard 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';

const UserMenu = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) {
    return (
      <>
        <Button 
          variant="outline" 
          className="border-gaming/20 bg-gaming-dark/50 text-white hover:bg-gaming/20"
          onClick={() => setIsLoginModalOpen(true)}
        >
          <User className="mr-2 h-4 w-4" />
          Войти
        </Button>
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="border-gaming/20 bg-gaming-dark/50 text-white hover:bg-gaming/20 flex gap-2 items-center"
          >
            {user?.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="h-5 w-5 rounded-full"
              />
            ) : (
              <User className="h-4 w-4" />
            )}
            <span className="hidden md:inline">{user?.username}</span>
            <span className="text-gaming font-bold">
              {user?.balance} ₽
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 border-gaming/20 bg-gaming-dark/90 backdrop-blur-lg"
          align="end"
        >
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">{user?.username}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gaming/20" />

          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gaming/20"
            asChild
          >
            <Link to="/profile">
              <User className="mr-2 h-4 w-4 text-gaming" />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gaming/20"
            asChild
          >
            <Link to="/store">
              <ShoppingCart className="mr-2 h-4 w-4 text-gaming" />
              <span>Магазин</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gaming/20"
            asChild
          >
            <Link to="/balance">
              <CreditCard className="mr-2 h-4 w-4 text-gaming" />
              <span>Пополнить баланс</span>
            </Link>
          </DropdownMenuItem>

          {isAdmin && (
            <>
              <DropdownMenuSeparator className="bg-gaming/20" />
              <DropdownMenuItem 
                className="cursor-pointer hover:bg-gaming/20"
                asChild
              >
                <Link to="/admin">
                  <Shield className="mr-2 h-4 w-4 text-gaming" />
                  <span>Панель администратора</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}

          <DropdownMenuSeparator className="bg-gaming/20" />

          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gaming/20"
            asChild
          >
            <Link to="/settings">
              <Settings className="mr-2 h-4 w-4 text-gaming" />
              <span>Настройки</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gaming/20"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4 text-gaming" />
            <span>Выйти</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
