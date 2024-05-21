const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/coffee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple schema and model for your JSON data
const ShopownersSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  id: Number,
});

const  shopowners= mongoose.model('shopowners', ShopownersSchema);

// Express route to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    const data = await shopowners.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 