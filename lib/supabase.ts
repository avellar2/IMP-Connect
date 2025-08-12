import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// TODO: Substituir pelas credenciais reais do Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tipos para o banco de dados (serão definidos depois)
export type Database = {
  public: {
    Tables: {
      // Tabelas serão definidas aqui
    };
    Views: {
      // Views serão definidas aqui
    };
    Functions: {
      // Functions serão definidas aqui
    };
    Enums: {
      // Enums serão definidos aqui
    };
  };
};