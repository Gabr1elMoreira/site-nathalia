
import { Service, Testimonial, Course } from './types';

export const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Agendamento', href: '#schedule' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Volume Brasileiro',
    description: 'Técnica popular que proporciona volume moderado e aspecto de rímel, mantendo a leveza.',
    fullDescription: 'A técnica queridinha do momento! O Volume Brasileiro utiliza fios tecnológicos em formato de Y, que proporcionam um preenchimento maior que o clássico, mas sem o peso do volume russo. O resultado é um olhar marcante, com efeito de rímel intenso e ótima retenção.',
    duration: '2 horas',
    maintenance: '15 a 20 dias',
    image: 'VolumeBrasileiro.jpg',
    priceEstimate: 'R$ 120,00'
  },
  {
    id: '2',
    title: 'Volume Brasileiro Marrom',
    description: 'Técnica popular que proporciona volume moderado e aspecto de rímel, mantendo a leveza.',
    fullDescription: 'A técnica queridinha do momento! O Volume Brasileiro utiliza fios tecnológicos em formato de Y, que proporcionam um preenchimento maior que o clássico, mas sem o peso do volume russo. O resultado é um olhar marcante, com efeito de rímel intenso e ótima retenção.',
    duration: '2 horas',
    maintenance: '15 a 20 dias',
    image: 'VolumeBrasileiroMarrom.jpeg',
    priceEstimate: 'R$ 130,00'
  },


  {
    id: '3',
    title: 'Volume Egípcio',
    description: 'Fios em formato de W que criam um olhar marcante com densidade e sofisticação.',
    fullDescription: 'Para quem ama volume e sofisticação. Utilizamos fios tecnológicos em formato de W (três fios unidos na base). Essa técnica cobre pequenas falhas naturais e entrega um olhar denso, escuro e delineado, ideal para quem busca destaque total.',
    duration: '2h 30min',
    maintenance: '20 a 25 dias',
    image: 'Egipcio.jpg',
    priceEstimate: 'R$ 130,00'
  },

  {
    id: '4',
    title: 'Volume Egípcio Marrom',
    description: 'Fios em formato de W que criam um olhar marcante com densidade e sofisticação.',
    fullDescription: 'Para quem ama volume e sofisticação. Utilizamos fios tecnológicos em formato de W (três fios unidos na base). Essa técnica cobre pequenas falhas naturais e entrega um olhar denso, escuro e delineado, ideal para quem busca destaque total.',
    duration: '2h 30min',
    maintenance: '20 a 25 dias',
    image: 'EgipcioMarrom.jpg',
    priceEstimate: 'R$ 130,00'
  },

  {


    id: '5',
    title: 'Brow Lamination',
    description: 'Alinhamento dos fios da sobrancelha para um visual mais cheio e modelado.',
    fullDescription: 'Técnica russa de reestruturação dos fios da sobrancelha. Alisamos e alinhamos os fios para que fiquem mais maleáveis, permitindo penteá-los para cima para cobrir falhas e dar aquele efeito "wild" e encorpado super moderno.',
    duration: '50 min',
    maintenance: 'Refazer a cada 30-40 dias',
    image: 'BrowLamination.jpg',
    priceEstimate: 'R$ 100,00'

  },
  {
    id: '6',
    title: 'Shine',
    description: 'A mistura de 3 técnicas e um efeito que abraça o olhar.',
    fullDescription: 'A mistura de 3 técnicas e um efeito que abraça o olhar, entregando naturalidade, sofisticação e sensualidade.',
    duration: '2 horas',
    maintenance: '15 a 20 dias',
    image: 'Shine.jpg',
    priceEstimate: 'R$ 190,00'
  },
  {
    id: '7',
    title: 'Lash Lifting',
    description: 'Tratamento dos próprios cílios naturais, curvando-os e tingindo-os. Dura até 45 dias.',
    fullDescription: 'Não é extensão, é tratamento! O Lash Lifting curva, hidrata e tinge seus próprios cílios naturais. Utilizamos produtos com vitaminas que nutrem os fios. O resultado é um olhar acordado e cílios curvadinhos como se estivesse sempre de curvex e rímel.',
    duration: '1 hora',
    maintenance: 'Refazer a cada 45 dias',
    image: 'LashLifting.jpg',
    priceEstimate: 'R$ 100,00'
  },

  {
    id: '8',
    title: 'Efeito Fox Eyes',
    description: 'Técnica que alonga e valoriza o olhar, com fios aplicados estrategicamente no canto externo.',
    fullDescription: 'Criando um efeito lifting elegante e moderno. Ideal para quem busca um visual sofisticado, marcante e cheio de personalidade.',
    duration: '1 hora',
    maintenance: 'Refazer a cada 45 dias',
    image: 'FoxEyes.jpeg',
    priceEstimate: 'R$ 130,00'
  },

  {
    id: '9',
    title: 'Clássico Fio a Fio',
    description: 'Aplicação de um fio sintético sobre cada fio natural. Resultado ultra natural e elegante.',
    fullDescription: 'A elegância da naturalidade. Nesta técnica, acoplamos um fio de extensão para cada fio natural seu. O objetivo é alongar, curvar e dar um leve volume, imitando seus cílios naturais, porém perfeitos. Ideal para o dia a dia e para quem nunca fez extensão.',
    duration: '1h 30min',
    maintenance: '15 a 20 dias',
    image: 'Classico.jpg',
    priceEstimate: 'R$ 150,00'
  }
];

export const CONTACT_INFO = {
  whatsapp: '5561994179940',
  instagram: '@ciliosdanathii_',
  address: 'Asa Sul, Brasília - DF',
  email: 'contato@nathaliaabreu.com.br',
  calendly: 'https://calendly.com/gabrielmoreira486/30min'
};

/*
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Silva',
    comment: 'A Nathalia é impecável! O ambiente é super aconchegante e meus cílios duram muito. Não troco por nada.',
    rating: 5
  },
  {
    id: '2',
    name: 'Juliana Mendes',
    comment: 'Fiz o curso VIP e amei a didática. Hoje atendo minhas clientes com muito mais segurança. Recomendo!',
    rating: 5
  },
  {
    id: '3',
    name: 'Fernanda Costa',
    comment: 'O melhor Lash Lifting de Brasília. Meus cílios naturais ficaram enormes e super curvadinhos.',
    rating: 5
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Curso Iniciante: Lash Designer de Sucesso',
    description: 'Do zero ao profissional. Aprenda as técnicas clássicas e volume brasileiro, biossegurança e marketing.',
    highlights: ['Apostila completa', 'Certificado incluso', 'Kit iniciante', 'Suporte pós-curso'],
    image: 'https://images.unsplash.com/photo-1509631179647-b8d22038bfd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Mentoria VIP: Aperfeiçoamento em Retenção',
    description: 'Focado em profissionais que querem aumentar a durabilidade das extensões e fidelizar clientes.',
    highlights: ['Análise de cola e umidade', 'Mapping avançado', 'Prática em modelo', 'Segredos da retenção'],
    image: 'https://images.unsplash.com/photo-1600122736417-7612f0269f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1629402684877-6a16174416c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600122736417-7612f0269f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1596451676839-a9a3857d90e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-b8d22038bfd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
];
*/
