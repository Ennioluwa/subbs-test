import DraftCard from "../cards/DraftCard";
import Input from "../Input";

const Drafts = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" flex flex-col w-full lg:flex-row gap-5 justify-between lg:items-center ">
        <Input placeholder="Search for drafts" />
        <div className="flex flex-col md:flex-row mr-auto md:mr-0 w-full md:w-auto items-center gap-6">
          <button
            className="flex items-center w-full md:w-fit gap-5 px-6 py-3 text-text-dark  rounded-[10px] text-sm font-semibold"
            type="button"
          >
            Sender ID
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.28267 0.689453H5.15183H1.43208C0.795549 0.689453 0.477282 1.69464 0.928161 2.28389L4.36279 6.77257C4.91313 7.4918 5.80826 7.4918 6.35859 6.77257L7.66481 5.06548L9.79323 2.28389C10.2375 1.69464 9.91921 0.689453 9.28267 0.689453Z"
                fill="#292D32"
              />
            </svg>
          </button>
          <button
            className="w-full md:w-fit bg-gray-dark px-6 py-3 text-white hover:shadow-md rounded-[10px] text-sm font-semibold "
            type="button"
          >
            Start a Campaign
          </button>
        </div>
      </div>
      <h2 className=" text-xl font-extrabold mt-8 mb-5">Drafts</h2>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <DraftCard />
        <DraftCard />
        <DraftCard />
      </div>
    </div>
  );
};

export default Drafts;
