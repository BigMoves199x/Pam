const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    productName: {
      type: String,
      required: [true, 'Product name is required'],
      enum: [
        'Alpha Fixed Yield Fund',
        'Digital Asset Growth Fund',
        'Prime Equity Mutual Fund',
        'Dynamic Blend Fund',
      ],
      trim: true,
    },
    investmentType: {
      type: String,
      required: [true, 'Investment type is required'],
      enum: ['Fixed Income', 'Cryptocurrency', 'Mutual Funds', 'Hybrid'],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, 'Investment amount is required'],
      min: [1, 'Amount must be greater than zero'],
    },
    description: {
      type: String,
      required: false, // Optional field to provide additional details
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    riskLevel: {
      type: String,
      required: true,
      enum: ['Low', 'Medium', 'High'], // Add a risk categorization
      default: 'Medium',
    },
    duration: {
      type: Number,
      required: false, // Optional field
      min: [1, 'Duration must be at least 1 month'],
      max: [120, 'Duration cannot exceed 120 months'], // Limit duration to 10 years
      default: 12, // Default to 1 year
    },
    returnRate: {
      type: Number,
      required: true,
      min: [0, 'Return rate must be non-negative'],
      max: [100, 'Return rate cannot exceed 100%'], // Restrict return rates
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Virtual field for calculating total returns based on amount and return rate
productSchema.virtual('totalReturns').get(function () {
  return (this.amount * this.returnRate) / 100;
});

// Export the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;



