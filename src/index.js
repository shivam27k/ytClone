import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: './env' });



connectDB().then(() => {
    app.on('error', (error) => {
        console.error("Express error", error)
        throw new Error(error);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
}).catch((error) => {
    console.error("Database connection error", error);
    process.exit(1);
});