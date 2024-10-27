import Link from "next/link";
import { Logo } from "../svg/Logo";
import { PlusIcon } from "../svg/PlusIcon";
import { HeaderAddRecord } from "../ui/HeaderAddRecord";

export const Header = ({ dashboard, records }) => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-[1440px] w-full px-[120px] py-4 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <div className="p-[6.3px] cursor-pointer">
              <Logo />
            </div>
            <Link
              href="/dashboard"
              className={`text-[#0F172A] text-base font-roboto cursor-pointer ${
                dashboard ? "font-semibold" : "font-normal"
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/records"
              className={`text-[#0F172A] text-base font-roboto cursor-pointer ${
                records ? "font-semibold" : "font-normal"
              }`}
            >
              Records
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <HeaderAddRecord />
            <div className="w-10 h-10 bg-blue-600 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
