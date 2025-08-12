// Constantes da aplicação
export const APP_NAME = 'IMP Connect';
export const APP_VERSION = '1.0.0';
export const CHURCH_NAME = 'Igreja Metodista em Pantanal';

// Cores do tema - Metodista Moderno
export const COLORS = {
  // Cores principais
  primary: '#1a1a1a',        // Preto mais suave
  secondary: '#FFFFFF',       // Branco
  
  // Cores secundárias  
  accent: '#E53E3E',         // Vermelho vibrante
  gray: '#718096',           // Cinza moderno
  
  // Backgrounds modernos
  background: '#FAFAFA',     // Off-white
  backgroundDark: '#121212', // Dark mode
  surface: '#FFFFFF',        // Cards
  surfaceElevated: '#FFFFFF', // Cards elevados
  
  // Gradientes
  gradients: {
    primary: ['#1a1a1a', '#2D3748'],
    accent: ['#E53E3E', '#C53030'],
    card: ['#FFFFFF', '#F7FAFC'],
  },
  
  // Borders e shadows
  border: '#E2E8F0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
  
  text: {
    primary: '#1a1a1a',      // Texto principal
    secondary: '#718096',     // Texto secundário
    muted: '#A0AEC0',        // Texto desbotado
    inverse: '#FFFFFF',      // Texto em fundo escuro
    accent: '#E53E3E',       // Texto de destaque
  },
  
  // Estados
  error: '#E53E3E',
  warning: '#ED8936',
  success: '#38A169',
  info: '#3182CE',
};

// Instrumentos disponíveis
export const INSTRUMENTS = [
  'Vocal',
  'Guitarra',
  'Contrabaixo',
  'Bateria',
  'Teclado',
  'Piano',
  'Violão',
  'Violino',
  'Saxofone',
  'Trompete',
  'Flauta',
  'Cajon',
];

// Tipos de culto
export const SERVICE_TYPES = {
  morning: 'Matinal',
  evening: 'Noturno',
  special: 'Especial',
} as const;

// Tons musicais
export const MUSICAL_KEYS = [
  'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F',
  'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
];

// Status de confirmação
export const CONFIRMATION_STATUS = {
  pending: 'Pendente',
  confirmed: 'Confirmado',
  declined: 'Recusado',
} as const;