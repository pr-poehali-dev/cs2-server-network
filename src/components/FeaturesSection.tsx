
import { Shield, Zap, Users, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-gaming" />,
      title: 'Античит',
      description: 'Наш сервер оснащен надежной системой защиты, которая гарантирует честную игру для всех участников.'
    },
    {
      icon: <Zap className="h-10 w-10 text-gaming" />,
      title: 'Стабильный пинг',
      description: 'Высокопроизводительное оборудование обеспечивает минимальные задержки и плавный игровой процесс.'
    },
    {
      icon: <Users className="h-10 w-10 text-gaming" />,
      title: 'Дружное комьюнити',
      description: 'Присоединяйся к сообществу игроков, где ценят навыки и уважают друг друга.'
    },
    {
      icon: <Award className="h-10 w-10 text-gaming" />,
      title: 'Ежедневные турниры',
      description: 'Участвуй в регулярных соревнованиях и показывай свое мастерство игры с достойными противниками.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Почему <span className="gradient-text">MN Project</span>?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создали идеальную платформу для игры в CS2, где каждый найдет
            что-то для себя. Вот несколько причин выбрать именно наш сервер:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
