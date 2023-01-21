require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/post.routes');
const dalleRoutes = require('./routes/dalle.routes');


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
connectDB();

app.use('/api/v1/post', require('./routes/post.routes'));
app.use('/api/v1/dalle', dalleRoutes);
app.get('/', async (req, res) => {
    res.send("Hello Folks");
})

app.listen(5500, () => {
    console.log(`Server running on PORT http://localhost:5500`);
})
