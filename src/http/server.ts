import { app } from "./app";
import mongoose from 'mongoose';

app.listen(3330, ()=> console.log('rodando...')) 


mongoose.set("strictQuery", true);
 mongoose.connect(
  "mongodb+srv://aimhema:Gg5USwilVAqDoSdy@cluster0.c2myzzf.mongodb.net/?retryWrites=true&w=majority"
).then(()=> {  

  console.log("server conectado");
}) 