import { useState } from "react";
import { BluePlusBig, BluePlusIcon, CloseIcon } from "../svg";
import { ChooseIcons } from "./ChooseIcons";
import { useFormik } from "formik";
import { DownArrow } from "../svg";
import {
  Anchor,
  BaseBall,
  BezierCurve,
  Exam,
  ExcellLogo,
  Exclude,
  Globe,
  Home,
  HourGlass,
  HouseLine,
  IdentificationBadge,
  IdentificationCard,
  ImageSquare,
  IntersectSquare,
  Ladder,
  Leaf,
  ListPlus,
  Microphone,
  NotePad,
  NumberFive,
  NumberSeven,
  Orange,
  Paper,
  Peace,
  Pencil,
  Plus,
  Question,
  Road,
  Vignette,
  Watch,
} from "../icons";

export const AddCategory = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category_icon: "",
      icon_color: "",
    },

    onSubmit: async (values) => {
      const requestData = {
        ...values,
      };
      try {
        const response = await fetch("http://localhost:5000/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
        const data = await response.json();

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        console.log(data);
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });
  return (
    <>
      <button
        className="px-3 flex items-center gap-2 h-8"
        onClick={() => document.getElementById("add_record").showModal()}
      >
        <div className="cursor-pointer">
          <BluePlusIcon />
        </div>

        <p className="text-base font-normal font-roboto text-[#1F2937]">
          Add Category
        </p>
      </button>

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
          <form
            onSubmit={formik.handleSubmit}
            className="p-6 flex flex-col gap-8"
          >
            <div className="flex gap-3 h-12 relative">
              {/* <ChooseIcons /> */}
              <div
                onClick={toggling}
                tabIndex={0}
                className="p-4 flex gap-1 items-center rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] cursor-pointer"
              >
                <div>{selectedOption || <Home />}</div>
                <DownArrow />
              </div>

              {open && (
                <div className="absolute top-[99%] left-0 max-w-[312px] w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB]">
                  <div className="p-6 flex flex-col gap-6">
                    <div className="grid grid-cols-6 grid-rows-5 gap-6">
                      <Home />
                      <HouseLine />
                      <IdentificationBadge />
                      <IdentificationCard />
                      <Ladder />
                      <IntersectSquare />
                      <ImageSquare />
                      <Plus />
                      <Microphone />
                      <ExcellLogo />
                      <NotePad />
                      <ListPlus />
                      <Leaf />
                      <NumberFive />
                      <NumberSeven />
                      <Road />
                      <HourGlass />
                      <Anchor />
                      <BezierCurve />
                      <Exclude />
                      <Vignette />
                      <BaseBall />
                      <Question />
                      <Exam />
                      <Watch />
                      <Globe />
                      <Orange />
                      <Peace />
                      <Paper />
                      <Pencil />
                    </div>
                    <div className="w-full h-[1px] bg-black opacity-10"></div>
                    <div className="flex gap-4">
                      <button className="w-6 h-6 rounded-full bg-[#0166FF]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#01B3FF]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#41CC00]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#F9D100]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#FF7B01]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#AE01FF]"></button>
                      <button className="w-6 h-6 rounded-full bg-[#FF0101]"></button>
                    </div>
                  </div>
                </div>
              )}

              <input
                id="name"
                name="name"
                type="text"
                className="p-4 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] w-full outline-none"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-[#16A34A] rounded-[20px] h-10 text-base font-normal font-roboto text-[#F9FAFB]"
              onClick={() => document.getElementById("add_record").close()}
            >
              Add
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
