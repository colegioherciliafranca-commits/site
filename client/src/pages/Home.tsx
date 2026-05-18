import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, Globe, Lightbulb, ExternalLink, Calendar, FileText, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Fortnite-inspired dark mode landing page
 * - Dark background (#0F1419) with vibrant accent colors
 * - Modern typography with Poppins for headlines, Inter for body
 * - Smooth transitions and hover effects
 * - Gradient text and glow effects for visual impact
 * - Responsive grid layout with asymmetric sections
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("academics");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-smooth">
        <div className="container py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-green-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg text-white hidden sm:inline">Hercília França</span>
            </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Sobre</a>
            <a href="#programs" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Programas</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Diferenciais</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contato</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Inscrever-se</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background pointer-events-none" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins leading-tight">
                Educação que
                <span className="gradient-text block mt-2">Transforma Vidas</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Colégio Estadual Hercília França do Nascimento: Inovação, excelência e formação integral para o futuro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Conheça nossos programas
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card">
                Agende uma visita
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-blue-400">500+</p>
                <p className="text-sm text-muted-foreground">Alunos</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-cyan-400">50+</p>
                <p className="text-sm text-muted-foreground">Professores</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-green-400">25+</p>
                <p className="text-sm text-muted-foreground">Anos</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl overflow-hidden glow-effect">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565451147/WD5boXuMMPMwt32rwRrjrQ/hero-campus-nWjgpj4YBZRYPyvJ5v77MF.webp"
                alt="Campus Hercília França"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl overflow-hidden glow-effect">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565451147/WD5boXuMMPMwt32rwRrjrQ/classroom-modern-AiiANnzjFwrm8DNPktbA45.webp"
                  alt="Sala de aula moderna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold font-poppins mb-4">
                  Sobre o Colégio
                </h2>
                <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                  <p>
                    Foi por volta de 1916 que surgiu, em Mangueirinha, a primeira escola do município, denominada "Escola Estadual Mista de Mangueirinha". Nela lecionava a primeira professora normalista, Hercília França do Nascimento, que, em 1922, devido ao seu excelente desempenho, dedicação e competência, foi uma das três professoras do Estado do Paraná a receber o Prêmio Centenário, concedido pelo então Diretor da Instrução Pública, professor Prieto Martinez.
                  </p>
                  <p>
                    Em 1980, em reconhecimento a tão ilustre educadora, os mangueirenses prestaram-lhe uma homenagem, atribuindo seu nome ao Colégio de 2º Grau de Mangueirinha. A instituição passou, então, a se chamar "Colégio Estadual Professora Hercília França do Nascimento – Ensino de 2º Grau", mantido pelo Governo do Estado do Paraná, resultante da reorganização da Escola Normal Colegial Estadual de Mangueirinha.
                  </p>
                  <p>
                    Ao longo de sua trajetória, o colégio contou com a contribuição de inúmeros renomados docentes e diretores que marcaram a história da instituição.
                  </p>
                  <p>
                    Atualmente, o Colégio Estadual Professora Hercília França do Nascimento está localizado no Bairro Vila Verde, oferecendo o Ensino Fundamental e o Ensino Médio em Tempo Integral. Seu objetivo é proporcionar uma educação de qualidade em tempo integral, formando estudantes autônomos, solidários e competentes, capazes de construir e realizar seu projeto de vida.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Inovação Contínua</h3>
                <p className="text-sm text-muted-foreground">Tecnologia integrada ao currículo</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Comunidade Acolhedora</h3>
                <p className="text-sm text-muted-foreground">Ambiente inclusivo e colaborativo</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Excelência Académica</h3>
                <p className="text-sm text-muted-foreground">Resultados comprovados</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Nossos Programas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma variedade de programas educacionais adaptados às necessidades de cada aluno
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["academics", "sports", "arts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "academics" && "Académico"}
                {tab === "sports" && "Desportos"}
                {tab === "arts" && "Artes"}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {activeTab === "academics" && (
              <>
                <Card className="bg-card border-border hover:border-blue-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <BookOpen className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Ensino Fundamental</h3>
                    <p className="text-sm text-muted-foreground">Formação sólida em todas as disciplinas com foco em desenvolvimento integral</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-cyan-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Globe className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Ensino Médio</h3>
                    <p className="text-sm text-muted-foreground">Preparação para o ENEM e formação de pensamento crítico</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-green-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Lightbulb className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Projetos Especiais</h3>
                    <p className="text-sm text-muted-foreground">Iniciação científica e programas de enriquecimento curricular</p>
                  </div>
                </Card>
              </>
            )}

            {activeTab === "sports" && (
              <>
                <Card className="bg-card border-border hover:border-blue-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Zap className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Futebol</h3>
                    <p className="text-sm text-muted-foreground">Treinos profissionais e participação em campeonatos estaduais</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-cyan-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Award className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Voleibol</h3>
                    <p className="text-sm text-muted-foreground">Desenvolvimento de habilidades técnicas e trabalho em equipa</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-green-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Users className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Atletismo</h3>
                    <p className="text-sm text-muted-foreground">Preparação física e competições internas e externas</p>
                  </div>
                </Card>
              </>
            )}

            {activeTab === "arts" && (
              <>
                <Card className="bg-card border-border hover:border-blue-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Lightbulb className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Artes Plásticas</h3>
                    <p className="text-sm text-muted-foreground">Expressão criativa através de pintura, escultura e design</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-cyan-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <Globe className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Música</h3>
                    <p className="text-sm text-muted-foreground">Aulas de instrumentos e formação de banda escolar</p>
                  </div>
                </Card>
                <Card className="bg-card border-border hover:border-green-500 transition-smooth group cursor-pointer">
                  <div className="p-6 space-y-4">
                    <BookOpen className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-smooth" />
                    <h3 className="font-semibold text-lg">Teatro</h3>
                    <p className="text-sm text-muted-foreground">Desenvolvimento de expressão dramática e performance</p>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Diferenciais do Colégio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O que nos torna uma instituição de referência em educação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl overflow-hidden glow-effect">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565451147/WD5boXuMMPMwt32rwRrjrQ/students-success-bCBGXpjmjq4wdTz4mFcZxM.webp"
                  alt="Sucesso dos alunos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-poppins">Formação Integral</h3>
                <p className="text-muted-foreground">
                  Desenvolvimento em todas as dimensões – intelectual, física, emocional, social e cultural.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-poppins">Tempo Integral</h3>
                <p className="text-muted-foreground">
                  Ensino Fundamental e Médio oferecidos em tempo integral para melhor aprendizado.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-poppins">Protagonismo Estudantil</h3>
                <p className="text-muted-foreground">
                  Estudantes como protagonistas de suas próprias histórias e construtores de seus projetos de vida.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-poppins">Liderança Experiente</h3>
                <p className="text-muted-foreground">
                  Direção comprometida com a excelência e o desenvolvimento de toda a comunidade escolar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Resources Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Ferramentas e Recursos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acesse as principais ferramentas e plataformas do colégio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Visualizador de Libras */}
            <a
              href="https://ericocaprioli.github.io/capriolibras/visualizador-automatico.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:border-blue-500 transition-smooth h-full cursor-pointer hover:shadow-lg hover:shadow-blue-500/20">
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <Globe className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-smooth" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-smooth" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">Visualizador de Libras</h3>
                    <p className="text-sm text-muted-foreground">Acesso ao visualizador automático de Libras para acessibilidade</p>
                  </div>
                  <div className="pt-4">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Acessibilidade</span>
                  </div>
                </div>
              </Card>
            </a>

            {/* Agenda Escolar */}
            <a
              href="https://colegioherciliafranca-commits.github.io/agenda-escolar-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:border-cyan-500 transition-smooth h-full cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <Calendar className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-smooth" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-smooth" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">Agenda Escolar 2026</h3>
                    <p className="text-sm text-muted-foreground">Consulte o calendário académico e eventos importantes</p>
                  </div>
                  <div className="pt-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">Calendário</span>
                  </div>
                </div>
              </Card>
            </a>

            {/* Formulário de Inscrição */}
            <a
              href="https://script.google.com/macros/s/AKfycbz3yDsORtA6b0YmlZ0g52n_uXZ_ySQuZlQyXJgZ8fMEx59tCXSo-1PqE1mmJiQ1yeRRhw/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:border-green-500 transition-smooth h-full cursor-pointer hover:shadow-lg hover:shadow-green-500/20">
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <Mail className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-smooth" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-smooth" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">Formulário de Inscrição</h3>
                    <p className="text-sm text-muted-foreground">Preencha o formulário para se inscrever no colégio</p>
                  </div>
                  <div className="pt-4">
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Inscrição</span>
                  </div>
                </div>
              </Card>
            </a>

            {/* Formulário de Contato */}
            <a
              href="https://script.google.com/macros/s/AKfycbzz9OP3_DXnkmg04aRcj791rhCGkpyhiIiSfkhWW-g2EpvsH9islHbiBchSDxjiDjMD/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border hover:border-purple-500 transition-smooth h-full cursor-pointer hover:shadow-lg hover:shadow-purple-500/20">
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-smooth" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-purple-400 transition-smooth" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">Formulário de Contato</h3>
                    <p className="text-sm text-muted-foreground">Entre em contato conosco com suas dúvidas e sugestões</p>
                  </div>
                  <div className="pt-4">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Contato</span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 p-12 md:p-20 glow-effect">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Pronto para começar sua jornada?
              </h2>
              <p className="text-lg text-muted-foreground">
                Inscreva-se agora e faça parte de uma comunidade educacional de excelência
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Inscrever-se Agora
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500/50 hover:bg-blue-500/10">
                  Agendar Visita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-bold">Colégio Hercília França</h3>
              <p className="text-sm text-muted-foreground">Rua Governador Garcês, nº 674<br />Bairro Vila Verde<br />85540-000 - Mangueirinha - PR</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-smooth">Sobre</a></li>
                <li><a href="#programs" className="hover:text-foreground transition-smooth">Programas</a></li>
                <li><a href="#features" className="hover:text-foreground transition-smooth">Diferenciais</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: mulhercilianascimento@seed.pr.gov.br</li>
                <li>Telefone: (46) 3243-1271</li>
                <li>Endereço: Rua Governador Garcês, nº 674</li>
                <li>Bairro Vila Verde - Mangueirinha - PR</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Facebook</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Colégio Estadual Professora Hercília França do Nascimento - EFM. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-foreground transition-smooth">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
