/**
 * ============================================================
 * DADOS DA CLÍNICA — Gabriela Guimarães Odontologia Integrada
 * Demo personalizado a partir de odontoproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Gabriela Guimarães Odontologia Integrada',
  shortName: 'Dra. Gabriela',
  discipline: 'Odontologia',
  established: 2018,

  tagline: 'Odontologia acolhedora, humana e completa',
  shortDescription:
    'Clínica familiar no Capão Raso, Curitiba — clínico geral, ortodontia, implantes, próteses, toxina botulínica e clareamento, com atendimento humanizado.',

  hero: {
    kicker: 'Capão Raso · Curitiba',
    lines: ['Cuidado acolhedor', 'para a sua'],
    lineAccent: 'família.',
    lead:
      'Ambiente caloroso, explicações claras e um plano pensado no seu ritmo. Odontologia integrada perto do Terminal Pinheirinho.',
  },

  whatsapp: '5541991832053',
  whatsappDisplay: '(41) 99183-2053',
  whatsappDefaultMessage:
    'Olá! Gostaria de agendar uma avaliação na Gabriela Guimarães Odontologia Integrada.',

  phone: '(41) 99183-2053',
  email: 'contato@gabrielaguimaraesodonto.com.br',

  address: {
    street: 'Av. Winston Churchill, 1824 — Sala 219',
    neighborhood: 'Capão Raso',
    city: 'Curitiba',
    state: 'PR',
    zip: '81130-000',
    full: 'Av. Winston Churchill, 1824 — Sala 219, Capão Raso, Curitiba — PR, 81130-000 (frente ao Terminal Pinheirinho)',
  },

  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  social: {
    instagram: null,
    facebook: null,
    youtube: null,
  },

  stats: [
    { value: 5.0, suffix: '', label: 'Avaliação dos pacientes' },
    { value: 6, suffix: '', label: 'Especialidades no mesmo lugar' },
    { value: 98, suffix: '%', label: 'Indicariam a clínica' },
    { value: 1, suffix: '', label: 'Canal direto no WhatsApp' },
  ],

  manifesto:
    'Acolhimento de verdade: escuta atenta, linguagem simples e um plano que respeita a sua rotina. Saúde bucal com cuidado humanizado — da prevenção à reabilitação.',

  principles: [
    {
      title: 'Acolhimento humanizado',
      text: 'Consultas sem pressa e sem jargão. Você entende o que está acontecendo e se sente à vontade para perguntar.',
    },
    {
      title: 'Plano transparente',
      text: 'Cada etapa com escopo e valor claros antes de começar. Sem surpresas na conta.',
    },
    {
      title: 'Odontologia integrada',
      text: 'Clínico geral, ortodontia, implantes, próteses, toxina botulínica e clareamento — no mesmo endereço.',
    },
    {
      title: 'WhatsApp sempre perto',
      text: 'Dúvidas, agendamentos e retornos com resposta humana, no canal que você já usa.',
    },
  ],
}

export const services = [
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description: 'Avaliação completa, prevenção e o reparo do que já deu problema.',
    detail:
      'Consulta cuidadosa de entrada, exame clínico e plano preventivo. Você sai com o mapa da sua boca e a ordem ideal de tratamento.',
    topics: ['Avaliação', 'Prevenção', 'Restaurações', 'Limpeza'],
    icon: 'tooth',
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    description: 'Alinhamento com planejamento claro, no ritmo da sua rotina.',
    detail:
      'Aparelho ou alinhadores conforme o caso. Você vê o caminho antes de começar — com acompanhamento próximo.',
    topics: ['Alinhadores', 'Aparelho fixo', 'Planejamento'],
    icon: 'braces',
  },
  {
    id: 'implantes',
    title: 'Implantodontia',
    description: 'Reabilitação guiada, do planejamento à coroa definitiva.',
    detail:
      'Planejamento cuidadoso, prótese provisória quando o caso permite e acompanhamento no pós.',
    topics: ['Cirurgia', 'Prótese sobre implante', 'Reabilitação'],
    icon: 'implant',
  },
  {
    id: 'proteses',
    title: 'Próteses',
    description: 'Coroas, pontes e próteses pensadas para função e estética.',
    detail:
      'Materiais e encaixe pensados para mastigar bem e ficar natural. Ajustes com acompanhamento próximo.',
    topics: ['Coroas', 'Pontes', 'Prótese removível'],
    icon: 'smile',
  },
  {
    id: 'toxina',
    title: 'Toxina botulínica',
    description: 'Protocolos faciais com critério clínico e resultado natural.',
    detail:
      'Avaliação facial integrada à odontologia. Indicação clara do que faz sentido para o seu caso — sem exagero.',
    topics: ['Avaliação facial', 'Protocolos', 'Acompanhamento'],
    icon: 'child',
  },
  {
    id: 'clareamento',
    title: 'Clareamento',
    description: 'Protocolo dosado para clarear sem sensibilidade excessiva.',
    detail:
      'Medimos a cor inicial, tratamos sensibilidade e ajustamos a concentração por sessão.',
    topics: ['Consultório', 'Caseiro', 'Manutenção'],
    icon: 'sparkle',
  },
]

export const ticker = [
  'Capão Raso · Curitiba',
  'Clínico geral',
  'Ortodontia',
  'Implantes e próteses',
  'Toxina botulínica',
  'Clareamento',
  'WhatsApp direto',
]

export const team = [
  {
    id: 'gabriela-guimaraes',
    name: 'Dra. Gabriela Guimarães',
    role: 'Cirurgiã-dentista',
    tag: 'Condução clínica',
    category: 'clinical',
    photo: null,
    bio: 'Responsável pela Gabriela Guimarães Odontologia Integrada no Capão Raso. Atendimento acolhedor, multi-especialidade e foco em planos claros para a família.',
    formation: 'CRO-PR · Odontologia',
    specialties: ['Clínica Geral', 'Ortodontia', 'Implantodontia', 'Próteses'],
    funFact: 'Gosta de explicar cada passo com calma — o paciente sai sabendo o porquê.',
    showWhatsApp: true,
  },
  {
    id: 'recepcao',
    name: 'Recepção',
    role: 'Atendimento',
    tag: 'Primeiro contato',
    category: 'admin',
    photo: null,
    bio: 'Organiza a agenda e responde o WhatsApp com o mesmo tom acolhedor da clínica.',
    formation: 'Atendimento ao paciente',
    specialties: ['Agendamento', 'Acolhimento'],
    funFact: 'Quase sempre responde antes de você sair de casa.',
    showWhatsApp: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Paciente Capão Raso',
    rating: 5,
    text: 'Ambiente acolhedor e atendimento humanizado. Saí da consulta entendendo o plano inteiro, sem pressa.',
    treatment: 'Avaliação',
    year: '2025',
  },
  {
    id: 2,
    name: 'Paciente Curitiba',
    rating: 5,
    text: 'Fiz o planejamento de implante com clareza de prazo e valor. Recomendo pela atenção e pelo carinho no atendimento.',
    treatment: 'Implantodontia',
    year: '2025',
  },
  {
    id: 3,
    name: 'Paciente Pinheirinho',
    rating: 5,
    text: 'Clínica limpa, equipe atenciosa e WhatsApp que realmente responde. Ideal para quem busca cuidado de família.',
    treatment: 'Clareamento',
    year: '2024',
  },
]
