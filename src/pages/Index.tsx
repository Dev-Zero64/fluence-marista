import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/images";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f4f1]">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ademigo.com.br/uploads/construtoras/dinamica/fluence-marista/whatsapp-image-2020-10-08-at-15.06.23-1.jpeg"
            alt="Fluence Marista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fluence Marista
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Em cada detalhe, um motivo para viver os melhores momentos
          </p>
          <ContactForm />
        </div>
      </header>
      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f8f4f1] to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ambientes para Conviver e Compartilhar o seu Melhor
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
