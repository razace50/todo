"use client";
import React, { useState } from "react";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulating signup by saving data to localStorage
    try {
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password); // Avoid storing sensitive data in real-world apps

      // After successful signup, redirect to the dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Error during sign-up. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 flex justify-center">
            To-Do:
          </h1>
          <p className="text-sm sm:text-base text-gray-500 pt-2">
            Please create a new account by providing your Fullname, email, and
            password.
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Fullname"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-blue-600">
              <a href="/">Already have an account? Log in</a>
            </p>

            <div className="text-center text-sm">
              <span>By signing up, you agree to our </span>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
