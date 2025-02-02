const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [50, 'Username cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        'Please provide a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false, // Exclude password from query results by default
    },
    role: {
      type: String,
      enum: ['Admin', 'SuperAdmin'], // Specify possible roles
      default: 'Admin', // Default role is Admin
    },
    isActive: {
      type: Boolean,
      default: true, // Use to disable admin accounts if needed
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Pre-save hook to hash password
adminUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Instance method to validate password
adminUserSchema.methods.validatePassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

// Instance method to disable account
adminUserSchema.methods.deactivate = function () {
  this.isActive = false;
};

// Model static method to find active admin users
adminUserSchema.statics.findActiveAdmins = function () {
  return this.find({ isActive: true });
};

// Export the model
const AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;
