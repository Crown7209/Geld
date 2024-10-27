"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Geld, Logo } from "@/components/svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch("http://localhost:5000/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("email", email.value);
        console.log("pass", password);
        console.log("data", data);

        if (response.ok) {
          toast.success("Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          router.push("/dashboard");
        } else {
          setErrorMessage(data.message || "Invalid credentials");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("You already login");
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="w-full h-screen flex justify-between">
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col gap-10 items-center max-w-[384px] w-full">
          <div className="p-[5.4px] flex gap-[9.46px] items-center">
            <Logo />
            <Geld />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-roboto text-2xl font-semibold text-[#0F172A]">
              Welcome Back
            </p>
            <p className="font-roboto text-base font-normal text-[#334155]">
              Welcome back, Please enter your details
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              id="password"
              name="password"
              type="password"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              type="submit"
              className="rounded-full h-[48px] text-[#fff] bg-[#0166FF] text-xl font-normal font-roboto"
            >
              Log in
            </button>
          </form>
          <div className="flex items-center">
            <p className="text-[#0F172A] font-roboto text-base font-normal">
              Don't have an account?
            </p>
            <Link
              href="/sign-up"
              className="h-8 px-3 flex justify-center items-center text-[#0166FF] text-base font-roboto font-normal "
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF] h-full"></div>
    </div>
  );
}
