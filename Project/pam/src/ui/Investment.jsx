import React from 'react';
import { useNavigate } from 'react-router-dom';

const Investment = () => {
    const navigate = useNavigate();

    const handleInvest = () => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            alert('Please sign up first.');
            navigate('/signup');
        } else {
            navigate('/complete-profile');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                <h2 className="text-3xl font-bold mb-6">Investment Page</h2>
                <p className="text-gray-600 mb-4">
                    You need to complete your profile before investing.
                </p>
                <button
                    onClick={handleInvest}
                    className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Complete Profile
                </button>
            </div>
        </div>
    );
};

export default Investment;
