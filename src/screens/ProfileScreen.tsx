import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Meu Perfil
        </Text>
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-gray-600 text-center">
            Perfil em desenvolvimento...
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Aqui ficarão as informações do usuário e configurações
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}