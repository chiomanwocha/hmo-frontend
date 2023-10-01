import close from "../../../assets/svgs/close-circle.svg";
import kite from "../../../assets/images/success-kite.png";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const EmailModal = ({ setShowModal, receiverEmail }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-WorkSans justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="p-14 rounded-[8px] relative w-auto overflow-y-scroll bg-white-100 ">
          <div className="flex justify-end">
            <img
              src={close}
              alt="close icon"
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="flex flex-col max-w-[348px] items-center text-center">
            <div className="w-[60%]">
              <img src={kite} alt="success kite" />
            </div>
            {receiverEmail.length > 0 ? (
              <p className="text-[24px] mt-12 leading-[28.15px]">
                Your video link has been sent <br /> to{" "}
                <span className="font-[500]">{receiverEmail}</span>
              </p>
            ) : null}

            <div className="mt-14">
              <p className="text-[18px]">
                Would you need to view this video later? Save to your account
                now!
              </p>
              <div className="w-fit mx-auto font-WorkSans mt-6 mb-10">
                <Button title="Save Video" color="#120B48" />
              </div>
              <p className="text-[#7E7E7E]">
                Don’t have an account?{" "}
                <span
                  className="text-primary-dark-blue underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#00000052]"></div>
    </>
  );
};

export default EmailModal;
