import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    investmentType: '',
    amount: '',
  });

  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/products', formData);
      alert('Form submitted successfully!');
      setFormData({
        productName: '',
        investmentType: '',
        amount: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit the form');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form 
    onSubmit={handleSubmit} 
    className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md"
  >
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Product Form</h2>

    {/* Error Message */}
    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

    {/* Product Name */}
    <div className="mb-6">
      <label htmlFor="productName" className="block text-sm font-medium text-gray-600 mb-2">
        Product Name
      </label>
      <select
        id="productName"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="" disabled>
          Select Product Name
        </option>
        <option value="Alpha Fixed Yield Fund">Alpha Fixed Yield Fund</option>
        <option value="Digital Asset Growth Fund">Digital Asset Growth Fund</option>
        <option value="Prime Equity Mutual Fund">Prime Equity Mutual Fund</option>
        <option value="Dynamic Blend Fund">Dynamic Blend Fund</option>
      </select>
    </div>

    {/* Investment Type */}
    <div className="mb-6">
      <label htmlFor="investmentType" className="block text-sm font-medium text-gray-600 mb-2">
        Investment Type
      </label>
      <select
        id="investmentType"
        name="investmentType"
        value={formData.investmentType}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="" disabled>
          Select Investment Type
        </option>
        <option value="Fixed Income">Fixed Income</option>
        <option value="Cryptocurrency">Cryptocurrency</option>
        <option value="Mutual Funds">Mutual Funds</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>

    {/* Amount */}
    <div className="mb-6">
      <label htmlFor="amount" className="block text-sm font-medium text-gray-600 mb-2">
        Amount
      </label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300"
    >
      Invest
    </button>
  </form>
</div>

  );
};

export default ProductForm;
