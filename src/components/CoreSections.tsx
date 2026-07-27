import React, { useState, useEffect } from 'react';
import { FadeIn, Button } from './Shared';
import { motion, useInView as motionUseInView } from 'motion/react';

export const PainSolution = () => {
  const blocks = [
    {
      title: "O Conflito",
      content: "O sentido é o que nos move, o que nos faz levantar todos os dias. Porém, diante de conflitos relacionais, luto, ansiedade ou grandes decisões, é comum perder a direção e se sentir como um barco a deriva.",
      bg: "bg-brand-offwhite",
      textColor: "text-brand-brown",
      numberColor: "text-brand-pink-dark"
    },
    {
      title: "A Agitação",
      content: "Quando você foca apenas na dor, a visão fica limitada. Tentar dar conta de tudo por conta própria, lidando com crises existenciais ou transições profissionais, paralisa. O desconforto se acumula, e a sensação de estar perdido ou vivendo no piloto automático toma conta da rotina.",
      bg: "bg-brand-beige",
      textColor: "text-brand-olive-dark",
      numberColor: "text-brand-pink-dark"
    },
    {
      title: "O Caminho",
      content: "A terapia ajusta esse olhar. Não buscamos apagar a sua dor, mas olhar para as suas verdades com leveza e extrair o sentido. É um trabalho cognitivo e emocional genuíno, olho no olho, para que você construa pontes, cuide-se e torne-se alguém mais consciente e seguro.",
      bg: "bg-brand-offwhite",
      textColor: "text-brand-brown",
      numberColor: "text-brand-pink-dark"
    }
  ];

  return (
    <section id="movimento" className="relative z-10 bg-brand-offwhite pt-16 md:pt-24 pb-12 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-16 md:mb-24">
        <FadeIn>
          <span className="text-sm uppercase tracking-widest text-brand-pink-dark font-semibold mb-6 block">
            Estar vivo é estar em movimento.<br className="hidden md:block" />
            A terapia é um movimento constante de si mesmo.
          </span>
        </FadeIn>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {blocks.map((block, index) => (
            <FadeIn key={index} delay={index * 0.2} duration={1.2} className={`flex flex-col ${index === 2 ? 'bg-brand-beige/40 p-8 rounded-2xl -mt-8' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className={`font-serif text-xl italic ${block.numberColor}`}>0{index + 1}</span>
                <h3 className={`font-serif text-2xl md:text-3xl ${block.textColor}`}>{block.title}</h3>
              </div>
              <p className="text-brand-olive-dark/80 leading-relaxed">
                {block.content}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Stacked View */}
      <div className="md:hidden relative pb-12 bg-brand-offwhite">
        {blocks.map((block, index) => (
          <div 
            key={index}
            className={`sticky w-full flex flex-col justify-center ${block.bg} shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-brand-lavender/20 overflow-hidden relative`}
            style={{ 
              top: `${12 + (index * 3)}vh`, // leaves space for navbar and creates a stacked look
              minHeight: `${88 - (index * 3)}vh`,
              zIndex: 10 + index
            }}
          >
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="absolute top-0 left-0 w-full h-1 bg-brand-pink-dark"
            />
            <div className="px-8 py-16 h-full flex flex-col justify-center">
              <FadeIn delay={0.2} duration={2} direction="up">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`font-serif text-3xl italic ${block.numberColor}`}>0{index + 1}</span>
                  <h3 className={`font-serif text-4xl ${block.textColor}`}>{block.title}</h3>
                </div>
                <p className="text-lg text-brand-olive-dark/80 leading-relaxed font-light">
                  {block.content}
                </p>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Approach = () => {
  const cards = [
    {
      title: "Diálogo Genuíno (Eu também falo)",
      text: "A terapia não é feita de silêncios constrangedores. Eu escuto, mas também converso. Rio, me emociono, questiono e ecoo o que você traz. É uma construção conjunta de reflexões."
    },
    {
      title: "O Seu Ritmo",
      text: "A terapia é uma dança. Você guia, mas eu participo, sugiro e danço junto. Não existem modelos prontos; cada processo é único."
    },
    {
      title: "Olhar Integral (Corpo, Mente e Espírito)",
      text: "Acolhemos somatizações, emoções, cognições e valores. Sua espiritualidade e vivências de fé são bem-vindas, pois ajudam a entender o papel da sua religiosidade na constituição de quem você é."
    },
    {
      title: "Apoio Direto e Concreto",
      text: "Trago leveza, mas não passo despercebida. Causo o movimento e o desconforto necessários para tirar você da paralisação, sem julgamentos."
    }
  ];

  const topics = [
    "Autoconhecimento e Autonomia",
    "Ansiedade e Sofrimentos Emocionais",
    "Questões Existenciais e Vocação Pessoal",
    "Caminhos Profissionais e Decisões Importantes",
    "Luto, Perdas e Conflitos Relacionais"
  ];

  return (
    <section id="abordagem" className="py-24 md:py-32 bg-brand-beige relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">A Terapia como um Movimento Constante</h2>
          <div className="w-24 h-px bg-brand-pink-dark mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                initial="inactive"
                whileInView="active"
                whileHover="active"
                whileTap="active"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-brand-offwhite p-10 rounded-2xl h-full border border-brand-lavender/30 transition-colors relative overflow-hidden"
              >
                <motion.div 
                  variants={{
                    inactive: { x: "-100%" },
                    active: { x: "0%" }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 w-full h-1 bg-brand-pink-light"
                />
                <h4 className="font-serif text-2xl mb-4 text-brand-brown">{card.title}</h4>
                <p className="text-brand-olive-dark/80 leading-relaxed">{card.text}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="bg-brand-offwhite rounded-3xl p-10 md:p-16 border border-brand-lavender/50 text-center shadow-sm">
          <h3 className="font-serif text-3xl mb-8">Para quem é</h3>
          <p className="text-lg text-brand-olive-dark mb-10 max-w-2xl mx-auto">
            Atendimento online para <span className="font-semibold">Adolescentes, Adultos, Casais e Idosos</span> que buscam apoio em:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {topics.map((topic, i) => (
              <motion.span 
                key={i} 
                initial="inactive"
                whileInView="active"
                whileHover="active"
                whileTap="active"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  inactive: { backgroundColor: "transparent", borderColor: "#CABDCD" },
                  active: { backgroundColor: "#E5DEC7", borderColor: "#B98383" }
                }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="px-6 py-3 rounded-full border text-sm md:text-base cursor-default"
              >
                {topic}
              </motion.span>
            ))}
          </div>
          <Button href="https://wa.me/5521997089664" target="_blank">Fale com a Psicóloga</Button>
        </FadeIn>
      </div>
    </section>
  );
};

export const Situations = () => {
  const situations = [
    "Lidar com o fim de um relacionamento ou luto",
    "Encontrar clareza em transições de carreira",
    "Superar a ansiedade e crises existenciais",
    "Fortalecer a autoestima e a autoconfiança"
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-offwhite relative z-10 border-b border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-brown mb-8 max-w-4xl leading-tight">
            Você não pode mudar o que aconteceu. Mas pode decidir o que fará daqui para frente.
          </h2>
          <p className="text-lg md:text-xl text-brand-olive-dark/80 mb-12 font-light">
            Ajudo pessoas a encontrarem sentido nas mais diversas situações:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {situations.map((situation, index) => (
            <FadeIn key={index} delay={index * 0.1} duration={0.8}>
              <div className="p-6 md:p-8 bg-white border border-brand-lavender/30 rounded-2xl shadow-sm hover:border-brand-pink-dark transition-colors duration-300 group flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-beige flex-shrink-0 flex items-center justify-center group-hover:bg-brand-pink-dark transition-colors duration-300">
                  <div className="w-2 h-2 bg-brand-olive-dark rounded-full group-hover:bg-white transition-colors duration-300"></div>
                </div>
                <p className="text-brand-olive-dark font-medium text-lg leading-relaxed">{situation}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4}>
          <Button href="https://wa.me/5521997089664" target="_blank">TAMBÉM PRECISO DE AJUDA</Button>
        </FadeIn>
      </div>
    </section>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const ref = React.useRef(null);
  const isInView = motionUseInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (!isInView) {
      setDisplayText('');
      setIsDeleting(false);
      setIsWaiting(false);
      return;
    }

    if (isWaiting) return;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 15);
      } else {
        setIsWaiting(true);
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIsWaiting(false);
        }, 800);
      }
    } else {
      if (displayText.length < text.length) {
        // Randomize typing speed for realistic effect (between 30ms and 100ms)
        const typingDelay = Math.random() * 70 + 30;
        timer = setTimeout(() => {
          setDisplayText(prev => text.slice(0, prev.length + 1));
        }, typingDelay);
      } else {
        setIsWaiting(true);
        timer = setTimeout(() => {
          setIsDeleting(true);
          setIsWaiting(false);
        }, 4000);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isWaiting, text, isInView]);

  return (
    <div ref={ref} className="min-h-[4.5em] md:min-h-[3em] lg:min-h-[2.5em] flex flex-wrap justify-center items-center">
      <span>
        {displayText}
        <span className="animate-pulse ml-1 text-brand-pink-dark">|</span>
      </span>
    </div>
  );
};

export const EmpowermentText = () => {
  return (
    <section className="bg-brand-beige py-24 md:py-32 relative overflow-hidden">
      {/* Typewriter phrase */}
      <div className="w-full mb-20 md:mb-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-brand-brown tracking-wide leading-tight">
            <TypewriterText text="Deixe de ser refém das circunstâncias e volte a conduzir a própria vida." />
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col gap-6 md:gap-8">
        <FadeIn>
          <p className="text-2xl md:text-4xl text-brand-brown font-serif leading-relaxed">
            O que te torna humano é justamente a capacidade de refletir sobre si mesmo e buscar o seu ideal de ser.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl text-brand-olive-dark/90 font-serif italic">
            A terapia te auxilia nessa caminhada em busca do seu eu.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-brand-olive-dark/80 font-light max-w-3xl mx-auto">
            Compreenda sua história e descubra como deixar de ser refém das circunstâncias e de suas emoções.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-brand-olive-dark/80 font-light max-w-3xl mx-auto">
            Para que escolha com mais consciência, responsabilidade e clareza.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
