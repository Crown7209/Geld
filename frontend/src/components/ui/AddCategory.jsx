import { useState } from "react";
import { BluePlusIcon, CloseIcon } from "../svg";
import { ChooseIcons } from "./ChooseIcons";
import { useFormik } from "formik";
import { DownArrow } from "../svg";
import { Home } from "../icons";

export const AddCategory = () => {
  const [errorMessage, setErrorMessage] = useState("");

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
            <div className="flex gap-3 h-12">
              {/* <ChooseIcons /> */}
              <div
                className="p-4 flex gap-1 items-center rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] cursor-pointer"
                // onClick={() =>
                //   document.getElementById("choose_icons").showModal()
                // }
              >
                <Home />
                <DownArrow />
              </div>

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
