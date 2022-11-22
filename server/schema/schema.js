const Subject = require("../models/Subject");
const IndexCard = require("../models/IndexCard");

const { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// IndexCard Type
const IndexCardType = new GraphQLObjectType({
  name: "IndexCard",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    subject: {
      type: SubjectType,
      resolve(parent, args) {
        return Subject.findById(parent.subjectId);
      },
    },
  }),
});

// Subject Type
const SubjectType = new GraphQLObjectType({
  name: 'Subject',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    indexCards: {
      type: new GraphQLList(IndexCardType),
      resolve(parent, args) {
        return IndexCard.find();
      }
    },
    indexCard: {
      type: IndexCardType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return IndexCard.findById(args.id);
      },
    },
    subjects: {
      type: new GraphQLList(SubjectType),
      resolve(parent, args) {
        return Subject.find();
      },
    },
    subject: {
      type: SubjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Subject.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation,
});