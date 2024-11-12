export const RecordLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="w-8 h-8 loading loading-spinner text-[#0166FF]"></span>
        <p className="text-base font-semibold font-roboto text-[#0F172A]">
          Loading...
        </p>
      </div>
    </div>
  );
};
