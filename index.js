const express = require("express");
const app = express();

const product = require("./api/product");

const PORT = 8080 || process.env.PORT;

app.use("/api/product", product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
