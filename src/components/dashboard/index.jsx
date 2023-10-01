import AuthNavbar from "../common/AuthNavbar";
import File from "./components/File";
import Profile from "./components/Profile";

const Dashboard = () => {
  return (
    <div className="font-WorkSans">
      <AuthNavbar />
      <div className="border-b-[1px] border-[#E5E5E5] ">
        <Profile />
      </div>
      <div className="px-8 md:px-24">
        <File />
      </div>
    </div>
  );
};

export default Dashboard;
