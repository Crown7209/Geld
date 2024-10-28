import Link from "next/link";
import { HeaderAddRecord } from "../ui/HeaderAddRecord";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Logo } from "../svg";

export const Header = ({ dashboard, records }) => {
  const router = useRouter();
  const SignOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
    toast.success("Successfully signed out");
  };

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
            <button onClick={SignOut} className="w-10 h-10 bg-blue-600 rounded-full cursor-pointer">

            </button>
            {/* <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="w-10 h-10 bg-blue-600 rounded-full cursor-pointer outline-none"
              ></div>
              <ul
                tabIndex={0}
                className="p-0 mt-4 menu dropdown-content bg-base-100 rounded-lg border border-[#E5E7EB] z-[1] w-52"
              >
                <li className="text-base font-normal font-roboto text-[#1F2937]">
                  <a>Change profile picture</a>
                </li>
                <li className="text-base font-normal font-roboto text-[#1F2937]">
                  <a>Log out</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
