// import { title } from "process";
import { userModel } from "../models/user.js"

export async function getAllUsers(req, res) {
    try {
        let data = await userModel.find();
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
export async function getUserById(req, res) {

    let { id } = req.params;
    try {
        let data = await userModel.findById(id);
        if (!data)
            return res.status(400).json({
                title: "error cannot connect to get byId",
                message: "something wrong"
            })
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to getById",
            message: "something wrong "
        })
    }

}
export async function addUser(req, res) {
    if (!req.body.userName)
        return res.status(400).json({
            title: "erorr to add user",
            message: "you must enter userName "
        });

    if (!req.body.mail)
        return res.status(400).json({
            title: "erorr to add user",
            message: "you must enter mail "
        });

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(req.body.mail))
        return res.status(400).json({
            title: "erorr to add user",
            message: "you must enter a valid  mail "
        });

    if (!req.body.password)
        return res.status(400).json({
            title: "erorr to add user",
            message: "you must enter password "
        });

    try {
        let newUser = new userModel(req.body);
        newUser.role = "user";
        newUser.dateSignIn = Date.now();
        let data = await newUser.save();
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to add user",
            message: "something wrong "
        })
    }
}
export async function updateUserById(req, res) {
    let { id } = req.params;

    if (req.body.password)
        return res.status(400).json({
            title: "erorr to update user",
            message: "you can't change the password  "
        });
    try {

        let data = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data)
            return res.status(400).json({
                title: "erorr to update user",
                message: "no find user to update "
            });
        res.json(data);
    }

    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to update user",
            message: "something wrong "
        })
    }

}
export async function updateUserPassword(req, res) {
    let { id } = req.params;
    let { password } = req.body;
    if (!password)
        return res.status(400).json({
            title: "erorr to update user password",
            message: "you must enter a password"
        });

    try {
        let data = await userModel.findByIdAndUpdate(id, {password}, { new: true });
        if (!data)
            return res.status(400).json({
                title: "erorr to update user password",
                message: "no find user to update password "
            });
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to update user password",
            message: "something wrong "
        })
    }

}
export async function loginUser(req, res) {
    if (!req.body.userName ||!req.body.password )
        return res.status(400).json({
            title: "erorr login to user",
            message: "you must enter userName and password"
        });

    try {
        let data = await userModel.findOne({
            userName: req.body.userName,
            password: req.body.password
        });
        if(!data)
            return res.status(400).json({
                title: "erorr login to user",
                message: "no find user to login "
            });
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect login to user",
            message: "something wrong "
        });
    }
}


