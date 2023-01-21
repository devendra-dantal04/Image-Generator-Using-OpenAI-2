const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    try {
        const connection = mongoose.connect(process.env.MONGO_URI);

        if (connection) {
            console.log("Connected to the Database")
        } else {
            console.log("Database Connectivity Error")
        }
    } catch (err) {
        console.log(err.message);
    }

}

module.exports = connectDB