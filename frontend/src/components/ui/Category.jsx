import { CloseEye, OpenEye } from "../svg";


export const Category = () => {
  return (
    <div className="px-3 flex gap-2 items-center h-8">
      <label className="swap">
        <input type="checkbox" />
        <OpenEye />
        <CloseEye />
      </label>
      <p className="text-base font-normal font-roboto text-[#1F2937]">
        Food & Drinks
      </p>
    </div>
  );
};
