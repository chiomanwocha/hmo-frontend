import search from "../../../assets/svgs/search-normal.svg";


const Profile = () => {
    return ( 
        <div className="border-b-[1px] border-[#E5E5E5] ">
        <div className="flex flex-col lg:flex-row font-Sora justify-between gap-10 lg:gap-0 px-8 md:px-24 mt-10 mb-11">
          <div>
            <p className="font-bold text-[28px] lg:text-[32px]">Hello, John Mark</p>
            <p className="text-[#141414B2]">Here are your recorded videos</p>
          </div>
          <div className="bg-[#B6B3C624] p-3 lg:p-6 flex gap-4 border-[1px] border-[#E7E7ED] rounded-[8px] min-w-[40vw]">
            <img src={search} alt="search icon" />
            <input
              type="text"
              placeholder="Search for a particular video"
              className="bg-transparent outline-none flex-grow"
            />
          </div>
        </div>
      </div>
     );
}
 
export default Profile;