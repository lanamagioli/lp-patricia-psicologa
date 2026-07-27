import { useState, useEffect } from 'react';
import { FadeIn } from './Shared';
import { motion, AnimatePresence } from 'motion/react';

export const About = () => {
  const testimonials = [
    {
      text: "Achei que precisava encontrar todas as respostas antes de seguir em frente. Na terapia, percebi que o primeiro passo era entender melhor quem eu era e como eu estava vivendo. Hoje continuo enfrentando desafios, mas faço escolhas com muito mais clareza.",
      author: "M., 37 anos"
    },
    {
      text: "A Patrícia não apenas me escutava. Ela fazia perguntas que ampliavam minha visão sobre situações que eu repetia há anos sem perceber. Foi um processo desafiador, mas transformador.",
      author: "R., 42 anos"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="sobre" className="py-24 md:py-32 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <FadeIn direction="right" className="lg:col-span-5 relative flex flex-col items-center text-center">
            <span className="text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-6 block">Sobre Mim</span>
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-brand-brown/10 mix-blend-overlay z-10"></div>
              {/* Using the requested filename. Added fallback to unsplash just for resilient preview if file is missing */}
              <img 
                src="/patricia.jpeg" 
                alt="Patrícia Gavazza" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-pink-light/20 rounded-full blur-2xl -z-10"></div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl mb-8">Quem caminha ao seu lado: Patrícia Gavazza</h2>
              <div className="space-y-6 text-brand-olive-dark/80 leading-relaxed text-lg font-light">
                <p>
                  Sou Psicóloga pela UFRJ, Pós-graduada em Logoterapia e Análise Existencial, e especialista em atendimento clínico.
                </p>
                <p>
                  Acredito que o que nos torna humanos é a capacidade de refletir e buscar nosso ideal de ser. Empresto minha escuta e conhecimento técnico para te ajudar a entender como você funciona, sofre e vive.
                </p>
                <p className="font-medium text-brand-brown">
                  A verdade é sua; meu papel é te ajudar a escolher caminhos mais saudáveis e com mais sentidos para se viver.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto text-center relative px-12">
          <div className="absolute top-0 left-0 text-brand-lavender/40 text-8xl font-serif rotate-180 transform -translate-y-4">"</div>
          <div className="absolute bottom-0 right-0 text-brand-lavender/40 text-8xl font-serif transform translate-y-8">"</div>
          
          <div className="min-h-[200px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl font-serif italic text-brand-brown mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-sm font-semibold tracking-widest uppercase text-brand-olive-dark/60">
                  {testimonials[currentTestimonial].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-brand-pink-dark w-8' : 'bg-brand-lavender'}`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export const InstagramFeed = () => {
  useEffect(() => {
    // Carrega o script do Instagram nativo caso não exista
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  const embedStyle = {
    background: '#FFF',
    border: '0',
    borderRadius: '8px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '1px',
    maxWidth: '540px',
    minWidth: '326px',
    padding: '0',
    width: 'calc(100% - 2px)'
  };

  const instagramPosts = [
    "https://www.instagram.com/p/DUWmJ-yjWxX/?igsh=MWZpaHJzOWNibG5oZw==", // Placeholder post 1
    "https://www.instagram.com/reel/DU_twgCkZlb/?igsh=MWh5djE3bDY0c2hhbA==", // Placeholder post 2
    "https://www.instagram.com/p/DUmAtTEDStx/?igsh=MWYwMzJ1emRmaWhjaw=="  // Placeholder post 3
  ];

  return (
    <section id="reflexoes" className="py-24 md:py-32 bg-brand-beige border-t border-brand-lavender/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Reflexões e Diálogos</h2>
          <p className="text-brand-olive-dark/70 text-lg">Acompanhe pequenos recortes da rotina clínica e pensamentos.</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          {instagramPosts.map((url, index) => (
            <FadeIn key={index} delay={index * 0.15} className="w-full flex justify-center overflow-hidden">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={url} 
                data-instgrm-version="14" 
                style={embedStyle}
              >
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
