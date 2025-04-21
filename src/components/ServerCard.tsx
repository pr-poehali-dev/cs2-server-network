
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

interface ServerCardProps {
  server: {
    id: number;
    name: string;
    map: string;
    players: string;
    address: string;
    type: string;
    isPopular?: boolean;
  }
}

const ServerCard = ({ server }: ServerCardProps) => {
  const { name, map, players, address, type, isPopular = false } = server;
  
  // Парсинг строки players (формат "18/20")
  const [current, max] = players.split('/').map(Number);
  
  const copyIp = () => {
    navigator.clipboard.writeText(address);
    // В реальном проекте здесь можно добавить уведомление о копировании
  };

  return (
    <div className="server-card group">
      {isPopular && (
        <Badge className="absolute right-4 top-4 bg-gaming text-white">
          Популярный
        </Badge>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
          {type}
        </Badge>
        <Badge variant="outline" className="bg-gaming/10 text-gaming-light">
          {map}
        </Badge>
      </div>
      
      <div className="mb-6 flex items-center">
        <Users className="mr-2 h-4 w-4 text-gaming" />
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gaming to-gaming-accent animate-pulse-slow"
            style={{ width: `${(current / max) * 100}%` }}
          />
        </div>
        <span className="ml-2 text-sm text-muted-foreground">
          {players}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          IP: <span className="font-mono text-white">{address}</span>
        </div>
        <Button 
          size="sm" 
          onClick={copyIp} 
          className="bg-gaming hover:bg-gaming-accent transition-colors"
        >
          Копировать IP
        </Button>
      </div>
    </div>
  );
};

export default ServerCard;
