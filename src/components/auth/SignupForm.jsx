"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();  // Utilisé pour les redirections après inscription

  const { name, email, password, password_confirmation } = formValues;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3001/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: { name, email, password, password_confirmation },
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await res.json();
      localStorage.setItem("authToken", data.token); // Stockage du token
      router.push("/annuaire"); // Redirection vers l'annuaire après succès
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full flex-1 mt-8">
      <div className="flex flex-col items-center">
        {/* Signup with Google */}
        <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          <div className="bg-white p-2 rounded-full">
            {/* Google Icon */}
            <svg className="w-4" viewBox="0 0 533.5 544.3">
              {/* Google Icon Paths */}
            </svg>
          </div>
          <span className="ml-4">Signup with Google</span>
        </button>
      </div>

      <div className="my-6 border-b text-center">
        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
          Or signup with email
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {error && <p className="text-red-500 col-span-2">{error}</p>}
        
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full tracking-wide font-semibold bg-green-500 text-gray-100 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
            <span className="ml-3">Signup</span>
          </button>
        </div>
      </form>

      <p className="mt-6 text-xs text-gray-600 text-center">
        By signing up, you agree to abide by our{' '}
        <a href="#" className="border-b border-gray-500 border-dotted">
          Terms of Service
        </a>{' '}
        and our{' '}
        <a href="#" className="border-b border-gray-500 border-dotted">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
