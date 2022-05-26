import dotenv from "dotenv";
dotenv.config(); // Read .env file into process.env

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import errorsHandler from "./02-middleware/errors-handler";
import ErrorModel from "./03-models/error-model";
import Controller from "./06-controllers/controllers";
import config from "./01-utils/config";
import path from "path";


//const server = express();
const server = express();

if (config.isdevelopment) {
    server.use(cors());
}

server.use(express.json());


server.use("/api", Controller);



// Route not found:
server.use("*", (request: Request, response: Response, next: NextFunction) => {
    // On development - return 404 error
    if (config.isdevelopment) {
        next(new ErrorModel(404, "Route not found."));
    }
    else { // On production - return index.html to show desired page or page-not-found:
        const indexHtmlFile = path.join(__dirname, "07-frontend", "index.html");
        response.sendFile(indexHtmlFile);
    }
});
console.log("log in app");

server.use(errorsHandler);

//const httpServer = server.listen(3001, () => console.log("Listening..."));
const httpServer = server.listen(process.env.PORT, () => console.log("Listening..."));


