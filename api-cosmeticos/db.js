require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Conectado com URL:", process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao mongoDB Atlas");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB atlas", error);
    process.exit(1);
  }
};

module.exports = connectDB;
