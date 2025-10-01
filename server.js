const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/versionsmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Datenbank verbunden');
}).catch(err => {
  console.error('Fehler bei der Datenbankverbindung. Überprüfen Sie die URI und die Netzwerkverbindung:', err);
});

// Beispielroute
app.get('/', (req, res) => {
  res.send('Willkommen zur Versionskontroll-App!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});