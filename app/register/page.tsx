"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    router.push("/signin");
  };

  return (
    <div>
      <div className="bg-blue-50">
        <Header />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 ">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm border-2  border-blue-500">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-950">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-2 border-blue-600 w-full rounded-3xl p-2"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-blue-600 w-full rounded-3xl p-2"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-blue-600 w-full rounded-3xl p-2"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-2 border-blue-600 w-full rounded-3xl p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-300 w-full h-8 rounded-full"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
