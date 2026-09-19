import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import profileImage from "@/assets/profile_pic.jpeg";
import marvelImage from "@/assets/me_and_supergirl.jpeg";
import secondAboutImage from "@/assets/cap_tshirt.jpeg";
import backgroundImage from "@/assets/first_image.jpg";
import innovatechVideo from "@/assets/video_1.mp4";
import nutriWiseImage from "@/assets/nutri-wise.png";
import zenTechVideo from "@/assets/video_3.mp4";
import bioAlertImage from "@/assets/BioAlert.png";
import soccerInspectorImage from "@/assets/SoccerInspector.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luana Pinheiro — Portfólio" },
      { name: "description", content: "Portfólio de Luana Pinheiro, desenvolvedora web e mobile fullstack." },
      { property: "og:title", content: "Luana Pinheiro — Portfólio" },
      { property: "og:description", content: "Projetos, trajetória e contato de Luana Pinheiro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "INNOVATECH LABS",
    semester: "semestre 1",
    copy: "Curso de conceitos básicos de Metodologia SCRUM, gerando certificação e um questionário com seleção aleatória de questões para teste do conhecimento do aluno. Posição na equipe: SCRUM Master",
    repo: "https://github.com/gjulianni/Innovatech",
    media: { type: "video" as const, src: innovatechVideo },
  },
  {
    title: "NUTRI-WISE",
    semester: "semestre 2",
    copy: "Nutri-Wise é uma aplicação Web de registro de calorias, controle e cálculo de IMC a partir do registro de peso, altura e gênero do usuário. Posição na equipe: SCRUM Master",
    repo: "https://github.com/WiseBuilders/Nutri-Wise",
    media: { type: "image" as const, src: nutriWiseImage, alt: "Tela inicial do projeto Nutri-Wise" },
  },
  {
    title: "ZENTECH",
    semester: "semestre 3",
    copy: "Aplicação Web conectada a um sensor localizado no Lago de Furnas, para auxiliar pescadores com dados atualizados do local, clima e velocidade do vento. Posição na equipe: SCRUM Master",
    repo: "https://github.com/Viniciusfernandes2/Zen-Tech-ABP3",
    media: { type: "video" as const, src: zenTechVideo },
  },
  {
    title: "BioAlert",
    semester: "semestre 4",
    copy: "BioAlert é um app mobile desenvolvido para registrar queda de idosos a partir de um relógio e possibilitar a chamada de emergência para o SAMU. Posição na equipe: Desenvolvedora Web",
    repo: "https://github.com/Viniciusfernandes2/Zen-Tech-ABP4",
    media: { type: "image" as const, src: bioAlertImage, alt: "Relógio com botão SOS do projeto BioAlert" },
  },
  {
    title: "Soccer Inspector",
    semester: "semestre 5",
    copy: "Aplicação web e mobile para comparação, substituição e análise do desempenho dos jogadores de um time. Posição: Dev Backend e Frontend",
    repo: "https://github.com/HighTechDSM/ABP_5_DSM",
    media: { type: "image" as const, src: soccerInspectorImage, alt: "Painel de desempenho do Soccer Inspector" },
  },
];

const menu = [
  ["Projetos", "projects"],
  ["Sobre mim", "about"],
  ["Contato", "contact"],
  ["Início", "home"],
] as const;

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  };

  return (
    <main className="portfolio-shell">
      <section className="title-screen" aria-label="Apresentação">
        <button className="title-hover" onClick={() => goTo("home")}>
          <span>Luana Pinheiro - Portfólio</span>
        </button>
      </section>

      <section id="home" className="panel home-panel" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <MenuDots onClick={() => setMenuOpen(true)} />
        <div className="home-content">
          <img className="profile-photo" src={profileImage} alt="Luana Pinheiro" />
          <div>
            <h1>Olá, Bem vindo ao meu<br />Portfólio!</h1>
            <p>Meu nome é Luana Pinheiro, sou<br />uma Desenvolvedora Web e<br />Mobile Fullstack</p>
            <ArrowLink onClick={() => setMenuOpen(true)}>Acessar Menu</ArrowLink>
          </div>
        </div>
      </section>

      <section id="projects" className="panel projects-panel">
        <MenuDots onClick={() => setMenuOpen(true)} />
        <div className="section-inner">
          <h2 className="section-title">Projetos</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-copy">
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    <span>{project.semester}</span>
                  </div>
                  <p>{project.copy}</p>
                  <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                    <span>Ver mais</span><ArrowRight aria-hidden="true" />
                  </a>
                </div>
                <ProjectMedia media={project.media} title={project.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="panel about-panel">
        <MenuDots onClick={() => setMenuOpen(true)} />
        <div className="about-copy">
          <h2 className="underlined-title">Sobre mim</h2>
          <p>Além da minha experiência com programação, no tempo livre gosto muito de assistir filmes e sou uma grande fã dos quadrinhos da Marvel. Também gosto de ouvir músicas e ir à academia frequentemente.</p>
          <p>Sou alegre e determinada. Gosto muito de aprender, aprimorar minhas habilidades e projetos para me tornar melhor do que sou hoje. Tenho muito orgulho de poder estudar na área de tecnologia e da carreira que tenho pela frente.</p>
          <Button variant="default" asChild className="resume-button">
            <a href="/Luana_Pinheiro_CV_.pdf" target="_blank" rel="noreferrer">
            <Download aria-hidden="true" /> Baixar currículo
            </a>
          </Button>
        </div>

        <div className="photo-stack">
          <img src={marvelImage} alt="Luana em uma foto relacionada à Marvel" />
          <img src={secondAboutImage} alt="Luana usando camiseta" />
        </div>
      </section>

      <section id="contact" className="panel contact-panel" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <MenuDots onClick={() => setMenuOpen(true)} />
        <div className="contact-content">
          <h2>Contato</h2>
          <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/luana-pinheiro-4bb92526b" />
          <ContactLink label="Github" href="https://github.com/Luana873" />
          <ContactLink label="e-mail" href="mailto:l9889641@gmail.com" text="l9889641@gmail.com" />
        </div>
      </section>

      <div className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <Button variant="ghost" size="icon" className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
          <span aria-hidden="true">×</span>
        </Button>
        <nav aria-label="Menu principal">
          <p>MENU</p>
          <ol>
            {menu.map(([label, id]) => (
              <li key={id}>
                <button tabIndex={menuOpen ? 0 : -1} onClick={() => goTo(id)}>{label}</button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </main>
  );
}

type ProjectMediaSource =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

function ProjectMedia({ title, media }: { title: string; media: ProjectMediaSource | null }) {
  if (media?.type === "image") {
    return <img className="project-image" src={media.src} alt={media.alt} />;
  }

  if (media?.type === "video") {
    return (
      <video className="project-image" src={media.src} poster={media.poster} controls playsInline>
        Seu navegador não consegue reproduzir este vídeo.
      </video>
    );
  }

  return <div className="project-image" role="img" aria-label={`Espaço visual do projeto ${title}`} />;
}

function MenuDots({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost" size="icon" className="menu-dots" onClick={onClick} aria-label="Abrir menu">
      <span aria-hidden="true">•••</span>
    </Button>
  );
}

function ArrowLink({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button className="arrow-link" onClick={onClick}>
      <span>{children}</span><ArrowRight aria-hidden="true" />
    </button>
  );
}

function ContactLink({ label, href, text }: { label: string; href: string; text?: string }) {
  return (
    <p className="contact-line">
      <span>{label}: </span>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {text ?? href}
      </a>
      <ArrowRight aria-hidden="true" />
    </p>
  );
}