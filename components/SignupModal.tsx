"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({
  isOpen,
  onClose,
}: SignupModalProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Account created!");

      onClose();

      setForm({
        username: "",
        name: "",
        email: "",
        password: "",
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-70">
      <div className="bg-zinc-900 p-6 rounded-2xl w-[80%] max-w-md shadow-xl">
          <button
            onClick={onClose}
            className="ml-auto block text-white text-xl hover:cursor-pointer"
          > ✕
          </button>
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-white">
              Sign up ZACS
            </h2>
            <p className="text-zinc-400 mt-2">
              We just need few details to get you started
            </p>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit}
          className="space-y-4"
        > */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(
              e.target as HTMLFormElement
            );

            const username = formData.get("username") as string;
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            try {
              setLoading(true);

              const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username,
                  name,
                  email,
                  password,
                }),
              });

              const data = await response.json();

              if (!response.ok) {
                throw new Error(
                  data.message || "Signup failed"
                );
              }

              // Auto login after signup
              const result = await signIn(
                "credentials",
                {
                  username,
                  password,
                  redirect: false,
                }
              );

              if (result?.error) {
                toast.error("Invalid credentials");
              } else {
                toast.success("Logged in!");
                router.push("/dashboard");
              }
              onClose();
            } catch (error: any) {
              toast.error(error.message);
            } finally {
              setLoading(false);
            }
          }}
          className="flex flex-col gap-3"
        >
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            required
          />

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white hover:bg-gray-400 transition-all hover:cursor-pointer text-black py-3 rounded-lg"
          >
            {loading ? "Creating..." : "Signup"}
          </button>

          <p className="text-center">Or</p>
          <p className="text-center text-zinc-400">
            By singnin up you agree to our {" "}
            <Link
              href=""
              className="underline"
            >
              Terms
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}