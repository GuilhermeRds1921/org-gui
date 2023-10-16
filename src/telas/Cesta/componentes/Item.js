import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet } from "react-native";

export default function Item({ nome, imagem }) {
  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingBottom: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
    marginRight: 16,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    color: "#464646",
  },
});
