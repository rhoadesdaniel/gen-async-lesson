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
    
    // code goes here
    
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

      // code goes here

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

        // code goes here

      }, 500);
    });
  }
}

const api = new API();

const start = async () => {
  await api.getInitialPosts();

  // code goes here

};

const addANewPost = () => {
  const firstInput = prompt('What is your first name?').trim();
  const lastInput = prompt('What is your last name?').trim();
  const postInput = prompt('What would you like to post?').trim();
  if (firstInput && lastInput && postInput) {
    
    // code goes here

  }
};

const deleteAPost = () => {
  
  // code goes here

};

// a utility function just to print individual posts to the console
const printPostRow = (post) => {
  console.log(`Left By: ${post.owner.firstName} ${post.owner.lastName}`);
  console.log(`Message: ${post.text}`);
};

// dont worry about these statements will go over soon allow our buttons
// to click and trigger these functions
document
  .querySelector('span:nth-child(1)')
  .addEventListener('click', addANewPost);
document
  .querySelector('span:nth-child(2)')
  .addEventListener('click', deleteAPost);

// starting our app
start();
