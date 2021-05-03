const start = async () => {
  // run the class api getPosts method and handle the pending Promise
  // if successful log the data, a text string `-----------------`
  // loop thru each array value and run the defined printPostRow
  // passing in each post to the method
  //  log another text string `-----------------`
  // last catch an error if the promise is rejected and log it
  api
    .getPosts()
    .then((currentPosts) => {
      console.log(currentPosts);
      console.log(`-----------------`);
      currentPosts.forEach((post) => {
        printPostRow(post);
      });
      console.log(`-----------------`);
    })
    .catch((err) => {
      document.write(err);
    });
};

const addANewPost = () => {
  // run the class api addPost method and handle the pending Promise
  // pass in the object value
  // {
  //   owner: {
  //     firstName: firstInput,
  //     lastName: lastInput,
  //   },
  //   text: postInput,
  // }
  // run the getPosts method again to retrieve a new snapshot with the new post
  // if successful log a text string `-----------------`
  // loop thru each array value and run the defined printPostRow
  // passing in each post to the method
  //  log another text string `-----------------`
  // last catch an error if the promise is rejected and log it
  const firstInput = prompt('What is your first name?').trim();
  const lastInput = prompt('What is your last name?').trim();
  const postInput = prompt('What would you like to post?').trim();
  if (firstInput && lastInput && postInput) {
    api
      .addPost({
        owner: {
          firstName: firstInput,
          lastName: lastInput,
        },
        text: postInput,
      })
      .then(() => {
        api.getPosts().then((currentPosts) => {
          console.log(`-----------------`);
          currentPosts.forEach((post) => {
            printPostRow(post);
          });
          console.log(`-----------------`);
        });
      })
      .catch((err) => {
        document.write(err);
      });
  }
};

const deleteAPost = () => {
  // run the class api deletePost method and handle the pending Promise
  // in the successful callback run or invoke the getPosts method again
  // to gain a new snapshot of the posts data and
  // if successful log a text string `-----------------`
  // loop thru each array value and run the defined printPostRow
  // passing in each post to the method
  //  log another text string `-----------------`
  // last catch an error if the promise is rejected and log it
  api
    .deletePost()
    .then((removedPost) => {
      console.log(removedPost);
      api.getPosts().then((currentPosts) => {
        console.log(`-----------------`);
        currentPosts.forEach((post) => {
          printPostRow(post);
        });
        console.log(`-----------------`);
      });
    })
    .catch((err) => {
      document.write(err);
    });
};

const printPostRow = (post) => {
  console.log(`Left By: ${post.owner.firstName} ${post.owner.lastName}`);
  console.log(`Message: ${post.text}`);
};

// starting our app
start();

// dont worry about these statements will go over soon allow our buttons
// to click and trigger these functions
document
  .querySelector('span:nth-child(1)')
  .addEventListener('click', addANewPost);
document
  .querySelector('span:nth-child(2)')
  .addEventListener('click', deleteAPost);
