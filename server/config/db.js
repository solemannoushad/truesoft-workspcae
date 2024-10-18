import mongoose from "mongoose";

export const connectToMongo = ()=>{

    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URI)
        .then((data)=>{
            console.log(`Connected to Database with server ${data.connection.host}`);
        })
    } catch (err) {
        console.log(err)
    }
    
}
