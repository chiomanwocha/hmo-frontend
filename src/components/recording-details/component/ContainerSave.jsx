import React from "react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const ContainerSave = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#E7E7ED33] flex flex-col gap-10 text-center font-Sora py-12 px-8 md:0 mb-16"
      style={{ boxShadow: "0px -200px 200px white" }}
    >
      <p className="font-semibold text-[20px] md:text-[24px] leading-[30.24px] max-w-[653px] mx-auto">
        To ensure the availability and privacy of your video, we recommend
        saving it to your account.
      </p>
      <div className="w-fit mx-auto font-WorkSans">
        <Button title="Save Video" color="#120B48" />
      </div>
      <p className="text-[#7E7E7E] text-[20px] md:text-[24px]">
        Don’t have an account?{" "}
        <span
          className="text-primary-dark-blue underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Create account
        </span>
      </p>
    </div>
  );
};

export default ContainerSave;
