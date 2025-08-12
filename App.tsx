import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-blue-500 items-center justify-center">
      <Text className="text-white text-2xl font-bold">
        IMP Connect - Igreja Metodista em Pantanal
      </Text>
      <Text className="text-white text-lg mt-4">
        App para Ministério de Louvor
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
