"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DownArrow, LeftArrow, RightArrow } from "../svg";
import { AddRecord } from "../ui/AddRecord";
import { Category } from "../ui/Category";
import { Record } from "../ui/Record";
import { AddCategory } from "../ui/AddCategory";
import { CategoryOption } from "../ui/CategoryOption";

export const RecordsPage = () => {
  const [dataRecord, setDataRecord] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategoryData = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const category = await response.json();
      setDataCategory(category.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRecordsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/records");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const record = await response.json();
      setDataRecord(record.data);
    } catch (error) {
      console.error(error);
      setError("Error occurred while fetching records.");
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [dataCategory]);

  useEffect(() => {
    fetchRecordsData();
  }, [dataRecord]);

  return (
    <div className="w-full min-h-screen h-aut flex flex-col items-center bg-[#F3F4F6] gap-8">
      <Header dashboard={false} records={true} />
      <div className="flex gap-6 max-w-[1440px] w-full px-[120px]">
        <div className="px-4 py-6 max-w-[282px] w-full bg-white rounded-xl border border-[#E5E7EB] flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold font-roboto text-[#000000]">
              Records
            </p>
            <AddRecord />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border border-[#D1D5DB] bg-[#F3F4F6] px-4 w-full h-8 rounded-lg text-base font-normal font-roboto text-[#A3A3A3] outline-none"
          />
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold font-roboto text-[#1F2937]">
              Types
            </p>
            <div className="flex flex-col gap-1">
              <div className="px-3 flex gap-2 items-center h-8">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio w-5 h-5"
                  defaultChecked
                />
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  All
                </p>
              </div>
              <div className="px-3 flex gap-2 items-center h-8">
                <input type="radio" name="radio-1" className="radio w-5 h-5" />
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Income
                </p>
              </div>
              <div className="px-3 flex gap-2 items-center h-8">
                <input type="radio" name="radio-1" className="radio w-5 h-5" />
                <p className="text-base font-normal font-roboto text-[#1F2937]">
                  Expense
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center h-8">
              <p className="text-base font-semibold font-roboto text-[#1F2937]">
                Category
              </p>
              <button className="px-3 text-base font-normal font-roboto text-[#1F2937] opacity-[0.2]">
                Clear
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {dataCategory?.map((category, categoryIndex) => {
                return (
                  <div key={categoryIndex}>
                    <Category category={category} />
                  </div>
                );
              })}
            </div>
            <AddCategory />
          </div>
        </div>
        <div className="max-w-[894px] w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <button className="w-8 h-8 flex justify-center items-center bg-[#E5E7EB] rounded-lg">
                <LeftArrow />
              </button>
              <p className="text-base font-normal font-roboto text-[#000000]">
                Last 30 Days
              </p>
              <button className="w-8 h-8 flex justify-center items-center bg-[#E5E7EB] rounded-lg">
                <RightArrow />
              </button>
            </div>
            <div className="px-4 py-3 border border-[#D1D5DB] rounded-lg bg-[#F9FAFB] flex items-center">
              <p className="text-base font-semibold font-roboto text-[#1F2937] w-[120px]">
                Newest first
              </p>
              <button>
                <DownArrow />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold font-roboto text-[#000000]">
                Today
              </p>
              <div className="flex flex-col gap-3">
                {dataRecord?.map((record, recordIndex) => {
                  return (
                    <div key={recordIndex}>
                      <Record record={record} dataCategory={dataCategory} />
                      {/* {dataCategory?.map((category) => {
                        if (category.id === record.category_id) {
                          return (
                            <div>
                              <CategoryOption category={category} />
                            </div>
                          );
                        }
                      })} */}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold font-roboto text-[#000000]">
                Yesterday
              </p>
              <div className="flex flex-col gap-3">
                {/* {dataRecord?.map((record, recordIndex) => {
                  return (
                    <div key={recordIndex}>
                      <Record record={record} />
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
