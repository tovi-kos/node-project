import { ObjectId } from "bson";
import { Schema, model, Types } from "mongoose";
import {brandsModel} from "./brands.js"

const orderSchema = Schema({
    date:  { type: Date, default: new Date() },
    deadline: { type: Date, default: new Date() },
    address: String,
    userId: ObjectId,
    brands: [brandsModel.schema],
    isSent: { type: Boolean, default: false },
    priceOrder: Number,
    totalPrice: Number

})


export const orderModel = model("orders", orderSchema);
