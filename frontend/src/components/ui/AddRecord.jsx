"use client";

import { useEffect, useState } from "react";
import { CloseIcon, PlusIcon } from "../svg";
import { ChooseCategory } from "./ChooseCategory";

export const AddRecord = () => {
  const [transactionType, setTransactionType] = useState("EXP");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [records, setRecords] = useState({
    name: "",
    amount: "",
    transaction_type: transactionType,
    category_id: "",
    description: "",
    createdat: "",
  });

  const toggleTransactionType = (type) => {
    setTransactionType(type);
    setRecords((prev) => ({ ...prev, transaction_type: type }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecords((prevRecords) => ({ ...prevRecords, [name]: value }));
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");
      if (!response.ok) throw new Error(`HTTP error!`);
      const responseData = await response.json();
      setCategories(responseData);
    } catch (error) {
      console.error(error);
      setError("Error occured while fetching categories.");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(records),
      });

      if (!response.ok) throw new Error(`HTTP error! status:`);

      console.log("Record added successfully!");

      setRecords({
        name: "",
        amount: "",
        transaction_type: transactionType,
        category_id: "",
        description: "",
        createdat: "",
      });
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
        <div className="modal-box max-w-[792px] w-full rounded-xl p-0">
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
          <form onSubmit={handleFormSubmit} className="flex">
            <div className="px-6 py-5 flex flex-col gap-5 max-w-[396px] w-full">
              <div className="flex gap-1 rounded-full bg-[#F3F4F6] relative">
                <button
                  onClick={() => toggleTransactionType("EXP")}
                  className={`w-full h-10 rounded-full  text-base font-normal font-roboto ${
                    transactionType === "EXP"
                      ? "text-[#F9FAFB] bg-[#0166FF]"
                      : "text-[#1F2937]"
                  }`}
                >
                  Expense
                </button>
                <button
                  onClick={() => toggleTransactionType("INC")}
                  className={`w-full h-10 rounded-full text-base font-normal font-roboto text-[#1F2937] ${
                    transactionType === "EXP"
                      ? "text-[#1F2937]"
                      : "text-[#F9FAFB] bg-[#16A34A]"
                  }`}
                >
                  Income
                </button>
                {/* <div className="absolute h-10 w-[172px] bg-[#0166FF]"></div> */}
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[19px]">
                  <div className="w-full rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] px-4 py-3">
                    <p className="text-base font-normal font-roboto text-[#171717]">
                      Amount
                    </p>
                    <input
                      name="amount"
                      onChange={handleInputChange}
                      type="number"
                      className="w-full bg-[#F3F4F6] outline-none text-xl font-normal font-roboto text-[#9CA3AF]"
                      placeholder="₮  000.00"
                      value={records?.amount}
                    />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <p className="text-base font-normal font-roboto text-[#1F2937]">
                      Category
                    </p>
                    {/* <ChooseCategory /> */}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Date
                      </p>
                      <input
                        name="date"
                        onChange={handleInputChange}
                        type="date"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        value={records?.date}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Time
                      </p>
                      <input
                        name="time"
                        onChange={handleInputChange}
                        type="time"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        value={records?.time}
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
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base font-normal font-roboto text-[#94A3B8] outline-none"
                  placeholder="Write here"
                  value={records?.name}
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Note
                </p>
                <textarea
                  name="description"
                  onChange={handleInputChange}
                  className="w-full h-[282px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] p-4 text-base font-normal font-roboto text-[#94A3B8] outline-none"
                  placeholder="Write here"
                  value={records?.description}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
