import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface Pessoa {
  nome: string;
  idade: number;
}

const joao: Pessoa = {
  nome: "joao",
  idade: 21,
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app! {joao.nome} voce tem{" "}
        {joao.idade} anos{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
