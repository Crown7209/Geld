import { useEffect, useState } from "react";
import { BluePlusBig, DownArrow } from "../svg";
import { CategoryOption } from "./CategoryOption";

export const ChooseCategory = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    fetchCategoryData();
  }, [dataCategory]);

  return (
    <>
      <div className="relative w-full">
        <div
          onClick={() => setOpen(!open)}
          tabIndex={0}
          className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center"
        >
          <p className="text-base font-normal font-roboto text-[#94A3B8]">
            Choose
          </p>
          <DownArrow
            className={`text-base transition-all ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {open && (
          <div className="absolute top-[99%] left-0 w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB]">
            <button
              className="px-4 py-2 flex gap-3 items-center border-b border-[rgba(0,0,0,0.10)] w-full"
              onClick={() => document.getElementById("add_record").showModal()}
            >
              <div className="p-2">
                <BluePlusBig />
              </div>
              <p className="text-base font-normal font-roboto text-[#000000]">
                Add Category
              </p>
            </button>
            {dataCategory?.map((category, id) => {
              return (
                <div key={id}>
                  <CategoryOption category={category} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
