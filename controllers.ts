interface Post {
  isbn: string;
  author: string;
  title: string;
  body: string;
}

let posts: Array<Post> = [{
  isbn: "1",
  author: "Robin Wieruch",
  title: "The Road to React",
  body:
    "React is a Javascript Library that allows user interface to be built with much flexibility",
}, {
  isbn: "2",
  author: "Kyle Simpson",
  title: "You Don't Know JS: Scope & Closures",
  "body": "Javascript is a loosely typed language",
}, {
  isbn: "3",
  author: "Andreas A. Antonopoulos",
  title: "Mastering Bitcoin",
  "body": "Bitcoin is a cryptocurrency based on the bitcoin technology",
}];

const searchPostByIsbn = (isbn: string): (Post | undefined) =>
  posts.filter((post) => post.isbn === isbn)[0];

const getPosts = ({ response }: { response: any }) => {
  response.body = posts;
};

const getPost = (
  { params, response }: { params: { isbn: string }; response: any },
) => {
  const post: Post | undefined = searchPostByIsbn(params.isbn);
  if (post) {
    response.status = 200;
    response.body = post;
  } else {
    response.status = 404;
    response.body = { message: `Post not found.` };
  }
};

const addPost = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const post: Post = body.value;
  const newPost = [...posts, post];
  response.status = 201;
  response.body = newPost;
};

const updatePost = async (
  { request, params, response }: {
    request: any;
    params: { isbn: string };
    response: any;
  },
) => {
  let post: Post | undefined = searchPostByIsbn(params.isbn);
  if (post) {
    const body = await request.body();
    const updateInfos: { author?: string; title?: string; body?: string } =
      body.value;
    post = { ...post, ...updateInfos };
    posts = [...posts.filter((post) => post.isbn !== params.isbn), post];
    response.status = 200;
    response.body = { message: "OK" };
  } else {
    response.status = 404;
    response.body = { message: "Post not found" };
  }
};

const deletePost = async (
  { params, response }: { params: { isbn: string }; response: any },
) => {
  let post: Post | undefined = searchPostByIsbn(params.isbn);
  if (post) {
    posts = [...posts.filter((post) => post.isbn !== params.isbn)];
    response.status = 200;
    response.body = posts;
  } else {
    response.status = 404;
    response.body = { message: "Post not found" };
  }
};

export { getPosts, getPost, addPost, updatePost, deletePost };
