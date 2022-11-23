const Subject = require("../models/Subject");
const IndexCard = require("../models/IndexCard");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
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
  name: "Subject",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    indexCards: {
      type: new GraphQLList(IndexCardType),
      resolve(parent, args) {
        return IndexCard.find();
      },
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

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a subject
    addSubject: {
      type: SubjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const subject = new Subject({
          name: args.name,
        });

        return subject.save();
      },
    },

    // Delete a subject
    deleteSubject: {
      type: SubjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        IndexCard.find({ subjectId: args.id }).then((indexCards) => {
          indexCards.forEach((indexCard) => {
            indexCard.remove();
          });
        });

        return Subject.findByIdAndRemove(args.id);
      },
    },

    // Add an Index Card
    addIndexCard: {
      type: IndexCardType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "IndexCardStatus",
            values: {
              new: { value: "No clue" },
              progress: { value: "Somewhat get" },
              completed: { value: "In the bag" },
            },
          }),
          defaultValue: "No clue",
        },
        subjectId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const indexCard = new IndexCard({
          title: args.title,
          description: args.description,
          status: args.status,
          subjectId: args.subjectId,
        });

        return indexCard.save();
      },
    },

    // Delete an index card
    deleteIndexCard: {
      type: IndexCardType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return IndexCard.findByIdAndRemove(args.id);
      },
    },

    // Update an Index Card
    updateIndexCard: {
      type: IndexCardType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'IndexCardStatusUpdate',
            values: {
              new: { value: 'No clue' },
              progress: { value: 'Somewhat get' },
              completed: { value: 'In the bag' },
            },
          }),
        },
      },
      resolve(parent, args) {
        return IndexCard.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
