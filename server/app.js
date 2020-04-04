const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
mongoose.connect("mongodb://localhost:27017/graphql");
mongoose.connection.once("open", () =>
  console.log(`sucessfully connected mango db`)
);
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => console.log(`application is running on port 30000`));
