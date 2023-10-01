import { useRef, useState } from "react";
import edit from "../../../assets/svgs/edit.svg";
const VideoTitle = () => {
  const [videoName, setVideoName] = useState(
    "How To Create A Facebook Ad Listing "
  );
  const inputRef = useRef(null);
  return (
    <div className="mt-2 flex gap-6 lg:w-[50%]">
      <input
        className="font-semibold text-[24px] outline-none w-full"
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
  );
};

export default VideoTitle;
