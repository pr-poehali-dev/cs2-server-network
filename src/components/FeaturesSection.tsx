
import { Shield, Users, Gift, Activity } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-gaming" />,
    title: 'Защита от читеров',
    description: 'Мы используем современные системы анти-чит для обеспечения честной игры на всех наших серверах.'
  },
  {
    icon: <Users className="h-8 w-8 text-gaming" />,
    title: 'Дружелюбное комьюнити',
    description: 'Наши администраторы и игроки создают приятную атмосферу для всех любителей CS2.'
  },
  {
    icon: <Gift className="h-8 w-8 text-gaming" />,
    title: 'Регулярные акции',
    description: 'Участвуйте в еженедельных розыгрышах и получайте ценные призы и привилегии.'
  },
  {
    icon: <Activity className="h-8 w-8 text-gaming" />,
    title: 'Низкий пинг',
    description: 'Наши серверы обеспечивают стабильное соединение и минимальную задержку для комфортной игры.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Почему <span className="gradient-text">MN Project</span>?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создаем лучшие условия для игры и развития нашего комьюнити
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl border border-gaming/20 hover:border-gaming/40 transition-colors"
            >
              <div className="p-2 rounded-lg bg-gaming/10 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
