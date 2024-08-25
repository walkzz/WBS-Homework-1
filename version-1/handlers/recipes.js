const { readData, writeData } = require("../read-write");

async function getRecipes(req, res) {
    const data = await readData();
    res.json(data);
}

async function addRecipe(req, res) {
    const data = await readData();
    const newRecipe = req.body;
    data.push(newRecipe);
    await writeData(data);
    res.status(201).json(newRecipe);
}

async function updateRecipe(req, res) {
    const data = await readData();
    const index = data.findIndex(recipe => recipe.id === parseInt(req.params.id));
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        await writeData(data);
        res.json(data[index]);
    } else {
        res.status(404).json({ message: "Recipe not found" });
    }
}

async function deleteRecipe(req, res) {
    const data = await readData();
    const newData = data.filter(recipe => recipe.id !== parseInt(req.params.id));
    await writeData(newData);
    res.status(204).send();
}

module.exports = { getRecipes, addRecipe, updateRecipe, deleteRecipe };