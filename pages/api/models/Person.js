import mongoose,{ Schema } from "mongoose";


const personSchema = new Schema({
    name: String,
    age:String,
})

export const Person = mongoose.model("Person",personSchema)