import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import recipeRouter from "./router/recipeRouter";
import { loginMiddleware } from "./middleware/loginMiddleware";

// TODO: Importeer de routers, middleware en session module.

// TODO: Importeer de connect functie uit de database module


dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());

// TODO: Voeg missende session middleware toe

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

// TODO: Voeg de routers toe met bijbehorende middleware.

// TODO: Zorg ervoor dat de gebruiker wordt geredirect naar de `/` route als de gebruiker een onbestaande route bezoekt.

app.listen(app.get("port"), async() => {
    // TODO: Zorg ervoor dat de connectie met de database wordt gemaakt. Gebruik hiervoor de connect functie uit de database module.

    console.log("Server started on http://localhost:" + app.get("port"));
});