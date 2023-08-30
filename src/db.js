import mongoose from 'mongoose'

export const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://jesus:insoel2023@cluster0.xfbcvja.mongodb.net/?retryWrites=true&w=majority")
        console.log(">>>>Mongo conected")
    } catch(error){
        console.log(error)
    }
}