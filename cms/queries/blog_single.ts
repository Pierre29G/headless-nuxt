export default gql`
query BlogSingle {
  allRecipes {
    id
    title
    slugUrl
    slug {
      description
      title
      twitterCard
    }
    _status
    _firstPublishedAt
    recipeImg{
      url
    }
  }
  _allRecipesMeta {
    count
  }
}`