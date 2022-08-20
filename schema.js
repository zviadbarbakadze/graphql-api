const { gql } = require('apollo-server');
const typeDefs = gql`
  
 
  type Maincard{
    title:String!
    image:String!
  }

  type Animal{
    id:ID!
    slug:String!
    image:String!
    title:String!
    rating:Float
    price:String!
    description:[String!]!
    stock:Int!
    onSale:Boolean
     category:Category
  }

  type Category{
    id:ID!
    image:String!
    category:String!
    slug:String!
    animals:[Animal!]!

  }

  type Query {

    maincards:[Maincard]
    animals:[Animal!]!
    animal(slug:String!):Animal
    categories:[Category!]!
    category(slug:String!):Category
  }
  
`
module.exports= typeDefs
   
  