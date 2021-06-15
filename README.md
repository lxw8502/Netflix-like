# Netflix-like

A mock Netflix-like page with editable rows of titles using React.

### Requirement

The top row will be the ‘My List’ row and will display the titles included in ‘mylist’ array. The

the second row will be the recommendation row which will display the titles included in ‘recommendations’ array.

Hovering over an image in the ‘My List’ row should create a “Remove” button displayed below the image. Clicking on the button should remove the title from the “My List” row.

Hovering over an image in the recommendations row should create an “Add” button displayed below the image. Clicking on the button should add the title to the “My List” row.

The list of titles in the “My List” row should be displayed at the bottom of the page.

Remove should move the title to recommended  
Put a Netflix logo at the top left  
Ensure that an HTTP call is made to retrieve data and not use JSON file as an object with data  
Render the data with a single template only and ensure that different functions are written for the same layout for add and remove

### Explanation

This project used React and Redux to implement a Netflix-like page.

You can run this project at https://codesandbox.io/s/modest-feather-btugu and see the page at https://btugu.csb.app/

I created a mock API to fetch the data.
This mock API endpoint is https://60c91bc47dafc90017ffc23d.mockapi.io/api/v1/movies
