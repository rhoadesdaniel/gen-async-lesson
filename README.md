# gen-async-lesson
A lesson on Callbacks, Promises, Async Await, Fetch

# Getting Started

1. Select one group member to be the coder for the group, the coder will follow the following instructions with the help of the group:
    * FORK this repository onto your github
    * Copy the https URL from your FORKED repo
    * Navigate to Git Bash on your local machine and `cd` to a place you wish to clone this activity to work on it
    * Once where you need to be in bash, run `git clone ` followed by the URL you copied from your forked copy of this github repository
    * Open VSCode, select `File` in the top right, and select `Open Folder` 
    * Find the folder you cloned named `PracticeWithFunctions` and open it, then begin working in the `app.js` file while using the instructions below.

2. Work together to solve step of this activity, one by one. If you get stuck, don't forget to use your Google-Fu and problem solving skills. TA's will be hopping into each room to check in, message one of us on Slack for specific help.

3. When your team is finished with the activity, submit a pull request from your fork!

4. At the end of the allotted time, we will go over this exercise step by step. Group members are expected to raise their hands and guide the class through each solution.

----------------------------------------------------------------------

# Activity Instructions

## Before proceeding to step 1, please look through ALL of the code in the `app.js` file to be aquainted with the project, and have a grasp of the content before you dive in.

### 1. getInitialPosts 
  - Navigate to the getInitialPosts method inside of the `API()` class in `app.js`
  - Make a fetch call within `getInitialPosts()` using the provided URL and options property values as arguments (You can use traditional promise handling with .then() and .catch() or async await)
  - When the fetch is successful, console.log 'Retrieved Posts from API!', and set the data property of the returned response to the class `_posts` property
  - Handle any possible error accordingly, and console.log it
  Hint: Remember that fetch already returns a promise, so you don't have to wrap it in one like the `getPosts()` method shows.

### 2. addPost
  - Navigate to the `addPost()` method inside of the `API()` class
  - Write code to add new post data to the posts property array
  

### 3. deletePost
  -Navigate to the `deletePost()` method inside of the `API()` class
  -Inside this method, check the condition of (deletedPost) - if truthy, resolve the promise with the deletedPost
  - Otherwise, reject with an error if there is one


### 4. start
  -Navigate to the `start()` function within `app.js`
  - Run the `getPosts()` method on the class api, and handle the pending promise
  -If successful, log the data followed by a string `------------------` to seperate information
  -Loop through each array value and run the defined `printPostRow()` function, passing in each post as an argument, and log another `-------------` still within the loop to seperate each post
  -Lastly, catch an error is there is one, and console.log it

### 5. addANewPost
   -Navigate to the `addANewPost()` function
  - Run the class api `addPost()` method and pass in the object argument value:
    {
      owner: {
        firstName: firstInput,
        lastName: lastInput,
      },
      text: postInput,
    }
    
  - Handle the pending Promise by
    running the `getPosts()` method again if the promise is fulfilled to retrieve a new snapshot with the new post added
  - If successful log a text string `-----------------` then loop through each array value and run the defined `printPostRow()` function, passing in each post as an argument, and log another `-------------` still within the loop to seperate each post
  - Lastly, catch an error is there is one, and console.log it

### 6. deleteAPost
  - Navigate to the `deleteAPost()` function
  - Run the class api `deletePost()` method and handle the pending Promise
  - In the successful callback run the `getPosts()` method again to gain a new snapshot of the posts data and
  - If successful log a text string `-----------------` then loop through each array value and run the defined `printPostRow()` function, passing in each post as an argument, and log another `-------------` still within the loop to seperate each post
  - Lastly, catch an error is there is one, and console.log it


*** Bonus use Async / Await to handle Promises and chaining where possible ***
