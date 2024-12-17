export const Record = ({ record, category, dataCategory }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="px-6 py-3 flex justify-between items-center w-full bg-white border border-[#E5E7EB] rounded-xl">
      {dataCategory.map((category, index) => {
        if (category.id === record.category_id)
          return (
            <div key={index} className="flex gap-4 items-center">
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
              <div className="flex flex-col">
                <p className="text-base font-normal font-roboto text-[#000000]">
                  {category?.name}
                </p>
                <p className="text-xs font-normal font-roboto text-[#6B7280]">
                  {formatDate(record.createdat)}
                </p>
              </div>
            </div>
          );
      })}
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
