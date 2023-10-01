import { useRef, useState } from "react";
import edit from "../../../assets/svgs/edit.svg";
import copy from "../../../assets/svgs/copy.svg";
import facebook from "../../../assets/svgs/facebook.svg";
import whatsapp from "../../../assets/svgs/whatsapp.svg";
import telegram from "../../../assets/svgs/telegram.svg";
import Button from "../../common/Button";
import { toast } from "react-toastify";

export const copyText = async (e, text) => {
  try {
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    toast.success("Copied");
  } catch (error) {
    toast.error("An error occurred while copying");
  }
};
const VideoDetails = ({
  setShowModal,
  showModal,
  receiverEmail,
  setReceiverEmail,
}) => {
  const [videoName, setVideoName] = useState("Untitled_Video_20232509");
  const socials = [
    {
      title: "Facebook",
      link: "#",
      icon: facebook,
    },
    {
      title: "WhatsApp",
      link: "#",
      icon: whatsapp,
    },
    {
      title: "Telegram",
      link: "#",
      icon: telegram,
    },
  ];
  const inputRef = useRef(null);

  return (
    <div className="lg:w-[50%] lg:pr-16">
      <h3 className="font-bold text-[38px] lg:text-[45px] leading-[56.7px] mb-10 lg:mb-20">
        Your video is ready!
      </h3>
      <div className="flex flex-col gap-10 lg:gap-[64px]">
        <div className="w-full lg:w-fit">
          <label htmlFor="videoName" className="text-[#727272]">
            Name
          </label>
          <div className="mt-2 flex gap-6">
            <input
              className="font-semibold text-primary-light-blue text-[24px] outline-none w-full"
              id="videoName"
              type="text"
              // defaultValue="Untitled_Video_20232509"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              ref={inputRef}
            />
            <img
              src={edit}
              alt="edit icon"
              className="cursor-pointer"
              onClick={() => inputRef.current.focus()}
            />
          </div>
        </div>
        <div className="flex bg-[#B6B3C633] justify-between py-3 px-6 gap-8 rounded-[16px]">
          <input
            type="email"
            placeholder="enter email of receiver"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            className="bg-transparent outline-none flex-grow"
          />
          <Button
            title="Send"
            color="#605C84"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
        <div>
          <p className="text-[20px] font-semibold mb-4">Video Url</p>
          <div className="flex bg-[#B6B3C633] justify-between py-3 px-6 gap-8 rounded-[16px]">
            <input
              type="text"
              disabled
              //   placeholder="enter email of receiver"
              value="https://www.helpmeout/Untitled_Video_20232509"
              className="bg-transparent outline-none flex-grow"
            />
            <Button
              icon={copy}
              title="Copy"
              outline
              onClick={(e) =>
                copyText(e, "https://www.helpmeout/Untitled_Video_20232509")
              }
            />
          </div>
        </div>
        <div>
          <p className="font-semibold mb-4">Share your video </p>
          <div className="flex gap-4 flex-wrap">
            {socials.map((item) => (
              <div key={item.title}>
                <Button
                  icon={item.icon}
                  title={item.title}
                  outline
                  onClick={() => console.log("share video!")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
