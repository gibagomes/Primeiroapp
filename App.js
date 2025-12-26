import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#111',
          textAlign: 'center',
        }}
      >
        Meu primeiro app com GitHub
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#ff6a00',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={() =>
          Alert.alert(
            'Funcionou!',
            'Este app está salvo no GitHub 😄'
          )
        }
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Clique aqui
        </Text>
      </TouchableOpacity>
    </View>
  );
}
