/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AppShell from "../shell";
import ContainerSave from "./component/ContainerSave";
import PreviewSection from "./component/PreviewSection";
import VideoDetails from "./component/VideoDetails";
import EmailModal from "./component/EmailModal";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import axios from "axios";
import { toast } from "react-toastify";

const RecordingDetails = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const parameter = useParams();

  useEffect(() => {
    if(parameter?.id && parameter?.id?.length > 0){
      axios
        .get(`http://tavish-chrome.onrender.com/render/${parameter?.id}`)
        .then((res) => {
          console.log('success', res);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error)
        });
    }
  }, []);

  console.log("parameter", parameter?.id);
  return (
    <AppShell>
      {isLoading ? <Loader /> : null}
      <div className="font-Sora flex gap-10 lg:gap-0 py-12 md:py-20 flex-col justify-between lg:flex-row px-8 md:px-24 bg-white-100">
        <VideoDetails
          setShowModal={setShowModal}
          receiverEmail={receiverEmail}
          setReceiverEmail={setReceiverEmail}
        />
        <PreviewSection />
      </div>
      {!isAuthorized ? <ContainerSave /> : null}
      {showModal ? (
        <EmailModal setShowModal={setShowModal} receiverEmail={receiverEmail} />
      ) : null}
    </AppShell>
  );
};

export default RecordingDetails;
