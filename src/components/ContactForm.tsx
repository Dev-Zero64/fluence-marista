import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Entre em Contato
        </h2>
        <form className="space-y-4">
          <Input
            placeholder="Nome"
            className="w-full border border-[#C8A27D] bg-transparent text-white placeholder:text-white/70 rounded-md px-4 py-2"
          />
          <Input
            placeholder="WhatsApp"
            type="tel"
            className="w-full border border-[#C8A27D] bg-transparent text-white placeholder:text-white/70 rounded-md px-4 py-2"
          />
          <Input
            placeholder="Email"
            type="email"
            className="w-full border border-[#C8A27D] bg-transparent text-white placeholder:text-white/70 rounded-md px-4 py-2"
          />
          <Button className="w-full bg-[#C8A27D] hover:bg-[#b89165] text-white rounded-md">
            Quero Conhecer!
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
