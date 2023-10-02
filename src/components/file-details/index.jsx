import AuthNavbar from "../common/AuthNavbar";
import FileContainer from "../dashboard/components/FilesContainer";
import videoFrame from "../../assets/images/video-frame.png";
import TranscriptBox from "../recording-details/component/TranscriptBox";
import BreadCrumb from "./components/BreadCrumb";
import VideoTitle from "./components/VideoTitle";
import Share from "./components/Share";
import Send from "./components/Send";
import { useState } from "react";
import EmailModal from "../recording-details/component/EmailModal";

const FileDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState("");
  return (
    <div>
      <AuthNavbar />
      <div className="px-8 md:px-24 font-WorkSans py-10">
        <div className="flex flex-col gap-6">
          <BreadCrumb />
          <VideoTitle />
          <FileContainer img={videoFrame} />
        </div>
        <div className="mt-10 flex flex-col gap-10">
          <Send
            showModal={showModal}
            setShowModal={setShowModal}
            receiverEmail={receiverEmail}
            setReceiverEmail={setReceiverEmail}
          />
          <Share />
        </div>
        <div className="mt-10 lg:mt-20">
          <p className="text-[24px] font-semibold mb-4">Transcript</p>
          <select className="border-[1px] border-[#CFCFCF] text-[#CFCFCF] rounded-[8px] p-2 lg:w-[10vw]">
            <option>English</option>
          </select>
          <div className="mt-10">
            <TranscriptBox />
          </div>
        </div>
      </div>
      {showModal ? (
        <EmailModal setShowModal={setShowModal} receiverEmail={receiverEmail} />
      ) : null}
    </div>
  );
};

export default FileDetails;
