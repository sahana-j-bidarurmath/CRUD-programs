const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  password: { // lowercase 'p' for consistency
    type: String,
    required: true
    // Consider removing enum to allow any password
    // enum: ['abc', 'xyz', 'po_v'] // not suitable for real-world login
  },
  phoneno: {
    type: String, // Use String to preserve formatting and leading 0s
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email']
  }
});

module.exports = mongoose.model('User', UserSchema);