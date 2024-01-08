
export default function AboutUs() {
  return (
    <section id="about" className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-700">Nossos Valores</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8">Na Eletric car, nossos valores e missão são a base da nossa jornada para uma mobilidade mais sustentável. Estamos comprometidos com:</p>
              <div className="text-lg mb-8 flex justify-between flex-col">
                <div className="mb-5">
                  <h1 className="text-3xl mb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Sustentabilidade Ambiental</h1>
                  <p className="text-gray-700">Comprometemo-nos a reduzir a pegada de carbono, oferecendo veículos elétricos de alta eficiência e incentivando práticas sustentáveis em toda a cadeia de produção.</p>
                </div>
                <div className="mb-5">
                  <h1 className="text-3xl mb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Inovação Tecnológica</h1>
                  <p className="text-gray-700">Buscamos constantemente avanços tecnológicos para proporcionar aos nossos clientes uma experiência de direção inigualável. Desde sistemas de propulsão avançados até soluções inteligentes de conectividade, estamos na vanguarda da inovação.</p>
                </div>
                <div className="mb-5">
                  <h1 className="text-3xl mb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Compromisso com a Qualidade</h1>
                  <p className="text-gray-700">A qualidade é a pedra angular da nossa marca. Cada veículo que sai da nossa linha de produção é construído com precisão e passa por rigorosos padrões de controle de qualidade.</p>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-gray-700">Nossa missão</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8">Nossa missão é impulsionar a transição global para a mobilidade elétrica, proporcionando soluções de transporte inovadoras e ecologicamente corretas. Estamos empenhados em criar um legado duradouro, contribuindo para um ambiente mais limpo e sustentável para as gerações futuras.</p>
              <p className="text-lg mb-8"> Junte-se a nós na revolução elétrica! Na Eletric Car, estamos moldando o futuro da mobilidade, uma viagem elétrica em direção a um amanhã mais verde e eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}