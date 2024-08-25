Tasks:
- Define 5 different REST resources in JSON format
- Creating a REST API for one of the defined resources
- Make v1 and v2 

Bonus: Added "nodemon" to devDependencies to run the server while we are 
making changes without restarting the server manually

Instructions on how to test the routes with Postman:
1. Make sure that the website is working
- Open Postman.
- Select GET from the dropdown.
- Enter http://localhost:3000/recipes in the URL bar.
- Click "send".
- You should see the list of recipes in your data.json file.

2. How to add a new recipe:
- Select POST from the dropdown.
- Enter http://localhost:3000/recipes in the URL bar.
- Go to the Body tab.
- Select raw and choose JSON from the dropdown.
- Add a random recipe in JSON format
- Click "send"
- The new recipe should be added.