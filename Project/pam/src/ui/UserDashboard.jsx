import { useEffect, useState } from 'react';
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

            const token = localStorage.getItem('token'); 
            
            if (!token) {
                setError('Authentication required. Please log in.');
                setLoading(false);
                return;
            }

            try {
                const headers = {
                    Authorization: `Bearer ${token}`
                };

                const [userRes, productsRes] = await Promise.all([
                    axios.get(`http://localhost:3001/api/user/${userId}`, { headers }),
                    axios.get(`http://localhost:3001/api/product?userId=${userId}`, { headers })
                ]);

                setUser(userRes.data);
                setProducts(productsRes.data);
            } catch (err) {
                setError('Failed to load data. Please try again later.');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    const calculateTotalReturns = (amount, returnRate) => {
        return ((amount * returnRate) / 100).toFixed(2);
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">User Dashboard</h1>

            {loading && <p className="text-center text-gray-500">Loading data...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {user && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile Information</h2>
                    <p className="text-gray-600"><strong>Name:</strong> {user.username}</p>
                    <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                </div>
            )}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Investments</h2>
            {products.length > 0 ? (
                <div className="space-y-4">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-gray-100 p-4 rounded-lg shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-gray-700 mb-2">{product.productName}</h3>
                            <p className="text-gray-600"><strong>Type:</strong> {product.investmentType}</p>
                            <p className="text-gray-600"><strong>Amount:</strong> ${product.amount}</p>
                            <p className="text-gray-600"><strong>Risk Level:</strong> {product.riskLevel}</p>
                            <p className="text-gray-600"><strong>Duration:</strong> {product.duration} months</p>
                            <p className="text-gray-600"><strong>Return Rate:</strong> {product.returnRate}%</p>
                            <p className="text-gray-600"><strong>Expected Returns:</strong> ${calculateTotalReturns(product.amount, product.returnRate)}</p>
                            {product.description && (
                                <p className="text-gray-500 mt-2"><em>{product.description}</em></p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No investment products found.</p>
            )}
        </div>
    );
};

export default UserDashboard;
