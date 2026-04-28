const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB Error:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;