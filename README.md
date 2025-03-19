SBA 316 by Sebastian DeFrancesco

How to use: 

Let the animations finish, then click add dog, a modal should open.

Then type in your favorite breed, paste in a picture from somewhere on the web of that particular breed, and add why you like them so much, then click submit.

You can also switch between light and dark themes located at the bottom of the screen.


____


How i created this:

This is a dog application that shows you a list of my top 4 favorite dogs, and allows the user to share with me their favorites as well.

The page opens with some stagger animations for the elements on the page using a library called Anime.js. 

In the back end, i have an array of my favorite dogs, and when the page loads, they each animate into my parent container called #content.
How i achieved this was by creating a function that iterated over all the dogs in my array, and created a div element with the bootstrap class of card, where i passed in parameters to the function like the image, dog breed, and why i like them so much

Next, i created a form that was in a bootstrap modal that allows users to tell me their favorite dogs. 
The form has 3 validations on it to make sure the user cannot submit the new dog to local storage with the input blank.
two input elements are using the browser validation (requirement) and all three of the input elements are backed up by pure JS validations upon submission of the form. 

If the validations are passed, the dog is saved to localStorage (BOM), the modal is programatically closed, the user is alerted, and the new dog (bootstrap card) is rendered in a new container called user-favs using the function i made earlier called createCard.

I think added a light theme/dark theme switch to change the HTML attribute of data-bs-theme to either light or dark depending on if the input is checked, or not.



