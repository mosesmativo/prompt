import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Connecting to Mongo Database');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "musa",
            useUnifiedTopology: true,
        })
        isConnected = true;

        console.log("MongoDb Connected");

    } catch (error) {
        console.log(error);
    }
}