const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  mongoose.connect(
    process.env.DATABASE_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };

module.exports = connectDatabase;
