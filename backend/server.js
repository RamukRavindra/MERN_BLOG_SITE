const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require('./routes/Posts');
const categoryRoutes = require('./routes/Categories');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// MiddleWare
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDG
mongoose.connect('mongodb://127.0.0.1:27017/blog')
    .then(() => console.log("MongoDB Connected!"))
    .catch((error) => console.log("DB Error", error));

// Use Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));