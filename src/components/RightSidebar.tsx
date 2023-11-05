import { Icon } from "iconsax-react";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

interface RightSidebarProps {
  sublinks: {
    title: string;
    icon: Icon;
    href: string;
  }[];
  title: string;
}

const RightSidebar: FC<RightSidebarProps> = ({ sublinks, title }) => {
  const [showCampaigns, setShowCampaigns] = useState(true);
  return (
    <div className=" truncate px-2 md:px-4 p-6 w-20 md:w-[254px] flex flex-col items-start border-r border-text-light gap-4">
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
      <div className=" w-full">
        <h3
          onClick={() => setShowCampaigns(!showCampaigns)}
          className=" flex gap-1 md:gap-4 text-[10px] md:text-base items-center font-extrabold md:pl-[10px] cursor-pointer"
        >
          <svg
            width="9"
            height="6"
            className={`hidden md:block transition-all ${
              showCampaigns ? " rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4.5 5L8 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {title}
        </h3>
        <div
          className={`flex flex-col w-full pt-3 text-gray-light font-medium text-sm overflow-hidden transition-all  ${
            showCampaigns ? "h-full" : "h-0"
          }`}
        >
          {sublinks.map((sublink) => (
            <NavLink
              className="  w-full p-2 md:px-5 flex items-center flex-col md:flex-row gap-2 rounded-[10px] text-xs md:text-sm md:font-semibold truncate"
              to={sublink.href}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#F5F5F5" : "#ffffff",
                };
              }}
            >
              <sublink.icon
                height={16}
                width={16}
                className=" text-gray-light"
              />
              <span className=" w-12 md:w-full truncate">{sublink.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
