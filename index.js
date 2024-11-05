const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4700;
app.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`);
});