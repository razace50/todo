import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    // Parse the stored user details
    const user = JSON.parse(storedUser);

    // Check if the email and password match
    if (email === user.email && password === user.password) {
      console.log("Login successful!");
      // Redirect to a dashboard or home page after successful login
      navigate("/dashboard"); // You can change this route based on your app's structure
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* To-Do section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 flex justify-center">
            To-Do:
          </h1>
          <p className="text-sm text-gray-500 pt-2">
            Please create a new account by providing your email and password.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleLogin}
            >
              Log In
            </button>

            <p className="text-center text-sm text-blue-600">
              <Link to="/signup">Create new account</Link>{" "}
              {/* Navigate to signup */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
