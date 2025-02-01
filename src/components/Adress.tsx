import { MapPin } from "lucide-react";
import { Map } from "./Map";

export const Adress = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Localização Privilegiada
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 rounded-lg h-96 mb-6 overflow-hidden">
              {<Map />}
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              No coração do Setor Marista
            </h3>
            <p className="text-lg text-gray-700">
              Localizado em uma das regiões mais valorizadas da cidade, o
              Fluence Marista oferece fácil acesso a:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <span>Principais centros comerciais</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <span>Restaurantes renomados</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <span>Escolas e universidades</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <span>Áreas de lazer e parques</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
