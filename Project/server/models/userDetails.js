const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userDetailsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
      match: [/^\+?\d{10,15}$/, 'Invalid phone number'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false,
    },

    identificationType: {
      type: String,
      default: 'Passport',
    },
    identificationNumber: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple docs with null or missing identificationNumber
    },
    identificationUpload: {
      type: String,
      default: 'src/assets/watt_idcard.jpg',
    },

    nextOfKin: {
      name: { type: String },
      phone: { type: String },
      relationship: { type: String },
      address: { type: String },
    },

    investmentDetails: {
      packageType: { type: String },
      amount: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);


// **Hooks and Methods**
// Hash the password before saving
userDetailsSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to validate the password
userDetailsSchema.methods.validatePassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

// Export the model
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);
module.exports = UserDetails;
