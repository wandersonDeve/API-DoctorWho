const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(
    `process.env.mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  ),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
};

module.exports = connectDatabase;
