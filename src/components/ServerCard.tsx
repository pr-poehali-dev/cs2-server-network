
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

interface ServerCardProps {
  name: string;
  mode: string;
  map: string;
  players: {
    current: number;
    max: number;
  };
  ip: string;
  isPopular?: boolean;
}

const ServerCard = ({ name, mode, map, players, ip, isPopular = false }: ServerCardProps) => {
  const copyIp = () => {
    navigator.clipboard.writeText(ip);
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
          {mode}
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
            style={{ width: `${(players.current / players.max) * 100}%` }}
          />
        </div>
        <span className="ml-2 text-sm text-muted-foreground">
          {players.current}/{players.max}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          IP: <span className="font-mono text-white">{ip}</span>
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
