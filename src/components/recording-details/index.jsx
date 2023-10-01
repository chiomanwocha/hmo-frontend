/* eslint-disable no-unused-vars */
import { useState } from "react";
import AppShell from "../shell";
import ContainerSave from "./component/ContainerSave";
import PreviewSection from "./component/PreviewSection";
import VideoDetails from "./component/VideoDetails";
import EmailModal from "./component/EmailModal";

const RecordingDetails = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState("");

  console.log("showModal", showModal);
  return (
    <AppShell>
      <div className="font-Sora flex gap-10 lg:gap-0 py-12 md:py-20 flex-col justify-between lg:flex-row px-8 md:px-24 bg-white-100">
        <VideoDetails
          setShowModal={setShowModal}
          receiverEmail={receiverEmail}
          setReceiverEmail={setReceiverEmail}
        />
        <PreviewSection />
      </div>
      {!isAuthorized ? <ContainerSave /> : null}
      {showModal ? <EmailModal setShowModal={setShowModal} receiverEmail={receiverEmail} /> : null}
    </AppShell>
  );
};

export default RecordingDetails;
