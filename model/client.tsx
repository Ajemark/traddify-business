import { Schema, models, model } from "mongoose";

const clientSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    country: String,
    date: String,
    password: String
})

const Client = models.client || model("client", clientSchema)
export default Client