const api = new API();

const start = async () => {
  await api.getInitialPosts();

  // code goes here

};

const addANewPost = () => {
  const firstInput = prompt('What is your first name?');
  const lastInput = prompt('What is your last name?');
  const postInput = prompt('What would you like to post?');
  if (firstInput && lastInput && postInput) {
    
    // code goes here

  }
};

const deleteAPost = () => {
  
  // code goes here

};

// This is a utility function to print individual posts to the console
const printPostRow = (post) => {
  console.log(`Left By: ${post.owner.firstName} ${post.owner.lastName}`);
  console.log(`Message: ${post.text}`);
};

// Don't worry about the statements below, we will go more into how these work on Monday
// These trigger the functions when the button is clicked in the HTML
document
  .querySelector('span:nth-child(1)')
  .addEventListener('click', addANewPost);
document
  .querySelector('span:nth-child(2)')
  .addEventListener('click', deleteAPost);

// starting our app
start();
