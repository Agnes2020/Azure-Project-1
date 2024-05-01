// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://<user>:<password>@assessment.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
