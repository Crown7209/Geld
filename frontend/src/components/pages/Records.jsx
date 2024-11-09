"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DownArrow, LeftArrow, RightArrow } from "../svg";
import { AddRecord } from "../ui/AddRecord";
import { Category } from "../ui/Category";
import { Record } from "../ui/Record";
import { AddCategory } from "../ui/AddCategory";
import { CategoryOption } from "../ui/CategoryOption";
import { RecordLoader } from "../ui/RecordLoader";

export const RecordsPage = () => {
  const [dataRecord, setDataRecord] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isLoading, setIsLoading] = useState();
  // const [filteredItems, setFilteredItems] = useState("");

  // const handleFilter = (selectedRecord) => {
  //   if (selectedFilters.includes(selectedRecord)) {
  //     let filters = selectedFilters.filter((e) => e !== selectedRecord);
  //     setSelectedFilters(filters);
  //   } else {
  //     setSelectedFilters([...selectedFilters, selectedRecord]);
  //   }
  // };

  // useEffect(() => {
  //   filterItems();
  // }, [selectedFilters]);

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedRecord) => {
  //       let temp = items.filter((item) => item.record === selectedRecord);
  //       return temp;
  //     });
  //     setFilteredItems(tempItems.flat());
  //   } else {
  //     setFilteredItems([...items]);
  //   }
  // };

  const fetchCategoryData = async () => {
    try {
      // setIsLoading(true);
      const response = await fetch("http://localhost:5000/category");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const category = await response.json();
      setDataCategory(category.data);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchRecordsData = async () => {
    try {
      // setIsLoading(true);
      const response = await fetch("http://localhost:5000/records");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const record = await response.json();
      setDataRecord(record.data);
    } catch (error) {
      console.error(error);
      setError("Error occurred while fetching records.");
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [dataCategory]);

  useEffect(() => {
    fetchRecordsData();
  }, [dataRecord]);

  // useEffect(() => {
  //   fetchRecordsData();
  //   fetchCategoryData();
  // }, []);

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
                <input
                  type="radio"
                  name="radio-1"
                  className="radio w-5 h-5"
                  // onClick={handleFilter()}
                />
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
              {isLoading ? (
                <RecordLoader />
              ) : (
                dataCategory?.map((category) => (
                  <div key={category.id}>
                    <Category category={category} />
                  </div>
                ))
              )}
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
                {isLoading ? (
                  <RecordLoader />
                ) : (
                  dataRecord?.map((record) => (
                    <div key={record.id}>
                      <Record record={record} dataCategory={dataCategory} />
                    </div>
                  ))
                )}
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
