import google from "../../assets/svgs/google.svg";
import facebook from "../../assets/svgs/facebook.svg";
import line from "../../assets/svgs/line.svg";
import Button from "../common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../common/AuthNavbar";

const Login = () => {
  const methods = [
    {
      title: "Continue with Google",
      icon: google,
    },
    {
      title: "Continue with Facebook",
      icon: facebook,
    },
  ];
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const inputDetails = [
    {
      title: "email",
      placeholder: "Enter your email address",
    },
    {
      title: "password",
      placeholder: "Enter your Password",
    },
  ];
  console.log(details)
  const navigate = useNavigate();
  return (
    <div>
      <AuthNavbar />
      <div className="pb-8 px-12 md:px-24 font-Inter">
        <div className="max-w-[475px] mx-auto mt-9 flex flex-col gap-8">
          <div className="text-center">
            <h2 className="font-bold text-[32px] leading-[48px] mb-2">
              Log in or Sign up
            </h2>
            <p className="text-sm leading-[21px] text-[#434343] max-w-[321px] mx-auto">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {methods.map((item) => (
              <div key={item.title}>
                <Button title={item.title} icon={item.icon} outline full />
              </div>
            ))}
          </div>
          <div className="w-fit mx-auto">
            <img src={line} alt="line icon" />
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {inputDetails.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <label htmlFor={item.title} className="capitalize">
                  {item.title}
                </label>
                <input
                  type={item.title === "email" ? "email" : "password"}
                  id={item.title}
                  placeholder={item.placeholder}
                  className="border-[1px] rounded-[8px] border-[#B6B3C6] p-4 outline-none focus:border-[#000] transition duration-75"
                  onChange={(e) =>
                    setDetails((prevDetails) => ({
                      ...prevDetails,
                      [item.title]: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            ))}
          </div>
          <Button title="Sign Up" color="#120B48" full onClick={() => navigate('/dashboard')}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
