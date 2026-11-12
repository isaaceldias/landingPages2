"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, X } from "lucide-react";

const whatsapp = "https://wa.me/5517999999999?text=";
const bookingLink = whatsapp + encodeURIComponent("Olá! Quero agendar uma avaliação na Nayra Estética.");
const navItems = [["Tratamentos", "#tratamentos"], ["Nosso jeito", "#jeito"], ["Dúvidas", "#duvidas"]];
const treatments = [
  { title: "Facial", tag: "Pele e expressão", copy: "Textura, viço e equilíbrio para uma pele que acompanha o seu momento.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=86", message: "Quero conversar sobre tratamentos faciais." },
  { title: "Corporal", tag: "Contorno e cuidado", copy: "Protocolos pensados para firmeza, contorno e bem-estar, sem pressa e sem excesso.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1100&q=86", message: "Quero conversar sobre tratamentos corporais." },
  { title: "Capilar", tag: "Fios e couro cabeludo", copy: "Uma avaliação próxima para entender a rotina dos seus fios e os próximos passos.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=86", message: "Quero conversar sobre tratamentos capilares." },
];
const faqs = [
  ["Preciso escolher um tratamento antes de falar com a equipe?", "Não. A primeira conversa existe para entender o que você busca e indicar possibilidades com clareza."],
  ["A avaliação é personalizada?", "Sim. O cuidado é definido a partir do seu objetivo, da sua rotina e de uma conversa cuidadosa sobre o que faz sentido para você."],
  ["Posso começar apenas com uma conversa?", "Pode. Você pode chamar pelo WhatsApp para tirar dúvidas e decidir com calma se deseja marcar uma avaliação."],
  ["Como faço para agendar?", "Escolha qualquer botão de WhatsApp da página e fale com a equipe demonstrativa da Nayra."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  function navigate(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (!id.startsWith("#") || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const headerOffset = 106;
    const start = window.scrollY;
    const destination = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
    const distance = destination - start;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || Math.abs(distance) < 4) {
      window.scrollTo(0, destination);
    } else {
      const duration = Math.min(900, Math.max(600, Math.abs(distance) * 0.65));
      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) window.requestAnimationFrame(animate);
      };
      window.requestAnimationFrame(animate);
    }
    window.history.pushState(null, "", id);
    setMenuOpen(false);
  }
  return <main>
    <header className="site-header"><a href="#inicio" onClick={(event) => navigate(event, "#inicio")} className="logo" aria-label="Nayra Estética, início"><span className="logo-mark">N</span><span><b>nayra</b><small>estética e cuidado</small></span></a><nav aria-label="Navegação principal">{navItems.map(([label, href]) => <a key={href} href={href} onClick={(event) => navigate(event, href)}>{label}</a>)}</nav><a href={bookingLink} target="_blank" rel="noreferrer" className="header-cta">Agendar avaliação <ArrowUpRight size={15} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</button></header>
    {menuOpen && <div className="mobile-nav">{navItems.map(([label, href]) => <a key={href} href={href} onClick={(event) => navigate(event, href)}>{label}</a>)}<a href={bookingLink} target="_blank" rel="noreferrer" className="button dark-button">Agendar avaliação <ArrowUpRight size={16} /></a></div>}
    <section id="inicio" className="hero" data-enter><div className="hero-copy"><p className="eyebrow">Estética com intenção</p><h1>O cuidado que deixa você mais <em>presente.</em></h1><p className="hero-text">Na Nayra, cada protocolo começa com escuta. Você conta o que deseja cuidar e encontra um plano que respeita seus traços, seu corpo e sua rotina.</p><div className="hero-actions"><a href={bookingLink} target="_blank" rel="noreferrer" className="button dark-button">Quero conversar com a equipe <ArrowUpRight size={17} /></a><a href="#tratamentos" onClick={(event) => navigate(event, "#tratamentos")} className="text-link">Conhecer os cuidados <ArrowUpRight size={16} /></a></div><div className="hero-note"><Check size={17} /> Primeira conversa sem compromisso <span /> Atendimento com hora marcada</div></div><div className="hero-visual"><div className="hero-photo" role="img" aria-label="Pessoa recebendo um cuidado facial em uma clínica de estética" /><div className="hero-stamp"><span>N</span><small>cuidado<br />com intenção</small></div><div className="hero-index">01 / 04</div></div></section>
    <section className="statement"><p>Você não precisa perseguir um padrão.<br /><em>Precisa encontrar o cuidado que combina com você.</em></p></section>
    <section id="tratamentos" className="section treatments"><div className="section-heading"><div><p className="eyebrow">Encontre o seu ponto de partida</p><h2>Por onde você quer <em>começar?</em></h2></div><p>Você não precisa chegar com o nome do procedimento. Escolha a área que mais se aproxima do que busca e converse com a equipe.</p></div><div className="treatment-list">{treatments.map((item, index) => <article className="treatment" key={item.title}><div className="treatment-meta"><span>0{index + 1}</span><span>{item.tag}</span></div><div className="treatment-photo" style={{ backgroundImage: `url(${item.image})` }} /><div className="treatment-copy"><h3>{item.title}</h3><p>{item.copy}</p><a href={whatsapp + encodeURIComponent(item.message)} target="_blank" rel="noreferrer" className="text-link">Conversar sobre {item.title.toLowerCase()} <ArrowUpRight size={15} /></a></div></article>)}</div></section>
    <section id="jeito" className="approach"><div className="approach-photo" role="img" aria-label="Ambiente tranquilo de atendimento estético" /><div className="approach-copy"><p className="eyebrow">O nosso jeito de cuidar</p><h2>Menos excesso.<br /><em>Mais presença.</em></h2><p>O nosso trabalho não é perseguir uma versão ideal de você. É criar espaço para que você se sinta bem na própria pele, com escolhas conscientes e acompanhamento próximo.</p><div className="principles"><div><span>01</span><b>Escuta antes de indicar</b></div><div><span>02</span><b>Plano claro antes de começar</b></div><div><span>03</span><b>Constância sem cobrança</b></div></div><a href={bookingLink} target="_blank" rel="noreferrer" className="text-link light-link">Falar sobre o meu objetivo <ArrowUpRight size={15} /></a></div></section>
    <section className="section process"><div className="section-heading"><div><p className="eyebrow">Como funciona</p><h2>Um começo simples,<br /><em>sem pressão.</em></h2></div><p>O primeiro passo pode ser só uma conversa para organizar o que você está sentindo e buscando.</p></div><div className="process-list"><div><span>01</span><h3>Você chama</h3><p>Conte pelo WhatsApp o que gostaria de cuidar ou transforme sua dúvida em conversa.</p></div><div><span>02</span><h3>A gente escuta</h3><p>A equipe entende seu momento e apresenta as possibilidades com clareza.</p></div><div><span>03</span><h3>Você decide</h3><p>Se fizer sentido, marcamos uma avaliação no melhor horário para você.</p></div></div></section>
    <section id="duvidas" className="section faq"><div className="section-heading"><div><p className="eyebrow">Antes de conversar</p><h2>Algumas respostas<br />para começar <em>leve.</em></h2></div><p>Ainda ficou alguma dúvida? A equipe está pronta para conversar com você pelo WhatsApp.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>
    <section className="final-cta"><div><p className="eyebrow">O seu momento começa aqui</p><h2>Vamos descobrir o que faz sentido <em>para você?</em></h2><p>Projeto demonstrativo com nomes e dados fictícios para apresentação comercial.</p><a href={bookingLink} target="_blank" rel="noreferrer" className="button light-button"><MessageCircle size={18} /> Agendar uma conversa</a></div><div className="final-word">nayra<span>estética e cuidado</span></div></section>
    <footer><a href="#inicio" onClick={(event) => navigate(event, "#inicio")} className="logo footer-logo"><span className="logo-mark">N</span><span><b>nayra</b><small>estética e cuidado</small></span></a><p>© 2026 Nayra Estética. Projeto demonstrativo.</p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></footer><a href={bookingLink} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar com a Nayra no WhatsApp"><MessageCircle size={22} /></a>
  </main>;
}
