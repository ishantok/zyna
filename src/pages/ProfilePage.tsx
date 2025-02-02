import React, { useEffect, useState } from "react";

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // State to manage loading

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setError("No access token found. Please log in.");
        setLoading(false);  // Set loading to false if no token
        return;
      }

      try {
        const response = await fetch("https://api.yourdomain.com/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile. Please try again.");
        }

        const data: UserProfile = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setLoading(false);  // Set loading to false once fetch is complete
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile Page</h2>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <p>Loading profile...</p>  // Show loading text while waiting for data
      ) : (
        user ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ) : (
          <p>No user data available.</p>  // In case no user data is found
        )
      )}
    </div>
  );
};

export default ProfilePage;
