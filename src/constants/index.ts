// Constantes da aplicação
export const APP_NAME = 'IMP Connect';
export const APP_VERSION = '1.0.0';
export const CHURCH_NAME = 'Igreja Metodista em Pantanal';

// Cores do tema
export const COLORS = {
  primary: '#3B82F6',
  secondary: '#10B981',
  accent: '#F59E0B',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    light: '#9CA3AF',
  },
  error: '#EF4444',
  warning: '#F59E0B',
  success: '#10B981',
  info: '#3B82F6',
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