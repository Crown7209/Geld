"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Geld, Logo } from "@/components/svg";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch("http://localhost:5000/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          router.push("/sign-in");
        } else {
          setErrorMessage(data.message || "Error occurred");
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
              Create Geld account
            </p>
            <p className="font-roboto text-base font-normal text-[#334155]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              id="name"
              type="text"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Name"
              name="name" // Corrected to use name attribute
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <input
              id="email"
              type="email"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Email"
              name="email" // Corrected to use name attribute
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              id="password"
              type="password"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Password"
              name="password" // Corrected to use name attribute
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <input
              type="password"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Re-password"
              name="re-password" // Optional: handle this in your logic
            />
            <button
              type="submit"
              className="rounded-full h-[48px] text-[#fff] bg-[#0166FF] text-xl font-normal font-roboto"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center">
            <p className="text-[#0F172A] font-roboto text-base font-normal">
              Already have an account?
            </p>
            <Link
              href="/sign-in"
              className="h-8 px-3 flex justify-center items-center text-[#0166FF] text-base font-roboto font-normal "
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF] h-full"></div>
    </div>
  );
};

export default SignUpPage;
