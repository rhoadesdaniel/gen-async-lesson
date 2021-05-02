const start = async () => {
  api
    .getPosts()
    .then((currentPosts) => {
      console.log(currentPosts);
      console.log(`-----------------`)
      currentPosts.forEach((post) => {
        printPostRow(post);
      });
      console.log(`-----------------`)
    })
    .catch((err) => {
      document.write(err);
    });
};

const addANewPost = () => {
  api
    .addPost({
      owner: {
        firstName: 'Jon',
        lastName: 'Jackson',
      },
      text: 'My Siberian Husky',
    })
    .then(() => {
      api.getPosts().then((currentPosts) => {
        console.log(`-----------------`)
        currentPosts.forEach((post) => {
          printPostRow(post);
        });
        console.log(`-----------------`)
      });
    });
};

const deleteAPost = () => {
    api
    .deletePost()
    .then((removedPost) => {
        console.log(removedPost);
        api.getPosts().then((currentPosts) => {
            console.log(`-----------------`)
            currentPosts.forEach((post) => {
            printPostRow(post);
            });
            console.log(`-----------------`)
        });
    });
}

const printPostRow = (post) => {
  console.log(`Left By: ${post.owner.firstName} ${post.owner.lastName}`);
  console.log(`Message: ${post.text}`)
};

start();



document.querySelector('span:nth-child(1)').addEventListener('click', addANewPost);
document.querySelector('span:nth-child(2)').addEventListener('click', deleteAPost);
