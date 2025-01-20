import { Schema, model } from "mongoose";

 const brandsSchema = Schema({
    nameBrand: String,
    description: String,
    productionDate: Date,
    srcImg: String,
    price: Number,
    categories: [String]
})

export const brandsModel = model("brands", brandsSchema);
