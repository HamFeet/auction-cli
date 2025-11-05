import dotenv from "dotenv";
import express from "express";

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
        const result = await addItem(req.body);
        res.status(201).json({success: true, data: result});
    }catch (error) {
        console.error("Error adding item:", error);
        res.status(500).json({success: false, error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});