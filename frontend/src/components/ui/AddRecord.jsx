"use client";

import { useState } from "react";
import { CloseIcon, PlusIcon } from "../svg";
import { ChooseCategory } from "./ChooseCategory";
import { useFormik } from "formik";

export const AddRecord = ({ onAddRecord }) => {
  const [transactionType, setTransactionType] = useState("EXP");
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const toggleTransactionType = (type) => {
    setTransactionType(type);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      transaction_type: transactionType,
      category_id: "",
      description: "",
      createdat: "", // Final timestamp in ISO format
    },

    onSubmit: async (values) => {
      // Prepare request data
      const requestData = {
        ...values,
        transaction_type: transactionType,
      };

      try {
        const response = await fetch("http://localhost:5000/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        onAddRecord();
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateCreatedAt(e.target.value, time);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    updateCreatedAt(date, e.target.value);
  };

  const updateCreatedAt = (date, time) => {
    if (date && time) {
      const combinedDateTime = `${date}T${time}`;
      formik.setFieldValue("createdat", combinedDateTime);
    }
  };

  const handleCategoryChange = (category) => {
    formik.setFieldValue("category_id", category.id);
  };

  return (
    <>
      <button
        className="flex items-center justify-center bg-[#0166FF] rounded-[20px] h-[32px]"
        onClick={() => document.getElementById("plus_record").showModal()}
      >
        <div className="flex items-center gap-1">
          <PlusIcon />
          <p className="text-base font-base font-roboto text-white">Add</p>
        </div>
      </button>

      <dialog id="plus_record" className="modal">
        <div className="bg-white max-w-[792px] w-full rounded-xl p-0">
          <div className="px-6 py-5 flex items-center justify-between border-b border-[#E2E8F0]">
            <p className="text-xl font-semibold font-roboto text-[#0F172A]">
              Add Record
            </p>
            <form method="dialog" className="cursor-pointer">
              <button className="flex items-center justify-center">
                <CloseIcon />
              </button>
            </form>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex">
            <div className="px-6 py-5 flex flex-col gap-5 max-w-[396px] w-full">
              <div className="flex gap-1 rounded-full bg-[#F3F4F6] relative">
                <button
                  type="button"
                  onClick={() => toggleTransactionType("EXP")}
                  className={`w-full h-10 rounded-full text-base font-normal font-roboto ${
                    transactionType === "EXP"
                      ? "text-[#F9FAFB] bg-[#0166FF]"
                      : "text-[#1F2937]"
                  }`}
                >
                  Expense
                </button>
                <button
                  type="button"
                  onClick={() => toggleTransactionType("INC")}
                  className={`w-full h-10 rounded-full text-base font-normal font-roboto ${
                    transactionType === "EXP"
                      ? "text-[#1F2937]"
                      : "text-[#F9FAFB] bg-[#16A34A]"
                  }`}
                >
                  Income
                </button>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[19px]">
                  <div className="w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3">
                    <p className="text-base font-normal font-roboto text-[#171717]">
                      Amount
                    </p>
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      className="w-full bg-[#F3F4F6] outline-none text-xl font-normal font-roboto text-[#0F172A]"
                      placeholder="₮  000.00"
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <p className="text-base font-normal font-roboto text-[#1F2937]">
                      Category
                    </p>
                    <ChooseCategory
                      onCategoryChange={handleCategoryChange}
                      value={formik.values.category_id}
                      id="category_id"
                      name="category_id"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Date
                      </p>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        value={date}
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Time
                      </p>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        value={time}
                        onChange={handleTimeChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full rounded-full text-base font-normal font-roboto text-[#F9FAFB] h-10 ${
                    transactionType === "EXP" ? "bg-[#0166FF]" : "bg-[#16A34A]"
                  }`}
                  onClick={() => document.getElementById("plus_record").close()}
                >
                  Add Record
                </button>
              </div>
            </div>
            <div className="px-6 pt-[15px] pb-6 max-w-[396px] w-full flex flex-col gap-[19px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Payee
                </p>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base font-normal font-roboto text-[#0F172A] outline-none"
                  placeholder="Write here"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Note
                </p>
                <textarea
                  id="description"
                  name="description"
                  className="w-full h-[282px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] p-4 text-base font-normal font-roboto text-[#0F172A] resize-none outline-none"
                  placeholder="Write here"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

////
