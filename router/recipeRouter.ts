import { Router } from "express";
import { User, Recipe } from "../types";
import { getRecipes, createRecipe, getRecipeById } from "../database";

export default function recipeRouter() {
    const router = Router();

    router.get("/", (req, res) => {
        res.redirect("/recipes");
    });

    router.get("/recipes", (req, res) => {
        // TODO: Gebruik een query `q` om te zoeken naar recepten waarvan de query voorkomt in de naam van het recept of in de ingredientenlijst.
        // TODO: Gebruik een query `sortField` om te sorteren op een bepaald veld.
        // TODO: Gebruik/maak hiervoor de nodige functies in de `database.ts` file. We gebruiken dus database filtering en sorting via mongodb, dus geen JavaScript filtering en sorting.
        // TODO: Render de `recipes` view met de gevonden recepten en de zoekterm.
        
    });

    router.get("/add-recipe", (req, res) => {
        const recipeCategories = [
            "Voorgerechten",
            "Hoofdgerechten",
            "Nagerechten",
            "Soepen",
            "Salades",
            "Ontbijtgerechten",
            "Snacks en hapjes",
            "Vegetarische gerechten",
            "Veganistische gerechten",
            "Kipgerechten",
            "Vleesgerechten",
            "Vis en zeevruchten",
            "Pasta en noedels",
            "Rijstgerechten",
            "Pizza's",
            "Brood en bakwaren",
            "Dranken",
            "Gezonde recepten",
            "Barbecuegerechten",
            "Stoofschotels",
            "Internationale gerechten",
            "Kindvriendelijke gerechten",
            "Snel en gemakkelijk",
            "Budgetvriendelijk",
            "Glutenvrij",
            "Lactosevrij",
            "Feestgerechten",
            "Comfort food",
          ];
        // TODO: Toon het formulier om een nieuw recept toe te voegen via de `add-recipe` view.
        // TODO: Gebruik de `categories` array om de mogelijke categorieën in een dropdown te tonen.
        res.render("add-recipe", { recipeCategories });
    });
    
    router.post("/add-recipe", async(req, res) => {
        // Deze code zorgt ervoor dat de ingrediëntenlijst wordt omgezet naar een array van ingrediënten.
        const rawIngredients = req.body.ingredients || "";
        const ingredientsArray = rawIngredients
            .split("\n")
            .map((ing: string) => ing.replace("\r", "").trim())
            .filter((ing: string) => ing.length > 0);

        // TODO: Haal de nodige gegevens op uit de body van de request, gebruik de `ingredientsArray` voor de ingrediënten.
        // TODO: Voeg het recept toe aan de database. Maak hiervoor de nodige functies in de `database.ts` file.
        // TODO: Redirect de gebruiker naar de `/recipes` route.
    });

    // TODO: Maak een GET route aan voor het detail van een recept. Gebruik hiervoor de `recipeDetail` view.
    router.get("/recipes/:id", async (req, res) => {
        // TODO: Haal het id op uit de request parameters.
        
        // TODO: Gebruik hiervoor de getRecipeById functie uit de `database.ts` file.
      
        // TODO: Geef de recipe terug als deze bestaat, anders render je de 404 pagina.
        
    });

    return router;
}