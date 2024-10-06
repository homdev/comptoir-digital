"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const { email, password } = formValues;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3001/api/v1/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { email, password } }),
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la connexion");
      }

      const data = await res.json();
      localStorage.setItem("authToken", data.token); // Stockage du token
      router.push("/directory"); // Redirection après succès
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full flex-1 mt-8">
      <div className="flex flex-col items-center">
        {/* Signin with Google */}
        <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          <div className="bg-white p-2 rounded-full">
            {/* Google Icon */}
            <svg className="w-4" viewBox="0 0 533.5 544.3">
              {/* Google Icon Paths */}
            </svg>
          </div>
          <span className="ml-4">Signin with Google</span>
        </button>
      </div>

      <div className="my-12 border-b text-center">
        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
          Or signin with email
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Signin</span>
        </button>
        <p className="mt-6 text-xs text-gray-600 text-center">
          I agree to abide by templatana's{' '}
          <a href="#" className="border-b border-gray-500 border-dotted">
            Terms of Service
          </a>{' '}
          and its{' '}
          <a href="#" className="border-b border-gray-500 border-dotted">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
