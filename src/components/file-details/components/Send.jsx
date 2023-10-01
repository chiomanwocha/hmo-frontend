import { useState } from "react";
import Button from "../../common/Button";
import copy from "../../../assets/svgs/copy.svg";
import { copyText } from "../../recording-details/component/VideoDetails";

const Send = () => {
  const [showModal, setShowModal] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState("");
  return (
    <div className="flex gap-2 flex-col lg:flex-row lg:gap-20 ">
      <div className="flex bg-[#B6B3C633] justify-between py-3 px-6 md:gap-8 rounded-[16px] w-full">
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
      <div className="w-full">
        <div className="flex bg-[#B6B3C633] justify-between py-3 px-6 md:gap-8 rounded-[16px]">
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
    </div>
  );
};

export default Send;
