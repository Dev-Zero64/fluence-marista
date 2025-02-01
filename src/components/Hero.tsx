import ContactForm from "./ContactForm";

export const Hero = () => {
  return (
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
        <h1 className="text-center text-5xl md:text-7xl font-bold mb-6 font-['Montserrat']">
          Fluence Marista
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-['Montserrat']">
          Em cada detalhe, um motivo para viver os melhores momentos
        </p>
        <ContactForm />
      </div>
    </header>
  );
};
