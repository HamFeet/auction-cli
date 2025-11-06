import dotenv from "dotenv";
import express from "express";
import { itemSanitizer } from "./itemSanitizer.js";

import {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems
} from '../index.js';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/add", async (req, res) => {
    try {
        const parseResult = itemSanitizer.safeParse(req.body);
        if (!parseResult.success){
            return res.status(400).json({ error: parseResult.error.flatten()});
        }
        const sanitizedData = parseResult.data;
        console.log(sanitizedData);
        const result = await addItem(sanitizedData);
        res.status(201).json({success: true, data: result});
    }catch (error) {
        console.error("Error adding item:", error);
        res.status(500).json({success: false, error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});