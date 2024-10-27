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
import { DownArrow } from "../svg";

export const ChooseIcons = () => {
  return (
    <>
      <button
        className="p-4 flex gap-1 items-center rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] cursor-pointer"
        onClick={() => document.getElementById("choose_icons").showModal()}
      >
        <Home />
        <DownArrow />
      </button>

      <dialog id="choose_icons" className="modal">
        <div className="modal-box max-w-[312px] w-full rounded-lg p-0">
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
              <div className="w-6 h-6 rounded-full bg-[#0166FF]"></div>
              <div className="w-6 h-6 rounded-full bg-[#01B3FF]"></div>
              <div className="w-6 h-6 rounded-full bg-[#41CC00]"></div>
              <div className="w-6 h-6 rounded-full bg-[#F9D100]"></div>
              <div className="w-6 h-6 rounded-full bg-[#FF7B01]"></div>
              <div className="w-6 h-6 rounded-full bg-[#AE01FF]"></div>
              <div className="w-6 h-6 rounded-full bg-[#FF0101]"></div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
