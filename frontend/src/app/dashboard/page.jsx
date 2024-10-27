"use client";

import {
  ArrowCircleDown,
  ArrowCircleUp,
  BlueDot,
  GreenDot,
  HomeIcon,
} from "@/components/svg";
import { Header } from "@/components/components/Header";
import { useRouter } from "next/compat/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      toast.warning("Login please!");
      router.push("/sign-in");
    }
  }, [router]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#F3F4F6] gap-8">
      <Header dashboard={true} records={false} />
      <div className="w-full max-w-[1440px] px-[120px] flex flex-col gap-6">
        <div className="flex w-full border-opacity-50 gap-6">
          <div className="card bg-white rounded-[18px] grid h-[216px] w-full"></div>

          <div className="card bg-white rounded-xl grid h-[216px] w-full">
            <div className="px-6 py-4 flex gap-2 items-center border-b border-[#E2E8F0]">
              <GreenDot />
              <p className="text-base font-semibold font-roboto text-[#0F172A]">
                Your Income
              </p>
            </div>
            <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1 ">
                <div className="flex gap-1 items-center">
                  <p className="text-4xl font-semibold font-roboto text-[#000000]">
                    1,200,000
                  </p>
                  <p className="text-4xl font-semibold font-roboto text-[#000000]">
                    ₮
                  </p>
                </div>
                <p className="text-lg font-normal font-roboto text-[#64748B]">
                  Your Income Amount
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleUp />
                <p className="text-lg font-normal font-roboto text-[#000000]">
                  32% from last month
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-white rounded-xl grid h-[216px] w-full">
            <div className="px-6 py-4 flex gap-2 items-center border-b border-[#E2E8F0]">
              <BlueDot />
              <p className="text-base font-semibold font-roboto text-[#0F172A]">
                Total Expenses
              </p>
            </div>
            <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1 ">
                <div className="flex gap-1 items-center">
                  <p className="text-4xl font-semibold font-roboto text-[#000000]">
                    -1,200,000
                  </p>
                  <p className="text-4xl font-semibold font-roboto text-[#000000]">
                    ₮
                  </p>
                </div>
                <p className="text-lg font-normal font-roboto text-[#64748B]">
                  Your Expence Amount
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowCircleDown />
                <p className="text-lg font-normal font-roboto text-[#000000]">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full border-opacity-50 gap-6">
          <div className="card bg-white rounded-xl grid h-[284px] w-full">
            <div className="px-6 py-4 border-b border-[#E2E8F0] max-h-[57px]">
              <p className="text-base font-semibold font-roboto text-[#0F172A]">
                Income - Expense
              </p>
            </div>
            <div className="px-6 py-8"></div>
          </div>

          <div className="card bg-white rounded-xl grid h-[284px] w-full">
            <div className="px-6 py-4 border-b border-[#E2E8F0] max-h-[57px]">
              <p className="text-base font-semibold font-roboto text-[#0F172A]">
                Income - Expense
              </p>
            </div>
            <div className="px-6 py-8"></div>
          </div>
        </div>
        <div className="flex w-full border-opacity-50 gap-6">
          <div className="card bg-white rounded-xl grid w-full">
            <div className="px-6 py-4 border-b border-[#E2E8F0] max-h-[57px]">
              <p className="text-base font-semibold font-roboto text-[#0F172A]">
                Last Records
              </p>
            </div>

            <div className="px-6 flex flex-col ">
              <div className="py-5 flex justify-between items-center border-b border-[#E5E7EB]">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#0166FF] rounded-full flex justify-center items-center">
                    <HomeIcon />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-normal font-roboto text-[#000000]">
                      Lending & Renting
                    </p>
                    <p className="text-xs font-normal font-roboto text-[#6B7280]">
                      3 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-semibold font-roboto text-[#84CC16]">
                    -
                  </p>
                  <p className="text-base font-semibold font-roboto text-[#84CC16]">
                    1,000₮
                  </p>
                </div>
              </div>

              <div className="py-5 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#0166FF] rounded-full flex justify-center items-center">
                    <HomeIcon />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-normal font-roboto text-[#000000]">
                      Lending & Renting
                    </p>
                    <p className="text-xs font-normal font-roboto text-[#6B7280]">
                      3 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-semibold font-roboto text-[#84CC16]">
                    -
                  </p>
                  <p className="text-base font-semibold font-roboto text-[#84CC16]">
                    1,000₮
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
