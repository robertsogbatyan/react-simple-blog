class BlogService {

  public static getBlogPosts() {
    return fetch('http://reduxblog.herokuapp.com/api/posts')
    .then(() => {
      debugger;
    })
  }

}

export default BlogService;
