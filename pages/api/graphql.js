import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolver";
import Cors from "micro-cors";
import mongoose from "mongoose";

export const config = {
  api: {
    bodyParser: false,
  },
};
const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose
      .connect(
        "MONGO_URI",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Mongodb connected");
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
