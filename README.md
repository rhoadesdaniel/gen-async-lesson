# gen-async-lesson
A lesson on Callbacks, Promises, Async Await, Fetch

[Google Slides](https://docs.google.com/presentation/d/1KdKFBntJypRml36RHKzgr6-77YS5rh9wR229eErNW5A/edit#slide=id.p1)

-   getInitialPosts 
  
    use either traditional promise handling with .then and .catch or more modern async
    handling with async await to make a fetch to the above api
    by providing the url and options property values as arguments to the fetch call

    to return a post data response for our app and
    console log 'Retrieved Posts from API!', and set the data property of the
    returned response to the class _posts property
    
    console log an error if there is one
    
    take note that fetch already returns a Promise so dont have to
    wrap with a new one as seen below

- addPost
  
  add the new post data to the posts property array

- deletePost

   resolve the Promise with the deletedPost if successful
   by checking the condition (deletedPost) to check if its not null
   or undefined falsy value
   
   reject with an error if there is one

- start
    run the class api getPosts method and handle the pending Promise
  
    if successful log the data, a text string `-----------------`
    loop thru each array value and run the defined printPostRow
    passing in each post to the method
    log another text string `-----------------`
  
    last catch an error if the promise is rejected and log it

- addANewPost
   
    run the class api addPost method
    pass in the object argument value
    {
      owner: {
        firstName: firstInput,
        lastName: lastInput,
      },
      text: postInput,
    }
    
    and handle the pending Promise by
    run the getPosts method again to retrieve a new snapshot with the new post added
    
    if successful log a text string `-----------------`
    loop thru each array value and run the defined printPostRow
    passing in each post to the method
     log another text string `-----------------`
    
    last catch an error if either promise is rejected and log it

- deleteAPost
    run the class api deletePost method and
  
    handle the pending Promise
    
    in the successful callback run or invoke the getPosts method again
    to gain a new snapshot of the posts data and
    if successful log a text string `-----------------`
    loop thru each array value and run the defined printPostRow
    passing in each post to the method
    log another text string `-----------------`
    
    last catch an error if the promise is rejected and log it

- Bonus use Async / Await to handle Promises and chaining where possible