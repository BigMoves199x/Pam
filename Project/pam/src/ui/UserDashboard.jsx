import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setError('');
            try {
                const [userRes, productsRes] = await Promise.all([
                    axios.get(`http://localhost:3001/api/users/${userId}`),
                    axios.get(`http://localhost:3001/api/products?userId=${userId}`)
                ]);

                setUser(userRes.data);
                setProducts(productsRes.data);
            } catch (err) {
                setError('Failed to load user data. Please try again later.');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div className="container mx-auto p-6 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">User Dashboard</h1>

            {loading && <p className="text-center text-gray-500">Loading data...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {user && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
                    <p className="text-gray-600"><strong>Name:</strong> {user.username}</p>
                    <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                </div>
            )}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Products</h2>
            {products.length > 0 ? (
                <ul className="space-y-3">
                    {products.map((product) => (
                        <li key={product._id} className="bg-gray-100 p-4 rounded-md shadow-sm flex justify-between">
                            <span className="font-medium text-gray-700">{product.name}</span>
                            <span className="text-gray-600">${product.price}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No products found.</p>
            )}
        </div>
    );
};

export default UserDashboard;
