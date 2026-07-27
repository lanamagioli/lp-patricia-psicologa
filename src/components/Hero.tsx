import { FadeIn, Button } from './Shared';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-beige/30 -z-10 clip-path-hero"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              Deixe de ser refém das circunstâncias <span className="text-brand-brown block mt-2">e volte a conduzir a própria vida.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-brand-olive-dark/80 mb-10 leading-relaxed font-light">
              A terapia é um espaço de reflexão, acolhimento e construção de sentido. Nesse processo você amplia seu olhar sobre quem é, o que vive e as possibilidades que ainda não conseguiu enxergar sozinho. E assim viva com mais clareza, responsabilidade e liberdade.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Button href="https://wa.me/5521997089664" target="_blank">
              QUERO INICIAR A TERAPIA
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="left" className="relative h-[600px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand-olive-dark/10 mix-blend-overlay z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200" 
            alt="Ambiente acolhedor e natural" 
            className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000"
          />
        </FadeIn>
      </div>
    </section>
  );
};
