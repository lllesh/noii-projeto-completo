export const bentoCards = [
  {
    id: "jornada",
    title: "minha jornada",
    description: "acompanhe cada etapa do seu tratamento de fertilidade com clareza.",
    href: "/jornada",
    size: "lg",
  },
  {
    id: "exames",
    title: "meus exames",
    description: "seus resultados laboratoriais e de imagem organizados com segurança.",
    href: "/exames",
    size: "md",
  },
  {
    id: "medicacoes",
    title: "minhas medicações",
    description: "horários, doses e lembretes das suas medicações do ciclo.",
    href: "/medicacoes",
    size: "md",
  },
  {
    id: "agenda",
    title: "minha agenda",
    description: "consultas, ultrassons e coletas sincronizados no seu calendário.",
    href: "/agenda",
    size: "md",
  },
  {
    id: "fiorela",
    title: "fiorela",
    description: "sua assistente de fertilidade para tirar dúvidas a qualquer momento.",
    href: "/fiorela",
    size: "md",
  },
  {
    id: "ultrassons",
    title: "meus ultrassons",
    description: "monitoramento folicular e evolução do ciclo em um só lugar.",
    href: "/ultrassons",
    size: "md",
  },
  {
    id: "plano-de-voo",
    title: "plano de voo",
    description: "o protocolo completo do seu ciclo, passo a passo.",
    href: "/plano-de-voo",
    size: "md",
  },
  {
    id: "arquivos",
    title: "meu cofre",
    description: "documentos, laudos e arquivos protegidos no seu ninho digital.",
    href: "/arquivos",
    size: "lg",
  },
];

export const jornadaEvents = [
  {
    title: "Primeiro contato",
    date: "15/01/2026",
    description: "Agendamento da consulta inicial com a clínica.",
    status: "done",
  },
  {
    title: "Consulta inicial",
    date: "05/02/2026",
    description: "Avaliação do casal com Dra. Demonstração.",
    status: "done",
  },
  {
    title: "Exames solicitados",
    date: "10/02/2026",
    description: "Exames hormonais, espermograma, sorologias e genéticos.",
    status: "done",
  },
  {
    title: "Resultados e diagnóstico",
    date: "10/03/2026",
    description: "Baixa reserva ovariana + fator masculino leve. Indicação de FIV com ICSI.",
    status: "done",
  },
  {
    title: "Plano de tratamento criado",
    date: "15/03/2026",
    description: "Protocolo antagonista com dose alta. Plano de voo documentado.",
    status: "done",
  },
  {
    title: "Ciclo 1 — cancelado",
    date: "01/04/2026",
    description: "Resposta ovariana insuficiente. Protocolo será ajustado.",
    status: "done",
  },
  {
    title: "Ciclo 2 — estimulação iniciada",
    date: "03/05/2026",
    description: "Gonal-F 225UI + Menopur 75UI a partir de D3.",
    status: "current",
  },
  {
    title: "Monitoramento por ultrassom",
    date: "06/05/2026",
    description: "Acompanhamento do crescimento folicular.",
    status: "current",
  },
  {
    title: "Trigger",
    date: "A DEFINIR",
    description: "Aplicação do hCG para maturação final.",
    status: "next",
  },
  {
    title: "Captação de óvulos",
    date: "A DEFINIR",
    description: "Procedimento de coleta dos oócitos.",
    status: "pending",
  },
  {
    title: "Fertilização (ICSI)",
    date: "A DEFINIR",
    description: "Injeção intracitoplasmática de espermatozoides.",
    status: "pending",
  },
  {
    title: "Transferência embrionária",
    date: "A DEFINIR",
    description: "Transferência do embrião para o útero.",
    status: "pending",
  },
  {
    title: "Beta-hCG",
    date: "A DEFINIR",
    description: "Teste de gravidez.",
    status: "pending",
  },
];

export const agendaEvents = [
  { title: "Ultrassom de monitoramento", datetime: "2026-05-09 às 08:00", kind: "ultrassom" },
  { title: "Coleta de sangue — Estradiol", datetime: "2026-05-09 às 07:30", kind: "exame" },
  { title: "Consulta com Dra. Demonstração", datetime: "2026-05-12 às 14:00", kind: "consulta" },
  { title: "Aplicação Gonal-F 225UI", datetime: "2026-05-08 às 20:00", kind: "medicacao" },
  { title: "Início Cetrotide", datetime: "2026-05-10 às 08:00", kind: "medicacao" },
];

export const agendaMarkedDays = [3, 6, 9, 10, 12, 13, 15, 20, 25];

export const exames = [
  {
    title: "AMH (Hormônio Anti-Mülleriano)",
    status: "realizado",
    category: "hormonal",
    meta: "hormonal · Laboratório Demo · Dra. Demonstração",
    note: "Resultado de demonstração",
    extra: "NOTA DE DEMONSTRAÇÃO",
    date: "2026-02-15",
    hasResult: true,
  },
  {
    title: "FSH Basal",
    status: "realizado",
    category: "hormonal",
    meta: "hormonal · Laboratório Demo · Dra. Demonstração",
    note: "Resultado de demonstração",
    date: "2026-02-15",
    hasResult: true,
  },
  {
    title: "Estradiol (E2)",
    status: "agendado",
    category: "hormonal",
    meta: "hormonal · Laboratório Demo · Dra. Demonstração",
    note: "COLETA D9 DO CICLO — MONITORAMENTO",
    date: "2026-05-09",
  },
  {
    title: "Progesterona",
    status: "pendente",
    category: "hormonal",
    meta: "hormonal · laboratório a definir · Dra. Demonstração",
    note: "SERÁ SOLICITADO APÓS TRIGGER",
    date: "",
  },
  {
    title: "Espermograma",
    status: "realizado",
    category: "masculino",
    meta: "masculino · Laboratório Demo · Dr. Demonstração",
    note: "Resultado de demonstração",
    extra: "NOTA DE DEMONSTRAÇÃO",
    date: "2026-03-01",
    hasResult: true,
  },
  {
    title: "TSH",
    status: "realizado",
    category: "hormonal",
    meta: "hormonal · Laboratório Demo · Dra. Demonstração",
    note: "Resultado de demonstração",
    date: "2026-02-15",
    hasResult: true,
  },
  {
    title: "Vitamina D",
    status: "realizado",
    category: "geral",
    meta: "geral · Laboratório Demo · Dra. Demonstração",
    note: "Resultado de demonstração",
    extra: "NOTA DE DEMONSTRAÇÃO",
    date: "2026-02-15",
    hasResult: true,
  },
  {
    title: "Beta-hCG",
    status: "futuro",
    category: "gravidez",
    meta: "gravidez · laboratório a definir · Dra. Demonstração",
    note: "SERÁ SOLICITADO 12 DIAS APÓS TRANSFERÊNCIA EMBRIONÁRIA",
    date: "",
  },
];

export const examCategories = ["todos", "hormonal", "masculino", "geral", "gravidez"];

export const ultrassons = [
  {
    title: "Ultrassom — D3",
    date: "2026-05-03",
    cycle: "ciclo 2",
    endometrio: "4.2 mm",
    endometrioTipo: "TRILAMINAR",
    ovarioDireito: "3 folículos antrais (3-5mm)",
    ovarioEsquerdo: "2 folículos antrais (3-4mm)",
    maiorFoliculo: "5 mm (OD)",
    nota: "Contagem de folículos antrais compatível. Início de estimulação autorizado.",
    proximoPasso: "Iniciar Gonal-F 225UI + Menopur 75UI",
  },
  {
    title: "Ultrassom — D6",
    date: "2026-05-06",
    cycle: "ciclo 2",
    endometrio: "6.1 mm",
    endometrioTipo: "TRILAMINAR",
    ovarioDireito: "3 folículos (6-8mm)",
    ovarioEsquerdo: "2 folículos (5-7mm)",
    maiorFoliculo: "8 mm (OD)",
    nota: "Crescimento adequado. Manter dose.",
    proximoPasso: "Próximo ultrassom D8",
  },
];

export const medicationCategories = ["todos", "gonadotrofina", "antagonista GnRH", "suplemento", "trigger"];

export const medications = [
  {
    name: "Gonal-F",
    category: "GONADOTROFINA",
    status: "confirmado",
    dose: "225 UI · subcutânea · 1x ao dia · 20:00",
    period: "D3–D12 · 2026-05-03 → 2026-05-12",
    note: "Aplicar na barriga, alternar lados. Manter refrigerado.",
  },
  {
    name: "Menopur",
    category: "GONADOTROFINA",
    status: "confirmado",
    dose: "75 UI · subcutânea · 1x ao dia · 20:00",
    period: "D3–D12 · 2026-05-03 → 2026-05-12",
    note: "Misturar com diluente antes da aplicação.",
  },
  {
    name: "Cetrotide",
    category: "ANTAGONISTA GNRH",
    status: "pendente",
    dose: "0.25 mg · subcutânea · 1x ao dia · 08:00",
    period: "D10–D13 · 2026-05-10 → 2026-05-13",
    note: "Aplicar pela manhã. Não atrasar.",
  },
  {
    name: "Ácido Fólico",
    category: "SUPLEMENTO",
    status: "confirmado",
    dose: "5 mg · oral · 1x ao dia · manhã",
    period: "CONTÍNUO · 2026-01-15 → CONTÍNUO",
    note: "Tomar em jejum.",
    missed: 2,
  },
  {
    name: "Coenzima Q10",
    category: "SUPLEMENTO",
    status: "confirmado",
    dose: "600 mg · oral · 1x ao dia · almoço",
    period: "CONTÍNUO · 2026-01-15 → CONTÍNUO",
    note: "Tomar com refeição.",
  },
  {
    name: "Vitamina D",
    category: "SUPLEMENTO",
    status: "confirmado",
    dose: "4000 UI · oral · 1x ao dia · almoço",
    period: "CONTÍNUO · 2026-02-01 → CONTÍNUO",
    note: "Tomar com gordura.",
    missed: 1,
  },
  {
    name: "Ômega 3",
    category: "SUPLEMENTO",
    status: "confirmado",
    dose: "2000 mg · oral · 1x ao dia · almoço",
    period: "CONTÍNUO · 2026-01-15 → CONTÍNUO",
    note: "EPA + DHA.",
  },
  {
    name: "Ovidrel (trigger)",
    category: "TRIGGER",
    status: "pendente",
    dose: "250 mcg · subcutânea · dose única · a definir",
    period: "A DEFINIR · A DEFINIR → A DEFINIR",
    note: "Horário exato será definido pela médica. Não aplicar antes da confirmação.",
  },
];

export const planoDeVoo = {
  ciclo: "Ciclo 2 — Estimulação ovariana",
  status: "em andamento",
  proximoPasso: "Ultrassom de monitoramento — dia 8 do ciclo",
  medica: "Dra. Demonstração",
  protocolo: "Protocolo antagonista com dose alta",
  medicamentos: [
    "Gonal-F 225UI + Menopur 75UI (D3–D12)",
    "Cetrotide 0.25mg (D10–D13)",
    "Ovidrel 250mcg (trigger — a definir)",
  ],
  documentos: ["Plano de tratamento completo", "Agenda do ciclo"],
  orientacoes: [
    "Manter horário rigoroso das medicações injetáveis (20h).",
    "Não pular doses de suplementos.",
    "Comparecer ao ultrassom de monitoramento nos dias indicados.",
    "Evitar exercícios intensos durante a estimulação.",
    "Em caso de dor abdominal intensa, entrar em contato imediatamente.",
  ],
  aviso: "TODAS AS DECISÕES CLÍNICAS DEVEM SER APROVADAS PELA MÉDICA RESPONSÁVEL.",
};

export const arquivosCategorias = [
  { nome: "exames", total: 7 },
  { nome: "ultrassons", total: 2 },
  { nome: "documentos", total: 3 },
  { nome: "plano de voo", total: 1 },
  { nome: "consentimentos", total: 2 },
  { nome: "fotos", total: 0 },
  { nome: "vídeos", total: 0 },
  { nome: "notas", total: 1 },
  { nome: "orientações", total: 3 },
  { nome: "histórico", total: 1 },
];

export const tarefasPendentes = [
  { title: "Agendar coleta de estradiol (E2)", date: "09/05/2026", tag: "EXAME" },
  { title: "Confirmar aplicação Gonal-F hoje", date: "08/05/2026", tag: "MEDICAÇÃO" },
  { title: "Comprar Cetrotide na farmácia", date: "09/05/2026", tag: "MEDICAÇÃO" },
  { title: "Levar resultado de sorologias na próxima consulta", date: "12/05/2026", tag: "EXAME" },
];

export const tarefasConcluidas = [
  { title: "Enviar resultado do espermograma para a clínica", date: "05/05/2026", tag: "ADMIN" },
  { title: "Assinar termo de consentimento FIV", date: "01/05/2026", tag: "ADMIN" },
];

export const fiorelaSuggestions = [
  "enviar exame",
  "ver próximo passo",
  "abrir plano de voo",
  "ver minha agenda",
  "falar com a equipe",
];

export const medico = {
  nome: "Dra. Demonstração",
  crm: "CRM/UF 000000",
  especialidade: "Reprodução Humana Assistida",
  proximaConsulta: "12/05 às 14h",
  orientacoes: [
    "Manter medicação no horário rigoroso.",
    "Trazer todos os resultados na próxima consulta.",
    "Evitar esforço físico intenso durante estimulação.",
  ],
};

export const perfilCasal = {
  paciente: "Paciente Demonstração",
  parceiro: "Parceiro Demonstração",
  idadePaciente: "0 anos",
  idadeParceiro: "0 anos",
  cidade: "Cidade Demonstração",
  email: "demo@example.com",
  medica: "Dra. Demonstração",
  objetivo: "Fertilização in vitro (FIV)",
  preocupacao: "Diagnóstico de demonstração",
  cicloAtual: "Ciclo 2 — Estimulação ovariana",
  status: "em andamento",
  proximoPasso: "Ultrassom de monitoramento — dia 8 do ciclo",
  alertas: [
    "Exame de estradiol pendente — agendar até 10/05",
    "Medicação Gonal-F: confirmar dose do dia",
    "Ultrassom agendado para amanhã às 8h",
  ],
};

export const sidebarNav = [
  { label: "início", href: "/" },
  { label: "minha jornada", href: "/jornada" },
  { label: "agenda", href: "/agenda" },
  { label: "exames", href: "/exames" },
  { label: "ultrassons", href: "/ultrassons" },
  { label: "medicações", href: "/medicacoes" },
  { label: "plano de voo", href: "/plano-de-voo" },
  { label: "arquivos", href: "/arquivos" },
  { label: "tarefas", href: "/tarefas" },
  { label: "fiorela", href: "/fiorela" },
  { label: "médico", href: "/medico" },
  { label: "configurações", href: "/configuracoes" },
];
