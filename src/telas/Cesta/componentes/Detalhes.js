import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png";

export default function Detalhes() {
    return (
      <>
        <Text style={estilo.nome}>Cesta de Verduras</Text>
        <View style={estilo.fazenda}>
          <Image source={logo} style={estilo.imagemFazenda} />
          <Texto style={estilo.nomeFazenda}>Gui Farm</Texto>
        </View>
        <Texto style={estilo.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha.
        </Texto>
        <Text style={estilo.preco}>R$40,00</Text>
      </>
    );
}
estilo = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#464646",
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  fazenda: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});