// A class for interacting with our https://dummyapi.io/ data
class API {
  constructor() {
    this._url = 'https://dummyapi.io/data/api/post?limit=5'; // post endpoint limit 5
    this._app_id = '608ff65ecfb4e068c46f3038'; // had to signup for a app id key
    this._options = {
      headers: { 'app-id': this._app_id }, // we have to add the cred to the headers of the req
    };
    this._posts = []; // db store property for our posts
  }
  // getters for our properties
  get url() {
    return this._url;
  }
  get options() {
    return this._options;
  }
  get posts() {
    return this._posts;
  }
  // a method for prepopulating a snapshot of posts
  // using fetch to return some post test data
  // https://www.sitepoint.com/introduction-to-the-fetch-api/
  // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
  async getInitialPosts() {
    // use either traditional promise handling with .then and .catch or more modern async
    // handling with async await to make a fetch to the above api
    // by providing the url and options property values as arguments to the fetch call
    //
    // to return a post data response for our app and
    // console log 'Retrieved Posts from API!', and set the data property of the
    // returned response to the class _posts property
    //
    // console log an error if there is one
    //
    // take note that fetch already returns a Promise so dont have to
    // wrap with a new one as seen below
  }
  getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.posts
          ? resolve(this.posts)
          : reject(new Error(`Couldn't retrieve post data!`));
      }, 1000);
    });
  }

  addPost(post) {
    return new Promise((resolve, reject) => {
      // add the new post data to the posts property array

      console.log('Post was created!');
      setTimeout(() => {
        post
          ? resolve(post)
          : reject(new Error(`Error: something went wrong!`));
      }, 500);
    });
  }

  deletePost() {
    return new Promise((resolve, reject) => {
      const deletedPost = this._posts.pop();
      console.log('Last Post was deleted!');
      setTimeout(() => {
        // resolve the Promise with the deletedPost if successful
        // by checking the condition (deletedPost) to check if its not null
        // or undefined falsy value
        //
        // reject with an error if there is one
      }, 500);
    });
  }
}

const api = new API();

const init = async () => {
  await api.getInitialPosts();
};

init();
