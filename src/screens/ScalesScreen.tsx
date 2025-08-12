import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function ScalesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Escalas
        </Text>
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-gray-600 text-center">
            Tela de escalas em desenvolvimento...
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Aqui ficará o calendário de escalas e confirmações
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}