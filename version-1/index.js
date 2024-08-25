const express = require("express");
const { getRecipes, addRecipe, updateRecipe, deleteRecipe } = require("./handlers/recipes.js");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", addRecipe);
app.put("/recipes/:id", updateRecipe);
app.delete("/recipes/:id", deleteRecipe);

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to the page");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));