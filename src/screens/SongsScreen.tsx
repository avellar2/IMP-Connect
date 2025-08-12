import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function SongsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Músicas
        </Text>
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-gray-600 text-center">
            Tela de músicas em desenvolvimento...
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Aqui ficará o repertório completo com cifras, tons e áudios
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}