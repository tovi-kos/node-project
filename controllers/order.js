import { orderModel } from "../models/order.js"

export async function getAllOrders(req, res) {
    try {
        let data = await orderModel.find();
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to getAll",
            message: "something wrong "
        })
    }
}
export async function getAllOrdersByUserId(req, res) {

    let { id } = req.params;
    try {
        let data = await orderModel.find(id);
        if (!data)
            return res.status(400).json({
                title: "error cannot connect to get byUserId",
                message: "something wrong"
            })
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to getByUserId",
            message: "something wrong "
        })
    }

}
export async function addOrder(req, res) {
    if (!req.body.userId)
        return res.status(400).json({
            title: "erorr to add order",
            message: "you must enter userId "
        });
    if (!req.body.address)
        return res.status(400).json({
            title: "erorr to add order",
            message: "you must enter address "
        });
    if (!req.body.brands)
        return res.status(400).json({
            title: "erorr to add order",
            message: "you must enter brands "
        });
    try {
        let newOrder = new orderModel(req.body);
        newOrder.deadline.setDate(newOrder.deadline.getDate() + 14);
        newOrder.totalPrice += newOrder.brands.map(b => b.price);
        console.log(newOrder);
        let data = await newBrand.save();
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to add order",
            message: "something wrong "
        })
    }
}
export async function updateOrderById(req, res) {
    let { id } = req.params;
    try {
        let data = await brandsModel.findByIdAndUpdate(id, { isSent: true }, { new: true });
        console.log(data);
        if (!data)
            return res.status(400).json({
                title: "erorr to update order",
                message: "no find order to update "
            });
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to update order",
            message: "something wrong "
        })
    }

}
export async function deleteOrderById(req, res) {
    let { id } = req.params;
    try {
        let data = await brandsModel.find(id);
        if (!data)
            return res.status(400).json({
                title: "erorr to delete brand",
                message: "no find order to delete "
            });
        if (data.isSent == true)
            return res.status(400).json({
                title: "erorr to delete order",
                message: "the order is sent "
            });
        data = await brandsModel.findByIdAndDelete(id);
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to delete order",
            message: "something wrong "
        });
    }

}
