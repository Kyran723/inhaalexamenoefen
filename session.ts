import { MONGODB_URI } from "./database";
import session, { MemoryStore } from "express-session";
import { User } from "./types";
import mongoDbSession from "connect-mongodb-session";
const MongoDBStore = mongoDbSession(session);

// TODO: Maak een session aan met de juiste configuratie om de gebruiker en eventuele flash messages op te slaan.

declare module "express-session" {
    export interface SessionData {
        // TODO: Voeg de benodigde properties toe aan de SessionData interface.
    }
}

export default session({
    // TODO: Haal de secret uit de dotenv file. Gebruik hiervoor SESSION_SECRET.
    secret: "my-super-secret-secret",
    resave: true,
    saveUninitialized: true
});