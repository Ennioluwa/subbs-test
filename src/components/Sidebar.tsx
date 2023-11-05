import { LogoutCurve, Notification } from "iconsax-react";
import RightSidebar from "./RightSidebar";
import { navIcons } from "../data";

const Sidebar = () => {
  return (
    <div className=" h-full flex ">
      <div className=" overflow-y-auto w-[72px] h-full py-6 flex flex-col items-center border-r border-text-light">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" text-[#606060]"
        >
          <g clip-path="url(#clip0_5499_730)">
            <path
              d="M12.94 4.6673C12.9405 4.75504 12.9237 4.84201 12.8905 4.92324C12.8573 5.00446 12.8085 5.07834 12.7467 5.14063L5.88667 12.0006L12.7467 18.8606C12.8559 18.9882 12.913 19.1522 12.9065 19.32C12.9 19.4878 12.8304 19.6469 12.7117 19.7657C12.593 19.8844 12.4338 19.954 12.266 19.9604C12.0983 19.9669 11.9342 19.9099 11.8067 19.8006L4 12.0006L11.8067 4.19397C11.9003 4.10223 12.0188 4.04011 12.1475 4.01537C12.2762 3.99064 12.4093 4.00438 12.5303 4.05489C12.6512 4.10539 12.7546 4.19042 12.8274 4.29934C12.9003 4.40826 12.9395 4.53625 12.94 4.6673Z"
              fill="#606060"
            />
            <path
              d="M20.2735 4.6673C20.274 4.75504 20.2572 4.84201 20.224 4.92324C20.1908 5.00446 20.142 5.07834 20.0802 5.14063L13.2202 12.0006L20.0802 18.8606C20.1894 18.9882 20.2465 19.1522 20.24 19.32C20.2335 19.4878 20.1639 19.6469 20.0452 19.7657C19.9265 19.8844 19.7673 19.954 19.5995 19.9604C19.4317 19.9669 19.2677 19.9099 19.1402 19.8006L11.3335 12.0006L19.1402 4.19397C19.2338 4.10223 19.3523 4.04011 19.481 4.01537C19.6097 3.99064 19.7428 4.00438 19.8638 4.05489C19.9847 4.10539 20.088 4.19042 20.1609 4.29934C20.2338 4.40826 20.273 4.53625 20.2735 4.6673Z"
              fill="#606060"
            />
          </g>
          <defs>
            <clipPath id="clip0_5499_730">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(0 -1 1 0 0 24)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className=" flex flex-col gap-7 justify-center items-center text-gray-dark mt-5 mb-14 cursor-pointer">
          {navIcons.map((icon) => (
            <icon.logo className=" text-gray-dark" />
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3 justify-center items-center text-gray-dark">
          <LogoutCurve className=" cursor-pointer" />
          <div className="relative h-12 w-12 grid place-items-center cursor-pointer">
            <Notification />
            <span className="absolute right-1.5 top-1.5 w-4 h-4 rounded-full bg-[#E90000] grid place-items-center text-xs text-white">
              5
            </span>
          </div>
          <p className=" w-10 h-10 rounded-full bg-[#009688] grid place-items-center text-lg font-semibold text-white cursor-pointer">
            F
          </p>
        </div>
      </div>
      <RightSidebar
        sublinks={navIcons[4].sublinks}
        title={navIcons[4].name}
        {...navIcons[4].sublinks}
      />
    </div>
  );
};

export default Sidebar;
