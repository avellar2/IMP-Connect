import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Meu Perfil
        </Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            Perfil em desenvolvimento...
          </Text>
          <Text style={styles.subtext}>
            Aqui ficarão as informações do usuário e configurações
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 16,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 16,
    elevation: 1,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  text: {
    color: COLORS.text.secondary,
    textAlign: 'center',
  },
  subtext: {
    color: COLORS.text.light,
    textAlign: 'center',
    marginTop: 8,
  },
});