import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function App() {

  // definição de um array de objetos JS contendo os personagens
  const characters = [
    {id: 1, nome: "Anakin Skywalker"},
    {id: 2, nome: "Boba Fett"},
    {id: 3, nome: "C-3PO"},
    {id: 4, nome: "Chewbaca"},
    {id: 5, nome: "Darth Vader"},
    {id: 6, nome: "Han Solo"},
    {id: 7, nome: "Jar Jar Binks"},
    {id: 8, nome: "Kylo Ren"},
    {id: 9, nome: "Leia Organa"},
    {id: 10, nome: "Luke Skywalker"},
    {id: 11, nome: "Obi-Wan Kenobi"},
    {id: 12, nome: "Padmé Amidala"},
    {id: 13, nome: "Palpatine"},
    {id: 14, nome: "Qui-Gon Jinn"},
    {id: 15, nome: "R2-D2"},
    {id: 16, nome: "Rey"},
    {id: 17, nome: "Yoda"},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({item}) => <Text style={styles.item} key={item.id}>{item.nome}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
  }
});