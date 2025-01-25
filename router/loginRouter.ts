import express from "express";
import { login } from "../database";
import { User } from "../types";
import * as jwt from "jsonwebtoken";

export default function loginRouter() {
    const router = express.Router();

    router.get("/login", (req, res) => {
        res.render("login", {
            user: null
        });
    });

    router.post("/login", async(req, res) => {
        // TODO: Implementeer de login functionaliteit. Als de gebruiker succesvol is ingelogd, moet de gebruiker worden doorgestuurd naar de homepagina. Als de gebruiker niet succesvol is ingelogd, moet de gebruiker worden doorgestuurd naar de login pagina met een foutmelding. Gebruik flash messages om de foutmelding door te geven.
        
    });

    router.get("/logout", (req, res) => {
        // TODO: Implementeer de logout functionaliteit. De gebruiker moet worden uitgelogd en worden doorgestuurd naar de login pagina.
    });

    return router;
}