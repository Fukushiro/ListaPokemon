import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
interface Pessoa {
  nome: string;
  idade: number;
}

const joao: Pessoa = {
  nome: 'joao',
  idade: 21,
};
export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
