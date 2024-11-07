import { BluePlusBig } from "../svg";

export const CategoryOption = ({ category }) => {
  return (
    <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center`}
        style={{ backgroundColor: category?.icon_color }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d={`${category?.category_icon}`} fill="white" />
        </svg>
      </div>
      <p className="text-base font-normal font-roboto text-[#000000]">
        {category?.name}
      </p>
    </div>
  );
};
