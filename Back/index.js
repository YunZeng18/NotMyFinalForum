const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config();
// .env file variables are accessed via process.env object
const { PORT, BACKEND_URL } = process.env;

// Allow CORS
app.use(cors());

// request.body middleware
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on ${BACKEND_URL}:${PORT}`));