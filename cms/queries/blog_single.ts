export default gql`
query BlogSingle($slugUrl : String) {
  recipe(filter: {slugUrl: {eq: $slugUrl}}) {
    id
    recipeImg {
      url
      title
      tags
    }
    slugUrl
    ingredients {
      id
      name
      value
    }
    instructions {
      img {
        url
      }
      instruction {
        value
      }
    }
    title
  }
}`