import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  titulo: {
    type: String,
  },
  conteudo: {
    type: String,
  },
  comentarios: [
    {
      nome: {
        type: String,
      },
      conteudo: {
        type: String,
      }
    }
  ]
});