import { SearchNormal1 } from "iconsax-react";
import { FC } from "react";

interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className=" px-3 py-2 grow bg-[#FAFAFA] flex gap-2 rounded-lg items-center">
      <SearchNormal1 className=" text-[#1E1E1E] h-4 w-4 " />
      <input
        type="text"
        placeholder={placeholder}
        className=" outline-none ring-0 bg-transparent"
      />
    </div>
  );
};

export default Input;
