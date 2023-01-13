import mongoose from "mongoose";

export const Connection=async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-xduuc78-shard-00-00.rle2spy.mongodb.net:27017,ac-xduuc78-shard-00-01.rle2spy.mongodb.net:27017,ac-xduuc78-shard-00-02.rle2spy.mongodb.net:27017/ecommerce-website?ssl=true&replicaSet=atlas-1nlhha-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database');
    }
}

export default Connection;