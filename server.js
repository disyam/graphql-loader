const { ApolloServer, gql } = require("apollo-server");
const dataloader = require("dataloader");

const { Character, Quote } = require("./models");

const loaders = () => ({
  getCharacterByIdLoader: new dataloader(async characterIds => {
    const rows = await Character.findAll({ where: { id: characterIds } });
    const characters = rows.reduce(
      (acc, row) => acc.set(row.id, row),
      new Map()
    );
    return characterIds.map(id =>
      characters.has(id) ? characters.get(id).get({ plain: true }) : null
    );
  })
});

const typeDefs = gql`
  type Character {
    id: String!
    name: String!
    quotes: [Quote!]!
  }
  type Quote {
    id: String!
    text: String!
    character: Character!
  }
  type Query {
    characters: [Character!]!
    character(id: String!): Character!
    quotes: [Quote!]!
    quote(id: String!): Quote!
  }
  schema {
    query: Query
  }
`;

const resolvers = {
  Query: {
    characters: () => Character.findAll(),
    character: (obj, { id }) => Character.findByPk(id),
    quotes: () => Quote.findAll(),
    quote: (obj, { id }) => Quote.findByPk(id)
  },
  Character: {
    quotes: obj => Quote.findAll({ where: { characterId: obj.id } })
  },
  Quote: {
    character: obj => Character.findByPk(obj.characterId)
    // character: (obj, args, { loader: { getCharacterByIdLoader } }) =>
    //   getCharacterByIdLoader.load(obj.characterId)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    loader: loaders()
  })
});

server.listen().then(({ url }) => {
  console.info(`listening at ${url}`);
});
