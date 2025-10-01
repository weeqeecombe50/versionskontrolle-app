const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/versionsmanagement';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error(`Database connection failed to ${mongoURI}. Verify your MongoDB URI and ensure that the MongoDB service is running:`, err);
});

// Beispielroute
app.get('/', (req, res) => {
  res.send('Welcome to the version control app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});