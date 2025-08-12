import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header com gradiente */}
      <LinearGradient
        colors={COLORS.gradients.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <Image 
            source={require('../../assets/logo_branco.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>IMP Connect</Text>
        </View>
      </LinearGradient>

      {/* Content */}
      <View style={styles.content}>
        {/* Seção rápida */}
        <View style={styles.quickSection}>
          <Text style={styles.sectionTitle}>Acesso Rápido</Text>
          <View style={styles.quickGrid}>
            <TouchableOpacity style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickIconText}>📅</Text>
              </View>
              <Text style={styles.quickTitle}>Escalas</Text>
              <Text style={styles.quickSubtitle}>Próximas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickIconText}>🎵</Text>
              </View>
              <Text style={styles.quickTitle}>Músicas</Text>
              <Text style={styles.quickSubtitle}>Repertório</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickIconText}>📻</Text>
              </View>
              <Text style={styles.quickTitle}>Rádio</Text>
              <Text style={styles.quickSubtitle}>Ao vivo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickIconText}>👤</Text>
              </View>
              <Text style={styles.quickTitle}>Perfil</Text>
              <Text style={styles.quickSubtitle}>Configurar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards principais */}
        <View style={styles.mainSection}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          
          <TouchableOpacity style={styles.featureCard}>
            <LinearGradient
              colors={['#E53E3E', '#C53030']}
              style={styles.featureGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.featureTitle}>Próximo Culto</Text>
              <Text style={styles.featureSubtitle}>Domingo, 9h00 - Culto Matinal</Text>
              <Text style={styles.featureAction}>Ver detalhes →</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle2}>Música da Semana</Text>
              <Text style={styles.featureSubtitle2}>Como Zaqueu - Aline Barros</Text>
              <Text style={styles.featureAction2}>Ouvir agora →</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Header styles
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: -20,
  },
  headerTitle: {
    color: COLORS.text.inverse,
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },

  // Content styles
  content: {
    flex: 1,
    paddingTop: 25,
  },

  // Quick section
  quickSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  quickIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickIconText: {
    fontSize: 24,
  },
  quickTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  quickSubtitle: {
    fontSize: 12,
    color: COLORS.text.secondary,
  },

  // Main section
  mainSection: {
    paddingHorizontal: 20,
  },
  featureCard: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  featureGradient: {
    padding: 25,
  },
  featureTitle: {
    color: COLORS.text.inverse,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureSubtitle: {
    color: COLORS.text.inverse,
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 15,
  },
  featureAction: {
    color: COLORS.text.inverse,
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.8,
  },
  featureContent: {
    backgroundColor: COLORS.surface,
    padding: 25,
  },
  featureTitle2: {
    color: COLORS.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureSubtitle2: {
    color: COLORS.text.secondary,
    fontSize: 16,
    marginBottom: 15,
  },
  featureAction2: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '600',
  },
});