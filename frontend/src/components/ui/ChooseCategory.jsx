import {
  BluePlusBig,
  DownArrow,
  DrinkIcon,
  FoodDrinkIcon,
  GiftIcon,
  HomeIcon,
  ShoppingIcon,
  TaxiIcon,
} from "../svg";

export const ChooseCategory = () => {
  return (
    <>
      <button
        className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center w-full"
        onClick={() => document.getElementById("plus_category").showModal()}
      >
        <p className="text-base font-normal font-roboto text-[#94A3B8]">
          Choose
        </p>
        <DownArrow />
      </button>
      <dialog id="plus_category" className="modal">
        <div className="modal-box max-w-[340px] w-full rounded-xl p-0">
          <div className="px-4 py-2 flex gap-3 items-center border-b border-[rgba(0,0,0,0.10)]">
            <button
              className="p-2"
              onClick={() => document.getElementById("add_record").showModal()}
            >
              <BluePlusBig />
            </button>

            <p className="text-base font-normal font-roboto text-[#000000]">
              Add Category
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Food
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <HomeIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Home
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <GiftIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Gift
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <DrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Drink
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <TaxiIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Taxi
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center cursor-pointer">
            <ShoppingIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Shopping
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* <details className="dropdown">
        <summary className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 flex justify-between items-center w-full cursor-pointer text-base font-normal font-roboto text-[#94A3B8]">
          Choose
        </summary>
        <div className="menu dropdown-content max-w-[348px] w-full rounded-xl bg-white p-0 ">
          <div className="px-4 py-2 flex gap-3 items-center border-b border-[rgba(0,0,0,0.10)]">
            <div className="p-2">
              <BluePlusBig />
            </div>
            <p className="text-base font-normal font-roboto text-[#000000]">
              Add Category
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Food
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Home
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Gift
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Drink
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <FoodDrinkIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Taxi
            </p>
          </div>
          <div className="px-4 py-2 flex gap-3 items-center">
            <ShoppingIcon />
            <p className="text-base font-normal font-roboto text-[#000000]">
              Shopping
            </p>
          </div>
        </div>
      </details> */}
    </>
  );
};
