import { Home } from "../icons";
import { BluePlusIcon, CloseIcon, DownArrow } from "../svg";
import { ChooseIcons } from "./ChooseIcons";

export const AddCategory = () => {
  return (
    <>
      <div className="px-3 flex items-center gap-2 h-8">
        <button
          onClick={() => document.getElementById("add_record").showModal()}
        >
          <div className="cursor-pointer">
            <BluePlusIcon />
          </div>
        </button>
        <p className="text-base font-normal font-roboto text-[#1F2937]">
          Add Category
        </p>
      </div>

      <dialog id="add_record" className="modal">
        <div className="modal-box max-w-[494px] w-full rounded-xl p-0">
          <div className="px-6 py-5 flex items-center justify-between border-b border-[#E2E8F0] bg-white">
            <p className="text-xl font-semibold font-roboto text-[#0F172A]">
              Add Category
            </p>
            <form method="dialog" className="cursor-pointer">
              <button className="flex items-center justify-center">
                <CloseIcon />
              </button>
            </form>
          </div>
          <div className="p-6 flex flex-col gap-8">
            <div className="flex gap-3 h-12">
              <ChooseIcons />
              <input
                type="text"
                className="p-4 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] w-full outline-none"
                placeholder="Name"
              />
            </div>
            <button className="bg-[#16A34A] rounded-[20px] h-10 text-base font-normal font-roboto text-[#F9FAFB]">
              Add
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
