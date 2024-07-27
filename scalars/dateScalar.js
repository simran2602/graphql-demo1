const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar type',
  parseValue(value) {
    return new Date(value); // Value from the client
  },
  serialize(value) {
    return value.toISOString(); // Value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // AST value is always in string format
    }
    return null;
  }
});

module.exports = dateScalar;