import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        identificationType: '',
        identificationNumber: '',
        identificationUpload: null, // For file upload
        nextOfKin: '',
    });


    const handleClose = () => {
      navigate('/')
    }


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'identificationUpload') {
            setFormData({ ...formData, [name]: files[0] }); // Handle file input
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData(); // Create FormData for file upload
            Object.keys(formData).forEach((key) => {
                form.append(key, formData[key]);
            });

            const response = await axios.post('http://localhost:3001/auth/admin/signup', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            if (response.data.status) {
                navigate('/login'); // Redirect on successful signup
            } else {
                console.error('Signup failed:', response.data.message || 'Unknown error');
            }
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
          <div onClick={handleClose} className='absolute top-12 left-[75%]'>
            <FaTimes  size={14}/>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*******"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Next of Kin */}
              <div>
                <label htmlFor="nextOfKin" className="block text-sm font-medium text-gray-700">
                  Next of Kin
                </label>
                <input
                  type="text"
                  id="nextOfKin"
                  name="nextOfKin"
                  placeholder="Next of Kin"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Identity Type */}
              <div>
                <label htmlFor="identificationType" className="block text-sm font-medium text-gray-700">
                  ID Type
                </label>
                <select
                  id="identificationType"
                  name="identificationType"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="Passport">Passport</option>
                  <option value="Driver’s License">Driver’s License</option>
                  <option value="National ID">National ID</option>
                </select>
              </div>
      
              {/* Identity Number */}
              <div>
                <label htmlFor="identificationNumber" className="block text-sm font-medium text-gray-700">
                  ID Number
                </label>
                <input
                  type="text"
                  id="identificationNumber"
                  name="identificationNumber"
                  placeholder="Identification Number"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                  onChange={handleChange}
                />
              </div>
      
              {/* Upload Identification */}
              <div>
                <label htmlFor="identificationUpload" className="block text-sm font-medium text-gray-700">
                  Upload ID
                </label>
                <input
                  type="file"
                  id="identificationUpload"
                  name="identificationUpload"
                  className="mt-1 w-full"
                  onChange={handleChange}
                />
              </div>
            </div>
      
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Have an Account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      
    );
};

export default Signup;
