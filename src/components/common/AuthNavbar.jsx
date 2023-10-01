import logo from "../../assets/svgs/logo.svg";
import arrow from "../../assets/svgs/arrow-down.svg";
import profile from "../../assets/svgs/profile-circle.svg";
import { useLocation } from "react-router-dom";

const AuthNavbar = () => {
  const location = useLocation();
  const containsRoute = location.pathname.includes("/login");

  return (
    <div className="flex font-WorkSans items-center justify-between py-6 md:py-8 px-8 md:px-24 bg-white-200 sticky top-0 z-10">
      <div>
        <img src={logo} alt="app logo" />
      </div>
      {!containsRoute ? (
        <div className="flex items-center gap-2">
          <div>
            <img src={profile} alt="profile icon" />
          </div>
          <p>John Mark</p>
          <div>
            <img src={arrow} alt="arrow icon" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AuthNavbar;
