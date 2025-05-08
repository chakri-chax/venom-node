import express from "express";
import { getOwner, mintSeed,mintDeed } from "../controllers/collectionController";

const router = express.Router();

router.get("/owner", getOwner);
router.post("/mintSeed", mintSeed);
router.post("/mintDeed", mintDeed);


export default router;
