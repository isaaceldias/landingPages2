"use client";

import { useState } from "react";
import { ArrowUpRight, Camera, ChevronDown, CircleCheck, Clock3, Menu, MessageCircle, MoveUpRight, Sparkles, X } from "lucide-react";

const whatsapp = "https://wa.me/5517999999999?text=";
const bookingLink = whatsapp + encodeURIComponent("Olá! Quero agendar uma avaliação na Nayra Estética.");

const areas = [
  { number: "01", title: "Facial", description: "Protocolos para textura, viço, manchas e sinais que fazem você se olhar com mais carinho.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85", message: "Quero saber mais sobre os tratamentos faciais." },
  { number: "02", title: "Corporal", description: "Cuidado personalizado para contorno, firmeza e bem estar, respeitando seu corpo e seu tempo.", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=85", message: "Quero saber mais sobre os tratamentos corporais." },
  { number: "03", title: "Capilar", description: "Avaliação e protocolos para fortalecer os fios e cuidar do couro cabeludo com constância.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", message: "Quero saber mais sobre os tratamentos capilares." },
];

const faqs = [
  ["Preciso saber qual tratamento fazer?", "Não. A primeira conversa serve justamente para entender o que você busca e indicar caminhos possíveis."],
  ["A avaliação tem compromisso?", "Não. O objetivo é ouvir você, explicar as possibilidades e deixar a decisão mais clara."],
  ["Os tratamentos são personalizados?", "Sim. Cada protocolo é definido a partir da sua avaliação, rotina e objetivo de cuidado."],
  ["Como agendo meu horário?", "Clique em qualquer botão de WhatsApp da página e converse com a equipe demonstrativa da Nayra."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigate = (event: React.MouseEvent<HTMLElement>) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
    if (!link) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const element = document.querySelector(id);
    if (!element) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", id);
    setMenuOpen(false);
  };

  return <main onClick={navigate}>
    <header className="site-header"><a href="#inicio" className="logo"><span className="logo-mark">n</span><span><b>nayra</b><small>estética e cuidado</small></span></a><nav>{[["Tratamentos", "#tratamentos"], ["Nosso jeito", "#jeito"], ["Dúvidas", "#duvidas"]].map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a href={bookingLink} target="_blank" rel="noreferrer" className="header-cta">Agendar avaliação <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X/> : <Menu/>}</button></header>
    {menuOpen && <div className="mobile-nav">{[["Tratamentos", "#tratamentos"], ["Nosso jeito", "#jeito"], ["Dúvidas", "#duvidas"]].map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href={bookingLink} target="_blank" rel="noreferrer" className="button dark-button">Agendar avaliação <ArrowUpRight size={16}/></a></div>}

    <section id="inicio" className="hero"><div className="hero-copy"><p className="overline"><span></span> Estética com intenção</p><h1>Cuidar de você também pode ser uma forma de <em>se reconhecer.</em></h1><p className="hero-text">Na Nayra, cada protocolo começa com escuta. Você conta o que deseja transformar e recebe um plano de cuidado que respeita seus traços, seu corpo e sua rotina.</p><div className="hero-actions"><a href={bookingLink} target="_blank" rel="noreferrer" className="button dark-button">Quero conversar com a equipe <MoveUpRight size={17}/></a><a href="#tratamentos" className="inline-link">Ver áreas de cuidado <ArrowUpRight size={16}/></a></div><div className="hero-proof"><CircleCheck size={18}/><span>Primeira conversa sem compromisso</span><span className="proof-divider"></span><span>Atendimento com hora marcada</span></div></div><div className="hero-art"><div className="hero-photo"></div><div className="hero-caption"><Sparkles size={17}/><span>Um cuidado pensado<br/><b>para a sua fase</b></span></div><div className="hero-label">N / 01</div></div></section>

    <section className="statement"><p>Não existe um padrão para se sentir bem.<br/><em>Existe o cuidado que faz sentido para você.</em></p></section>

    <section id="tratamentos" className="areas section"><div className="section-intro"><div><p className="overline"><span></span> Encontre o seu ponto de partida</p><h2>Por onde você quer <em>começar?</em></h2></div><p>Você não precisa chegar com o nome do procedimento. Escolha a área que mais se aproxima do que está buscando e fale com a equipe.</p></div><div className="area-list">{areas.map((area) => <article className="area-row" key={area.number}><div className="area-number">{area.number}</div><div className="area-image" style={{ backgroundImage: `url('${area.image}')` }}></div><div className="area-content"><p className="area-tag">Nayra / {area.title}</p><h3>{area.title}</h3><p>{area.description}</p><a href={whatsapp + encodeURIComponent(area.message)} target="_blank" rel="noreferrer">Conversar sobre {area.title.toLowerCase()} <ArrowUpRight size={16}/></a></div></article>)}</div></section>

    <section id="jeito" className="approach"><div className="approach-image"></div><div className="approach-content"><p className="overline"><span></span> O nosso jeito de cuidar</p><h2>Menos excesso.<br/><em>Mais presença.</em></h2><p>O nosso trabalho não é perseguir uma versão ideal de você. É criar espaço para que você se sinta bem na própria pele, com escolhas conscientes e acompanhamento próximo.</p><div className="principles"><div><span>01</span><b>Escuta antes de indicar</b></div><div><span>02</span><b>Plano claro antes de começar</b></div><div><span>03</span><b>Constância sem cobrança</b></div></div><a href={bookingLink} target="_blank" rel="noreferrer" className="inline-link">Falar sobre o meu objetivo <ArrowUpRight size={16}/></a></div></section>

    <section className="steps section"><div className="section-intro"><div><p className="overline"><span></span> Como funciona</p><h2>Um começo simples,<br/><em>sem pressão.</em></h2></div><p>O primeiro passo não precisa ser uma decisão. Pode ser só uma conversa para organizar o que você está sentindo e buscando.</p></div><div className="step-grid"><div><span>01</span><h3>Você chama</h3><p>Conte pelo WhatsApp o que gostaria de cuidar ou transforme a sua dúvida em conversa.</p></div><div><span>02</span><h3>A gente escuta</h3><p>A equipe entende seu momento e apresenta as possibilidades com clareza.</p></div><div><span>03</span><h3>Você decide</h3><p>Se fizer sentido, marcamos uma avaliação no melhor horário para você.</p></div></div></section>

    <section id="duvidas" className="faq section"><div className="section-intro"><div><p className="overline"><span></span> Antes de conversar</p><h2>Algumas respostas<br/>para começar <em>leve.</em></h2></div><p>Ainda ficou alguma dúvida? A equipe está pronta para conversar com você pelo WhatsApp.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} className={openFaq === index ? "faq-open" : ""}/></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

    <section className="final-cta"><div><p className="overline"><span></span> O seu momento começa aqui</p><h2>Vamos descobrir o que faz sentido <em>para você?</em></h2><p>Projeto demonstrativo com nomes e dados fictícios para apresentação comercial.</p><a href={bookingLink} target="_blank" rel="noreferrer" className="button light-button"><MessageCircle size={18}/> Agendar uma conversa</a></div><div className="final-mark">n<span>/ nayra</span></div></section>
    <footer><a href="#inicio" className="logo footer-logo"><span className="logo-mark">n</span><span><b>nayra</b><small>estética e cuidado</small></span></a><p>© 2026 Nayra Estética. Projeto demonstrativo.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram demonstrativo"><Camera size={19}/></a></footer><a href={bookingLink} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar com a Nayra no WhatsApp"><MessageCircle size={23}/></a>
  </main>;
}
