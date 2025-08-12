import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../constants';

// Importar ícones quando necessário
// import { Ionicons } from '@expo/vector-icons';

// Importar telas (serão criadas depois)
import HomeScreen from '../screens/HomeScreen';
import SongsScreen from '../screens/SongsScreen';
import ScalesScreen from '../screens/ScalesScreen';
import RadioScreen from '../screens/RadioScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Tipos de navegação
export type RootTabParamList = {
  Home: undefined;
  Songs: undefined;
  Scales: undefined;
  Radio: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  SongDetails: { songId: string };
  ScaleDetails: { scaleId: string };
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Navegação por Tabs
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.text.muted,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8,
          height: 85,
          shadowColor: COLORS.shadowDark,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Songs"
        component={SongsScreen}
        options={{
          title: 'Músicas',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scales"
        component={ScalesScreen}
        options={{
          title: 'Escalas',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Radio"
        component={RadioScreen}
        options={{
          title: 'Rádio',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// Navegação Principal
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}