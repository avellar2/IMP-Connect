import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { COLORS } from '../constants';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header */}
        <View className="bg-blue-500 rounded-lg p-6 mb-4">
          <Text className="text-white text-2xl font-bold text-center">
            IMP Connect
          </Text>
          <Text className="text-white text-lg text-center mt-2">
            Igreja Metodista em Pantanal
          </Text>
        </View>

        {/* Cards de navegação rápida */}
        <View className="flex-row flex-wrap justify-between">
          <View className="bg-white rounded-lg p-4 mb-4 w-48-percent shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Próximas Escalas
            </Text>
            <Text className="text-gray-600">
              Ver escalas programadas
            </Text>
          </View>
          
          <View className="bg-white rounded-lg p-4 mb-4 w-48-percent shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Repertório
            </Text>
            <Text className="text-gray-600">
              Músicas e cifras
            </Text>
          </View>

          <View className="bg-white rounded-lg p-4 mb-4 w-48-percent shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Rádio IMP
            </Text>
            <Text className="text-gray-600">
              Ouça nossa programação
            </Text>
          </View>

          <View className="bg-white rounded-lg p-4 mb-4 w-48-percent shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Meu Perfil
            </Text>
            <Text className="text-gray-600">
              Configurações e dados
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}