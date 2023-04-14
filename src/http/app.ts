import express from "express";
import { router } from "./router";





const app = express(); 




app.use(express.json());
app.use(router);



export { app };

//Gg5USwilVAqDoSdy 

//mongodb+srv://aimhema:<password>@cluster0.c2myzzf.mongodb.net/?retryWrites=true&w=majority