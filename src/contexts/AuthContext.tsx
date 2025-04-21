
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Типы пользователей
export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  balance: number;
  steamId?: string;
  avatar?: string;
  registeredAt: Date;
  lastLogin: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserBalance: (userId: string, amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Мок данные для демонстрации
const ADMIN_USER: User = {
  id: '1',
  username: 'tafikorgi',
  email: 'admin@mnproject.ru',
  role: 'admin',
  balance: 10000,
  avatar: 'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
  registeredAt: new Date('2023-01-01'),
  lastLogin: new Date(),
};

const DEMO_USERS: User[] = [
  ADMIN_USER,
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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(DEMO_USERS);

  // Проверяем сохраненную сессию при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('mnproject_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('mnproject_user');
      }
    }
  }, []);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === 'admin';

  const login = async (username: string, password: string): Promise<boolean> => {
    // В реальном приложении здесь был бы API-запрос
    // Для демо просто проверяем фиксированные учетные данные
    if (username === 'tafikorgi' && password === '1234567890') {
      setUser(ADMIN_USER);
      localStorage.setItem('mnproject_user', JSON.stringify(ADMIN_USER));
      return true;
    }

    // Проверка других пользователей (для демо)
    const foundUser = users.find(u => u.username === username);
    if (foundUser && password === 'password') { // Упрощенная проверка для демо
      setUser(foundUser);
      localStorage.setItem('mnproject_user', JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mnproject_user');
  };

  const updateUserBalance = (userId: string, amount: number) => {
    if (!isAdmin) return;

    const updatedUsers = users.map(u => {
      if (u.id === userId) {
        return { ...u, balance: u.balance + amount };
      }
      return u;
    });

    setUsers(updatedUsers);

    // Обновляем текущего пользователя, если это он
    if (user && user.id === userId) {
      const updatedUser = { ...user, balance: user.balance + amount };
      setUser(updatedUser);
      localStorage.setItem('mnproject_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isAdmin, 
      login, 
      logout,
      updateUserBalance
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
