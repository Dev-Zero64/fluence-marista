const Footer = () => {
  return (
    <footer className="bg-[#d19458] text-white py-8 px-4 font-['Montserrat']">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
        <img
          src="https://fluencemarista.cim.br/wp-content/uploads/2022/11/33915941-0-VALUS-BRANCA-1.webp"
          alt="Logo Fluence Marista"
          className="w-32 shrink-0"
        />
        <p className="font-['Montserrat'] text-sm text-center md:text-left mt-5">
          QD 232 INCORPORAÇÕES IMOBILIÁRIAS, CNPJ: 29.283.471/0001-36. Rua
          1.128, Qd. 232, Lt. 27, Setor Marista, CEP 74-175-130, Goiânia, Goiás.
          Obra com previsão de entrega para outubro de 2023. Todas as
          informações técnicas referentes ao produto podem ser encontradas no
          memorial descritivo. As imagens são ilustrativas para maior
          compreensão. R5 339.991 – Cartório de Registro Civil da Primeira
          Circunscrição de Goiânia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
