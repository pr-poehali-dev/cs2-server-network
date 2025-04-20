
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Shield, ShieldCheck, Gavel, Headphones, MessageCircle } from 'lucide-react';

const Rules = () => {
  const [activeTab, setActiveTab] = useState('general');

  const generalRules = [
    {
      id: "rule1",
      title: "Общие положения",
      content: "Соблюдайте правила проекта на всех серверах. Незнание правил не освобождает вас от ответственности. Администрация имеет право изменять правила без предварительного уведомления."
    },
    {
      id: "rule2",
      title: "Уважение к игрокам",
      content: "Запрещены оскорбления, унижения и любые формы дискриминации по отношению к другим игрокам. Относитесь ко всем с уважением и толерантностью."
    },
    {
      id: "rule3",
      title: "Читы и сторонние программы",
      content: "Запрещено использование любых читов, макросов, скриптов и программ, дающих преимущество в игре. При обнаружении - перманентный бан."
    },
    {
      id: "rule4",
      title: "Мультиаккаунты",
      content: "Запрещено создание мультиаккаунтов для обхода наказаний или получения дополнительных привилегий. Все связанные аккаунты будут заблокированы."
    },
    {
      id: "rule5",
      title: "Запрещенный контент",
      content: "Запрещено распространение порнографии, экстремистских материалов, призывов к насилию и другого контента, нарушающего законодательство РФ."
    },
  ];

  const voiceChatRules = [
    {
      id: "voice1",
      title: "Спам и громкие звуки",
      content: "Запрещен спам, крик, включение громкой музыки и звуков в голосовой чат. Уважайте слух других игроков."
    },
    {
      id: "voice2",
      title: "Музыка в микрофон",
      content: "Запрещено включать музыку в микрофон без согласия остальных игроков. Используйте специальные музыкальные боты в Discord."
    },
    {
      id: "voice3",
      title: "Чистый звук",
      content: "Рекомендуется настроить свой микрофон для чистой передачи голоса. Игроки с постоянными помехами могут быть временно отключены от голосового чата."
    },
    {
      id: "voice4",
      title: "Язык общения",
      content: "Основной язык общения на серверах - русский. Общение на других языках допускается, если это не мешает другим игрокам."
    },
  ];

  const textChatRules = [
    {
      id: "text1",
      title: "Спам в чате",
      content: "Запрещен спам одинаковыми или похожими сообщениями, символами или эмодзи. Наказание: мут от 30 минут."
    },
    {
      id: "text2",
      title: "Капс",
      content: "Запрещено писать сообщения ЗАГЛАВНЫМИ БУКВАМИ (капсом). Допускается выделение отдельных слов."
    },
    {
      id: "text3",
      title: "Реклама",
      content: "Запрещена реклама сторонних проектов, сайтов, серверов, товаров и услуг без согласования с администрацией."
    },
    {
      id: "text4",
      title: "Попрошайничество",
      content: "Запрещено попрошайничество вещей, привилегий, денег и других ценностей у игроков или администрации."
    },
    {
      id: "text5",
      title: "Обсуждение наказаний",
      content: "Запрещено публично обсуждать или оспаривать наказания администрации в общем чате. Для апелляций используйте личные сообщения администратору или форум."
    },
  ];

  const gameplayRules = [
    {
      id: "gameplay1",
      title: "Тимкилл",
      content: "Запрещено намеренное убийство игроков своей команды (тимкилл). Наказание: кик/бан в зависимости от количества нарушений."
    },
    {
      id: "gameplay2",
      title: "Блокировка союзников",
      content: "Запрещено намеренно блокировать перемещение союзников (блок). Не стойте в дверных проемах и узких проходах."
    },
    {
      id: "gameplay3",
      title: "Гриферство",
      content: "Запрещено намеренно мешать своей команде: сливать информацию противнику, саботировать выполнение целей карты и другие формы гриферства."
    },
    {
      id: "gameplay4",
      title: "AFK",
      content: "Запрещено находиться в AFK (отсутствовать) длительное время. Игроки, находящиеся в AFK более 3 минут, могут быть кикнуты с сервера."
    },
    {
      id: "gameplay5",
      title: "Эксплойты и баги",
      content: "Запрещено использование багов карт, эксплойтов игры и других нечестных приемов. О найденных багах сообщайте администрации."
    },
  ];

  const adminRules = [
    {
      id: "admin1",
      title: "Полномочия администраторов",
      content: "Администраторы имеют право применять любые меры наказания в рамках правил сервера для поддержания порядка. Решения администраторов не обсуждаются в общем чате."
    },
    {
      id: "admin2",
      title: "Апелляция наказаний",
      content: "Если вы считаете, что были наказаны несправедливо, вы можете подать апелляцию на форуме или в Discord сервере проекта. Каждая апелляция рассматривается индивидуально."
    },
    {
      id: "admin3",
      title: "Взаимодействие с администрацией",
      content: "Обращайтесь к администраторам с уважением. Оскорбление администратора или попытки давления могут привести к дополнительным наказаниям."
    },
    {
      id: "admin4",
      title: "Злоупотребление полномочиями",
      content: "Если вы заметили злоупотребление полномочиями со стороны администрации, сообщите об этом старшим администраторам или владельцу проекта с предоставлением доказательств."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Правила <span className="gradient-text">проекта</span></h1>
            <p className="text-muted-foreground max-w-3xl">
              Для комфортной игры всех участников необходимо соблюдать правила поведения на наших серверах. Пожалуйста, ознакомьтесь с ними внимательно.
            </p>
          </div>

          <Alert className="mb-8 border-gaming/20 bg-gaming-dark/30">
            <AlertTriangle className="h-5 w-5 text-gaming" />
            <AlertTitle>Важно</AlertTitle>
            <AlertDescription>
              Незнание правил не освобождает от ответственности. Регистрируясь на сервере, вы автоматически соглашаетесь с данными правилами.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="general" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="mb-8 bg-gaming-dark/30 p-1">
              <TabsTrigger value="general" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <Shield className="mr-2 h-4 w-4" />
                Общие правила
              </TabsTrigger>
              <TabsTrigger value="voice" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <Headphones className="mr-2 h-4 w-4" />
                Голосовой чат
              </TabsTrigger>
              <TabsTrigger value="text" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Текстовый чат
              </TabsTrigger>
              <TabsTrigger value="gameplay" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Геймплей
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-gaming data-[state=active]:text-white">
                <Gavel className="mr-2 h-4 w-4" />
                Администрация
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="rounded-lg border border-gaming/20 bg-gaming-dark/30 p-6">
                <Accordion type="single" collapsible className="w-full">
                  {generalRules.map((rule) => (
                    <AccordionItem key={rule.id} value={rule.id} className="border-b border-gaming/20">
                      <AccordionTrigger className="hover:text-gaming py-4 text-left">
                        {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pt-1">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="voice">
              <div className="rounded-lg border border-gaming/20 bg-gaming-dark/30 p-6">
                <Accordion type="single" collapsible className="w-full">
                  {voiceChatRules.map((rule) => (
                    <AccordionItem key={rule.id} value={rule.id} className="border-b border-gaming/20">
                      <AccordionTrigger className="hover:text-gaming py-4 text-left">
                        {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pt-1">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="text">
              <div className="rounded-lg border border-gaming/20 bg-gaming-dark/30 p-6">
                <Accordion type="single" collapsible className="w-full">
                  {textChatRules.map((rule) => (
                    <AccordionItem key={rule.id} value={rule.id} className="border-b border-gaming/20">
                      <AccordionTrigger className="hover:text-gaming py-4 text-left">
                        {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pt-1">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="gameplay">
              <div className="rounded-lg border border-gaming/20 bg-gaming-dark/30 p-6">
                <Accordion type="single" collapsible className="w-full">
                  {gameplayRules.map((rule) => (
                    <AccordionItem key={rule.id} value={rule.id} className="border-b border-gaming/20">
                      <AccordionTrigger className="hover:text-gaming py-4 text-left">
                        {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pt-1">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="admin">
              <div className="rounded-lg border border-gaming/20 bg-gaming-dark/30 p-6">
                <Accordion type="single" collapsible className="w-full">
                  {adminRules.map((rule) => (
                    <AccordionItem key={rule.id} value={rule.id} className="border-b border-gaming/20">
                      <AccordionTrigger className="hover:text-gaming py-4 text-left">
                        {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 pt-1">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 rounded-lg bg-gaming-dark/30 border border-gaming/20">
            <h3 className="text-xl font-bold mb-4">Примечания</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Администрация оставляет за собой право изменять правила без предварительного уведомления</li>
              <li>На каждом сервере могут действовать дополнительные правила, специфичные для конкретного режима игры</li>
              <li>В спорных ситуациях окончательное решение остается за старшей администрацией проекта</li>
              <li>Технические проблемы или баги серверов необходимо оперативно сообщать администрации</li>
              <li>Если вы стали свидетелем нарушения правил, сообщите об этом администратору сервера</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
