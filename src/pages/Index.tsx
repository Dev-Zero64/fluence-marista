import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/images";
import { Home, Trees, Shield } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Adress } from "@/components/Adress";

const AmenityCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <Icon className="w-12 h-12 text-gray-800 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f4f1]">
      <Hero />
      <About />
      {/* Diferenciais */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Diferenciais do Empreendimento
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AmenityCard
              icon={Home}
              title="Projeto Arquitetônico"
              description="Design contemporâneo com linhas elegantes e materiais nobres"
            />
            <AmenityCard
              icon={Trees}
              title="Áreas de Lazer"
              description="Espaços pensados para seu bem-estar e diversão"
            />
            <AmenityCard
              icon={Shield}
              title="Segurança 24h"
              description="Sistema integrado de segurança com monitoramento"
            />
          </div>
        </div>
      </section>
      {/* Galeria */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-12">
            Ambientes para Conviver e Compartilhar o seu Melhor
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>
      <Adress />
      {/* CTA Final */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Realize seu Sonho no Fluence Marista
          </h2>
          <p className="text-xl mb-8">
            Entre em contato e saiba mais sobre as condições especiais de
            lançamento
          </p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
