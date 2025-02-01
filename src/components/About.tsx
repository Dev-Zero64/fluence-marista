const Feature = ({ title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-2 h-2 mt-2 bg-gray-800 rounded-full" />
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Um Novo Conceito de Moradia
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              O Fluence Marista é mais que um endereço privilegiado, é uma nova
              forma de viver. Com apartamentos pensados para proporcionar
              conforto e sofisticação, cada espaço foi projetado para criar
              memórias inesquecíveis.
            </p>
            <div className="space-y-6">
              <Feature
                title="Apartamentos de 2 e 3 dormitórios"
                description="Plantas flexíveis que se adaptam ao seu estilo de vida"
              />
              <Feature
                title="Acabamento Premium"
                description="Materiais selecionados e acabamentos de alto padrão"
              />
              <Feature
                title="Localização Estratégica"
                description="Próximo às principais facilidades do bairro Marista"
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/interior.webp"
              alt="Interior Fluence Marista"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
