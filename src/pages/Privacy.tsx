import React, { useEffect } from 'react';
import { FadeIn } from '../components/Shared';

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Updates
    document.title = "Política de Privacidade | Patrícia Gavazza";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Política de Privacidade de Patrícia Gavazza. Informações sobre tratamento de dados e sigilo profissional.");
    }
    const canonicalLink = document.getElementById("canonical-link");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.origin + "/privacidade");
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-brand-offwhite min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl pt-10">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-brown mb-12 text-center">
            Política de Privacidade
          </h1>
          
          <div className="space-y-6 text-brand-olive-dark/80 leading-relaxed font-sans text-lg bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-lavender/50">
            <p>
              A sua privacidade e a confidencialidade das suas informações são prioridades para o meu trabalho. Esta Política de Privacidade explica como os seus dados pessoais são coletados, usados e protegidos ao acessar este site e entrar em contato comigo.
            </p>
            
            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Quais informações coletamos</h2>
            <p>
              Ao utilizar o formulário de contato deste site, você nos fornece voluntariamente as seguintes informações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nome completo:</strong> Para que eu saiba como me dirigir a você.</li>
              <li><strong>Número de telefone (WhatsApp):</strong> Capturado automaticamente no momento em que você é redirecionado para o aplicativo de mensagens, permitindo o nosso retorno.</li>
            </ul>
            <p>
              Não coletamos dados sensíveis de saúde através do site. O aprofundamento terapêutico ocorre exclusivamente em ambiente seguro durante as sessões.
            </p>

            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Como utilizamos os seus dados</h2>
            <p>
              As informações fornecidas são utilizadas exclusivamente para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas dúvidas e mensagens enviadas pelo site.</li>
              <li>Realizar o agendamento de sessões de psicoterapia.</li>
              <li>Manter um canal de comunicação direto e individual com você.</li>
            </ul>

            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Compartilhamento de Informações</h2>
            <p>
              O sigilo é a base da psicologia. <strong>Seus dados jamais serão vendidos, alugados ou repassados a terceiros para fins comerciais.</strong><br/>
              O único compartilhamento de dados que ocorre é de caráter estritamente técnico e operacional:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WhatsApp (Meta):</strong> Ao clicar em "Enviar mensagem", seu texto e número trafegam pela infraestrutura do WhatsApp, sujeita aos termos de uso e criptografia da própria plataforma.</li>
            </ul>
            
            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Este site pode utilizar cookies essenciais (pequenos arquivos de texto salvos no seu navegador) apenas para garantir o funcionamento básico e a segurança da página, além de métricas anônimas de acesso (como número de visitantes). Não utilizamos cookies para rastreamento publicitário invasivo.
            </p>

            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Segurança e Sigilo Profissional</h2>
            <p>
              Além de seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), todo o nosso contato é regido pelo rigoroso Código de Ética do Conselho Federal de Psicologia (CFP). Isso significa que as informações trocadas a partir do nosso contato possuem garantia de sigilo profissional.
            </p>

            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Os seus direitos (LGPD)</h2>
            <p>
              Você tem total controle sobre os seus dados. A qualquer momento, você pode solicitar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A confirmação de que possuo seus dados (como seu contato no meu WhatsApp).</li>
              <li>A correção de dados incompletos ou desatualizados.</li>
              <li>A exclusão ou bloqueio do seu contato e do histórico de mensagens da nossa triagem (respeitados os prazos legais de guarda de prontuários clínicos, caso você se torne paciente).</li>
            </ul>

            <h2 className="text-2xl font-serif text-brand-brown pt-4 mb-2">Como entrar em contato</h2>
            <p>
              Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como seus dados são tratados, sinta-se à vontade para entrar em contato diretamente comigo:
            </p>
            <div className="bg-brand-beige/30 p-6 rounded-lg mt-4 border border-brand-lavender/30">
              <p><strong>Responsável:</strong> Patrícia Gavazza</p>
              <p><strong>E-mail:</strong> patricia.gavazza@gmail.com</p>
              <p><strong>WhatsApp:</strong> (21) 99708-9664</p>
            </div>
            
            <p className="text-sm mt-8 opacity-70 text-center">
              Última atualização: 06/04/2026
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
