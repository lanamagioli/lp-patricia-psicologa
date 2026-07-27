import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, Button } from './Shared';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Movimento', href: '/#movimento' },
    { name: 'A Abordagem', href: '/#abordagem' },
    { name: 'Sobre Mim', href: '/#sobre' },
    { name: 'Reflexões', href: '/#reflexoes' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-offwhite/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-brand-olive-dark hover:text-brand-pink-dark transition-colors">
          Patrícia Gavazza.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-brand-olive-dark hover:text-brand-pink-dark transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-pink-dark hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button href="https://wa.me/5521997089664" target="_blank" className="!px-6 !py-2.5 !text-sm">Agendar Sessão</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-olive-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-offwhite border-b border-brand-beige shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-brand-olive-dark border-b border-brand-beige/50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <Button href="https://wa.me/5521997089664" target="_blank" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
            Agendar Sessão
          </Button>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  const [formData, setFormData] = useState({ name: '', reason: '' });
  const [errors, setErrors] = useState({ name: '', reason: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', reason: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome.';
      valid = false;
    }
    if (!formData.reason.trim()) {
      newErrors.reason = 'Por favor, informe o motivo do contato.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const text = `Olá Patrícia! Meu nome é ${formData.name} e estou entrando em contato através do site pelo seguinte motivo: ${formData.reason}.`;
      const url = `https://wa.me/5521997089664?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setFormData({ name: '', reason: '' });
    }
  };

  return (
    <>
      <section id="contato" className="bg-brand-offwhite py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-brown">
              Dê o primeiro passo.
            </h2>
            <p className="text-brand-olive-dark/80 text-lg md:text-xl mb-12 max-w-md">
              Entre em contato para agendar sua sessão ou tirar dúvidas sobre o atendimento. Estou aqui para te ajudar nessa jornada.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-lavender/50 flex items-center justify-center text-brand-olive-dark bg-white shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brand-olive-dark/60 uppercase mb-1">WhatsApp</p>
                  <p className="text-lg text-brand-olive-dark font-medium">(21) 99708-9664</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-lavender/50 flex items-center justify-center text-brand-olive-dark bg-white shadow-sm">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brand-olive-dark/60 uppercase mb-1">Instagram</p>
                  <a href="https://www.instagram.com/patricia_gavazza_psicologa" target="_blank" rel="noopener noreferrer" className="text-lg text-brand-olive-dark font-medium hover:text-brand-pink-dark transition-colors">
                    @patricia_gavazza_psicologa
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brand-lavender/30">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-brand-olive-dark">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-500' : 'border-brand-lavender/50'} rounded-md focus:outline-none focus:border-brand-pink-dark focus:ring-1 focus:ring-brand-pink-dark transition-colors`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium mb-2 text-brand-olive-dark">Motivo do contato</label>
                <textarea 
                  id="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className={`w-full px-4 py-3 bg-white border ${errors.reason ? 'border-red-500' : 'border-brand-lavender/50'} rounded-md focus:outline-none focus:border-brand-pink-dark focus:ring-1 focus:ring-brand-pink-dark transition-colors resize-none`}
                  placeholder="Gostaria de agendar uma sessão..."
                />
                {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
              </div>

              <Button type="submit" className="w-full mt-2">
                Enviar mensagem
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-brand-olive-dark pt-20 pb-12 text-center flex flex-col items-center border-t border-brand-olive">
        <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-offwhite mb-2">Patrícia Gavazza</h2>
          <p className="text-brand-beige/80 text-sm mb-12">Psicóloga CRP 05/40905</p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
            <a href="/#movimento" className="text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors">O Movimento</a>
            <a href="/#abordagem" className="text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors">A Abordagem</a>
            <a href="/#sobre" className="text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors">Sobre Mim</a>
            <a href="/#reflexoes" className="text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors">Reflexões</a>
            <a href="/#contato" className="text-sm text-brand-beige/80 hover:text-brand-offwhite transition-colors">Contato</a>
          </nav>

          <p className="text-xs text-brand-beige/60 mb-4">
            &copy; {new Date().getFullYear()} Patrícia Gavazza. Todos os direitos reservados.
          </p>
          <Link to="/privacidade" className="text-xs text-brand-beige/60 hover:text-brand-offwhite transition-colors mb-16 block">
            Política de Privacidade
          </Link>

          <p className="font-serif italic text-brand-beige/80 text-lg md:text-xl">
            "A liberdade de escolher nossa atitude frente à vida."
          </p>
        </div>
      </footer>
    </>
  );
};
