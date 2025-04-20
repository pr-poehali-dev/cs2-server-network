
import { Link } from 'react-router-dom';
import { 
  DiscordLogo, 
  TelegramLogo, 
  VkLogo 
} from '@/components/SocialIcons';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gaming-dark/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">MN <span className="gradient-text">Project</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Лучшая сеть серверов Counter-Strike 2 с уникальными режимами и дружелюбным комьюнити.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gaming transition-colors"
              >
                <VkLogo className="h-5 w-5" />
                <span className="sr-only">ВКонтакте</span>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gaming transition-colors"
              >
                <DiscordLogo className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gaming transition-colors"
              >
                <TelegramLogo className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Навигация</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/servers" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Серверы
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Магазин
                </Link>
              </li>
              <li>
                <Link to="/stats" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Статистика
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Полезное</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/rules" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  Поддержать проект
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-gaming transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white">Начать играть</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Присоединяйтесь к нашим серверам и становитесь частью дружного комьюнити MN Project.
            </p>
            <div className="mt-6">
              <Link to="/servers" className="cs-button w-full justify-center">
                Подключиться к серверу
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MN Project. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
