import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    email: string;
    password?: string;
}

export interface Recipe {
    _id?: ObjectId;
    name: string;
    ingredients: string[];
    preparation: string;
    category: string;
    time: number;
    difficulty: number;
    image?: string;
}