import { Person } from "../models/Person";

export const resolvers = {
  Query: {
    people: async () => {
      return await Person.find({});
    },
    person: async (_, {id}) => {
      return await Person.findOne({
        _id:id,
      });
    },
  },
  Mutation: {
    createPerson: async (parent, { name, age }, ctx, info) => {
      const user = new Person({
        name,
        age,
      });

      return await user.save();
    },
  },
};
