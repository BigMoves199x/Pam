import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompleteProfile = () => {
    const [formData, setFormData] = useState({
        phone: '',
        address: '',
        identificationType: '',
        identificationNumber: '',
        identificationUpload: null,
        nextOfKin: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'identificationUpload') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
            const form = new FormData();
            Object.keys(formData).forEach((key) => {
                form.append(key, formData[key]);
            });
            form.append('userId', userId);

            const response = await axios.post('http://localhost:3001/auth/complete-profile', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.status) {
                alert('Profile completed successfully!');
                navigate('/dashboard'); // Redirect to dashboard
            } else {
                console.error('Profile update failed:', response.data.message);
            }
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Complete Your Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={handleChange}
                    />
                    <select
                        name="identificationType"
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={handleChange}
                    >
                        <option value="">Select ID Type</option>
                        <option value="Passport">Passport</option>
                        <option value="Driver’s License">Driver’s License</option>
                        <option value="National ID">National ID</option>
                    </select>
                    <input
                        type="text"
                        name="identificationNumber"
                        placeholder="ID Number"
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="identificationUpload"
                        className="w-full"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompleteProfile;
