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
      select: false, // Exclude password from query results by default
    },
    address: {
      type: String,
      trim: true,
    },
    identificationType: {
      type: String,
      enum: ['Passport', 'Driver’s License', 'National ID'], // Add or adjust as needed
      required: [true, 'Identification type is required'],
    },
    identificationNumber: {
      type: String,
      required: [true, 'Identification number is required'],
      unique: true,
    },
    identificationUpload: {
      type: String, // Could store a file path, URL, or binary data
      required: false,
    },
    nextOfKin: {
      name: {
        type: String,
        required: [true, 'Next of kin name is required'],
        trim: true,
      },
      relationship: {
        type: String,
        required: [true, 'Next of kin relationship is required'],
      },
      phone: {
        type: String,
        required: [true, 'Next of kin phone number is required'],
        match: [/^\+?\d{10,15}$/, 'Invalid phone number'],
      },
    },
    investmentDetails: {
      amount: {
        type: Number,
        required: true,
        min: [1, 'Investment amount must be greater than 0'],
      },
      packageType: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Platinum'], // Adjust based on your packages
        required: [true, 'Package type is required'],
      },
    },
    isVerified: {
      type: Boolean,
      default: false, // Mark if the user has completed email/phone verification
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
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
