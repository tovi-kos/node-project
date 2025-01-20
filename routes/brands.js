import { Router } from "express";
import {addBrand,deleteBrandById,getAllBrands,getBrandById,updateBrandById}from "../controllers/brands.js";

const router=Router();

router.get("/",getAllBrands);
router.get("/:id",getBrandById);
router.post("/",addBrand);
router.put("/:id",updateBrandById);
router.delete("/:id",deleteBrandById);

export default router;
