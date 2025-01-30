import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageGallery from '@/components/ImageGallery';

const Index = () => {
  const images = [
    "/lovable-uploads/22414f86-4afc-447e-9bf7-a1300618570d.png",
    "/lovable-uploads/7f7b1a87-b7d1-46b7-bbcc-4b43e88124f7.png",
    "/lovable-uploads/cd3f4702-f490-4214-b5cd-9a6746fcabc4.png",
    "/lovable-uploads/fc003b13-8585-47c8-b78e-27903a4f3b49.png",
    "/lovable-uploads/425abf81-27b3-47d3-b9bd-98390e867ffd.png",
    "/lovable-uploads/35b504b5-7b79-441c-9ea5-8f2b845a564c.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f4f1]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/35b504b5-7b79-441c-9ea5-8f2b845a564c.png"
            alt="Fluence Marista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Fluence Marista</h1>
          <p className="text-xl md:text-2xl mb-8">
            Em cada detalhe, um motivo para viver os melhores momentos
          </p>
          <Button
            size="lg"
            className="bg-[#C8A27D] hover:bg-[#b89165] text-white"
          >
            Saiba Mais
          </Button>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
          <form className="space-y-4">
            <Input placeholder="Nome" className="border-[#C8A27D]" />
            <Input placeholder="WhatsApp" type="tel" className="border-[#C8A27D]" />
            <Input placeholder="Email" type="email" className="border-[#C8A27D]" />
            <Button className="w-full bg-[#C8A27D] hover:bg-[#b89165] text-white">
              Quero Conhecer!
            </Button>
          </form>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f8f4f1] to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ambientes para Conviver e Compartilhar o seu Melhor
          </h2>
          <ImageGallery images={images} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">Rua 1128, Quadra 232, Lotes 26 a 29, Setor Marista</p>
          <p>© 2024 Fluence Marista. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;