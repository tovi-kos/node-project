import { Router } from "express";
import {deleteOrderById, getAllOrders,addOrder,getAllOrdersByUserId,updateOrderById} from "../controllers/order.js"

const router=Router();

router.get("/",getAllOrders);
router.get("/:id",getAllOrdersByUserId);
router.post("/",addOrder);
router.put("/:id",updateOrderById);
router.delete("/:id",deleteOrderById);

export default router;