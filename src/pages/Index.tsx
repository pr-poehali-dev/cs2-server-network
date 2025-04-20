
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServersSection from '@/components/ServersSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServersSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
