import { GeldBig, LogoBig } from "../svg";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-12 items-center">
        <div className="p-[10.08px] flex gap-[17.64px] items-center">
          <LogoBig />
          <GeldBig />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <span className="w-8 h-8 loading loading-spinner text-[#0166FF]"></span>
          <p className="text-base font-semibold font-roboto text-[#0F172A]">
            Түр хүлээнэ үү...
          </p>
        </div>
      </div>
    </div>
  );
};
