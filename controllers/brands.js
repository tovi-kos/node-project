// import { title } from "process";
import  {brandsModel} from "../models/brands.js"

export async function getAllBrands(req, res) {
    try {
        let data = await brandsModel.find();
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
export async function getBrandById(req, res) {

    let { id } = req.params;
    try {
        let data = await brandsModel.findById(id);
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
export async function addBrand(req, res) { 
    if (!req.body.nameBrand)
        return res.status(400).json({
            title: "erorr to add brand",
            message: "you must enter nameBrand "
        });
    if (!req.body.description)
        return res.status(400).json({
            title: "erorr to add brand",
            message: "you must enter description "
        });
    if (!req.body.price)
        return res.status(400).json({
            title: "erorr to add brand",
            message: "you must enter price "
        });
    try {
        let newBrand = new brandsModel(req.body);
        let data = await newBrand.save();
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to add brand",
            message: "something wrong "
        })
    }


}
export async function updateBrandById(req, res) {
    let { id } = req.params;

    if (req.body.nameBrand.length < 2)
        return res.status(400).json({
            title: "erorr to update brand",
            message: "you must enter name with at least 2 letters  "
        });
    try {

        let data = await brandsModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!data)
            return res.status(400).json({
                title: "erorr to update brand",
                message: "no find brand to update "
            });
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to update brand",
            message: "something wrong "
        })
    }

}
export async function deleteBrandById(req, res) {

    let { id } = req.params;
    try {
        let data = await brandsModel.findByIdAndDelete(id);
        if (!data)
            return res.status(400).json({
                title: "erorr to delete brand",
                message: "no find brand to delete "
            });
        res.json(data);
    }
    catch (err) {
        console.log("err");
        res.status(400).json({
            title: "error cannot connect to delete brand",
            message: "something wrong "
        });
    }

}