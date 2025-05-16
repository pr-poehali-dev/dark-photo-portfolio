
import Hero from "../components/home/Hero";
import Navigation from "../components/home/Navigation";
import Contacts from "../components/home/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <Hero />
      <Contacts />
      {/* Здесь будут другие секции */}
    </div>
  );
};

export default Index;
