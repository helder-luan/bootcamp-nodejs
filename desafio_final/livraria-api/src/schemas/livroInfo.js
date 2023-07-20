import mongoose from "mongoose";

export const livroInfoSchema = new mongoose.Schema({
  livroId: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  descricao: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  paginas: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  editora: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  avaliacoes: [ avaliacaoSchema ]
});

const avaliacaoSchema = new mongoose.Schema({
  nome: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  nota: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  avaliacao: {
    type: mongoose.Schema.Types.String,
    required: true,
  }
});