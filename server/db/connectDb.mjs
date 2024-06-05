import mongoose from "mongoose";

export function ConnectDb(URL) {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await mongoose.connect(URL);
                resolve("connected")
            
        } catch (error) {
            console.log(error);
            reject("not connected")
        }
            
    });
}
