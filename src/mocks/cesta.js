import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Gui Farm",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    preco: "R$40,00",
  },
  itens: {
    titulo: "Itens da Cesta",
    lista: [
      {
        nome: "tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};
export default cesta;
