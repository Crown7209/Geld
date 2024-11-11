import { useEffect, useState } from "react";
import { BluePlusBig, DownArrow } from "../svg";
import { CategoryOption } from "./CategoryOption";

export const ChooseCategory = ({ onCategoryChange }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (category) => () => {
    setSelectedOption(category);
    onCategoryChange(category);
    setOpen(false);
  };

  const fetchCategoryData = async () => {
    try {
      const response = await fetch("https://geld-663p.onrender.com/category");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const category = await response.json();
      setDataCategory(category.data);
      fetchCategoryData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      <div className="relative w-full cursor-pointer">
        <div
          onClick={toggling}
          tabIndex={0}
          className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center"
        >
          <p
            className={`text-base font-normal font-roboto ${
              selectedOption ? "text-[#0F172A]" : "text-[#94A3B8]"
            }`}
          >
            {selectedOption?.name || "Choose"}
          </p>
          <DownArrow
            className={`text-base transition-all ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {open && (
          <div className="absolute top-[100%] max-h-[339px] overflow-y-scroll left-0 w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB]">
            <button
              className="px-4 py-2 flex gap-3 items-center border-b border-[rgba(0,0,0,0.10)] w-full"
              onClick={() =>
                document.getElementById("add_category").showModal()
              }
            >
              <div className="p-2">
                <BluePlusBig />
              </div>
              <p className="text-base font-normal font-roboto text-[#000000]">
                Add Category
              </p>
            </button>
            {dataCategory?.map((category) => {
              return (
                <button
                  type="button"
                  onClick={onOptionClicked(category)}
                  className="w-full"
                  value={category.id}
                  key={category.id}
                >
                  <CategoryOption category={category} />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
