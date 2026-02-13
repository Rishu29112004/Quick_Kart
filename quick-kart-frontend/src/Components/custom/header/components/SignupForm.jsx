import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./validations/signup.schema";
import { authService } from "../../../services/auth.service";

const SignupForm = ({ handleLogin, setSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signupSchema) });

 const onSubmit = async (data) => {
  try {
    const res = await authService.register(data);
    console.log("Signup Success:", res.data);

    // Don't auto-call /me here, just save tokens if needed
    if (res.data?.data?.accessToken) {
      localStorage.setItem("accessToken", res.data.data.accessToken);
    }
    if (res.data?.data?.refreshToken) {
      localStorage.setItem("refreshToken", res.data.data.refreshToken);
    }

    // Close signup modal
    setSignup(false);

    // Open login modal
    handleLogin(); // <- ab login modal open hoga
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || "Signup failed";
    alert(message);
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <button
            onClick={() => setSignup(false)}
            className="text-red-500 font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={formSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="border px-3 py-2 rounded-md"
            required
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded-md"
            required
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border px-3 py-2 rounded-md w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-blue-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 text-white py-2 rounded-md"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={handleLogin}
            className="text-blue-500 underline font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
