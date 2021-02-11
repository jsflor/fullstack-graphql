/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input);
    },
    pet(_, { input }, { models }) {
      return models.Pet.findOne(input);
    },
  },
  Mutation: {
    newPet(_, { input }, { models }) {
      return models.Pet.create(input);
    },
  },
  Pet: {
    owner(_, __, { user }) {
      return user;
    },
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
  },
  User: {
    pets(_, __, { models }) {
      return models.Pet.findMany();
    },
  },
};
