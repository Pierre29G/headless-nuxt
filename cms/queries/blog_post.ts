export default gql`
query BlogPost {
    allBlogPosts {
      content
      blogTitle
      blogSlug
      id
      _createdAt
      _allContentLocales {
        value
      }
      _seoMetaTags {
        content
        attributes
      }
      _status
    }
}`