import { useLocation, useNavigate } from "react-router-dom";
import link from "../../../assets/svgs/link.svg";
import more from "../../../assets/svgs/more.svg";

const FileContainer = ({ img }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const containsRoute = location.pathname.includes("/dashboard/video-details");

  return (
    <div
      className={`flex flex-col ${!containsRoute ? 'cursor-pointer' : ''} gap-6 p-4 border-[1px] border-[#E7E7ED] rounded-[24px]`}
      onClick={() => !containsRoute ? navigate("/dashboard/video-details") : null}
    >
      <div>
        <img src={img} alt="video frame" />
      </div>
      {!containsRoute ? (
        <div>
          <div className="flex justify-between flex-wrap gap-2 lg:gap-0">
            <p className="text-[20px]">How to create Facebook Ad listing</p>
            <div className="flex gap-6">
              {[link, more].map((item) => (
                <div>
                  <img src={item} alt="video frame" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-[16px] text-[#B6B3C6] mt-2 lg:mt-0">
            SEPTEMBER 23, 2023
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FileContainer;
