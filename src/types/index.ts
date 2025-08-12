// Tipos do usuário
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'musician' | 'visitor';
  instruments?: string[];
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de música
export interface Song {
  id: string;
  title: string;
  artist: string;
  key: string;
  lyrics?: string;
  chords?: string;
  tags?: string[];
  audioUrl?: string;
  backingTrackUrl?: string;
  bibleVerse?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de escala
export interface Scale {
  id: string;
  date: Date;
  serviceType: 'morning' | 'evening' | 'special';
  songs: string[]; // IDs das músicas
  participants: ScaleParticipant[];
  status: 'draft' | 'confirmed' | 'completed';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ScaleParticipant {
  id: string;
  userId: string;
  scaleId: string;
  instrument: string;
  confirmationStatus: 'pending' | 'confirmed' | 'declined';
  notes?: string;
}

// Tipos de roles
export type UserRole = 'admin' | 'musician' | 'visitor';

// Tipos de navegação
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Songs: undefined;
  Scales: undefined;
  Radio: undefined;
  Profile: undefined;
};