const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.tm2zqhj.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Conexão com banco de dados realizada com sucesso!')
  } catch (error) {
    console.log('Erro de conexao com banco de dados: ', error)
  }
};

module.exports = connectToDatabase;
