
import { Shield, Zap, Users, Award, Headphones, Gift } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-gaming" />,
    title: 'Защита от читеров',
    description: 'Наши сервера оборудованы современной античит системой, которая обеспечивает честную игру'
  },
  {
    icon: <Zap className="h-8 w-8 text-gaming" />,
    title: 'Высокий FPS',
    description: 'Оптимизированные настройки серверов гарантируют высокую производительность и плавный игровой процесс'
  },
  {
    icon: <Users className="h-8 w-8 text-gaming" />,
    title: 'Дружелюбное сообщество',
    description: 'У нас собрались игроки, которые ценят честную игру и взаимоуважение'
  },
  {
    icon: <Award className="h-8 w-8 text-gaming" />,
    title: 'Регулярные турниры',
    description: 'Участвуй в турнирах и мероприятиях с ценными призами и получай незабываемые эмоции'
  },
  {
    icon: <Headphones className="h-8 w-8 text-gaming" />,
    title: 'Активная поддержка',
    description: 'Наша команда администраторов всегда готова помочь решить любые вопросы или проблемы'
  },
  {
    icon: <Gift className="h-8 w-8 text-gaming" />,
    title: 'Уникальные привилегии',
    description: 'Приобретай привилегии и получай доступ к эксклюзивным возможностям на наших серверах'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gaming-dark/20">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Наши <span className="gradient-text">преимущества</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему игроки выбирают именно наши сервера? Вот несколько причин
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gaming-dark/30 rounded-lg border border-gaming/20 hover:border-gaming/50 transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gaming/10 p-2">
                {feature.icon}
              </div>
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
