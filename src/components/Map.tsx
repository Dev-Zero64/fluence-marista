import React from "react";

interface MapProps {
  src: string; // URL do iframe do Google Maps
  width?: string; // Largura do mapa (opcional)
  height?: string; // Altura do mapa (opcional)
  className?: string; // Classe CSS adicional para estilização
  ariaLabel?: string; // Descrição acessível para leitores de tela
}

export const Map = ({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5013476626323!2d-49.26605932396059!3d-16.70181844595508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef100345e0a09%3A0xc90fcb63eed3a7c5!2sFluence%20Marista%20Space%20Design!5e0!3m2!1spt-BR!2sbr!4v1738385719891!5m2!1spt-BR!2sbr ",
  width = "100%", // Valor padrão: 100% para responsividade
  height = "450px", // Valor padrão: 450px
  className = "", // Classe padrão vazia
  ariaLabel = "Mapa interativo", // Descrição padrão
}: MapProps) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      aria-label={ariaLabel}
    >
      <iframe
        src={src}
        title="Google Maps"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="false"
      ></iframe>
    </div>
  );
};
