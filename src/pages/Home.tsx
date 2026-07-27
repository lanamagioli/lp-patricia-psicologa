import { useEffect } from 'react';
import { Navbar, Footer } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Marquee, BackToTop } from '../components/Shared';
import { Situations, EmpowermentText, PainSolution, Approach } from '../components/CoreSections';
import { About, InstagramFeed } from '../components/ProfileSections';

export const Home = () => {
  useEffect(() => {
    // Dynamic SEO Updates
    document.title = "Patrícia Gavazza | Psicóloga Clínica - Terapia e Autonomia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Descubra como deixar de ser refém das próprias emoções para exercer a sua liberdade de escolha com responsabilidade e clareza. Atendimento online.");
    }
    const canonicalLink = document.getElementById("canonical-link");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.origin + "/");
    }

    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Situations />
        <EmpowermentText />
        <PainSolution />
        <Approach />
        <About />
        <InstagramFeed />
      </main>
      <BackToTop />
    </>
  );
};
