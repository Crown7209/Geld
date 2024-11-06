import { FoodDrinkIcon } from "../svg/FoodDrinkIcon";
import { CategoryOption } from "./CategoryOption";

export const Record = ({ record, dataCategory }) => {
  return (
    <div className="px-6 py-3 flex justify-between items-center w-full bg-white border border-[#E5E7EB] rounded-xl">
      <div className="flex gap-4 items-center">
        {/* <FoodDrinkIcon /> */}
        <div className="flex flex-col">
          <p className="text-base font-normal font-roboto text-[#000000]">
            {record?.name}
          </p>
          <p className="text-xs font-normal font-roboto text-[#6B7280]">
            14:00
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p
          className={`text-base font-semibold font-roboto ${
            record?.transaction_type === "EXP"
              ? "text-[#F54949]"
              : "text-[#23E01F]"
          }`}
        >
          {record?.transaction_type === "EXP" ? "-" : "+"}
        </p>
        <p
          className={`text-base font-semibold font-roboto ${
            record?.transaction_type === "EXP"
              ? "text-[#F54949]"
              : "text-[#23E01F]"
          }`}
        >
          {record?.amount}
          <span> ₮</span>
        </p>
      </div>
    </div>
  );
};
