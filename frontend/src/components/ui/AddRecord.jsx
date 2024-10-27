import { useState } from "react";
import { CloseIcon, DownArrow, PlusIcon } from "../svg";
import { ChooseCategory } from "./ChooseCategory";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export const AddRecord = () => {
  // const [record, setRecord] = useState({});

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify(record),
  //     };
  //     const response = await fetch(`${BACKEND_ENDPOINT}/record`, options);
  //     const data = await response.json();
  //     setRecord((prevRecords) => [...prevRecords, data.record]);
  //   } catch {
  //     console.log("Error");
  //   }

  //   setRecord({
  //     type: "",
  //     amount: "",
  //     category: "",
  //     date: "",
  //     time: "",
  //     payee: "",
  //     note: "",
  //   });

  //   document.getElementById("plus_record").close();
  // };

  // const handleInputChange = async (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   setRecord((prevRecord) => {
  //     return {
  //       ...prevRecord,
  //       [name]: value,
  //     };
  //   });
  // };

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
          <div className="flex">
            <div className="px-6 py-5 flex flex-col gap-5 max-w-[396px] w-full">
              <div className="flex gap-1 rounded-full bg-[#F3F4F6]">
                <button className="w-full h-10 rounded-full bg-[#0166FF] text-base font-normal font-roboto text-[#F9FAFB]">
                  Expense
                </button>
                <button className="w-full h-10 rounded-full text-base font-normal font-roboto text-[#1F2937]">
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
                      name="amount"
                      // onChange={handleInputChange}
                      type="number"
                      className="w-full bg-[#F3F4F6] outline-none text-xl font-normal font-roboto text-[#9CA3AF]"
                      placeholder="₮  000.00"
                      // value={record?.amount}
                    />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <p className="text-base font-normal font-roboto text-[#1F2937]">
                      Category
                    </p>
                    <ChooseCategory />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Date
                      </p>
                      <input
                        name="date"
                        // onChange={handleInputChange}
                        type="date"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        // value={record?.date}
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] w-full">
                      <p className="text-base font-normal font-roboto text-[#1F2937]">
                        Time
                      </p>
                      <input
                        name="time"
                        // onChange={handleInputChange}
                        type="time"
                        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center outline-none"
                        // value={record?.time}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-[#0166FF] rounded-full text-base font-normal font-roboto text-[#F9FAFB] h-10"
                  // onClick={handleSubmit}
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
                  name="payee"
                  // onChange={handleInputChange}
                  type="text"
                  className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base font-normal font-roboto text-[#94A3B8] outline-none"
                  placeholder="Write here"
                  // value={record?.payee}
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Note
                </p>
                <textarea
                  name="note"
                  // onChange={handleInputChange}
                  className="w-full h-[282px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] p-4 text-base font-normal font-roboto text-[#94A3B8] outline-none"
                  placeholder="Write here"
                  // value={record?.note}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
