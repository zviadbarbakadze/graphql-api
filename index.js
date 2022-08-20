const { ApolloServer } = require('apollo-server');
const{maincards,animals,categories}=require('./db')
const typeDefs=require('./schema')
const Category=require('./resolvers/category')

const Animal=require('./resolvers/animal')
const Query=require('./resolvers/query')


  



  const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Animal,
        Category,
        
    },
    context:{
        animals,
        categories,
        maincards
    },
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });