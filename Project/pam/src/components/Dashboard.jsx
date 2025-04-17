import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch users data from the backend API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Filter users based on the search query
  const filteredUsers = users.filter(user =>
    (user?.firstName?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (user?.lastName?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (user?.email?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );
  

  // Call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* User Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone}</td>
                <td className="border p-2">{user.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
