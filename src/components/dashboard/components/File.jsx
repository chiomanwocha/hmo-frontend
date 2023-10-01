import videoFrame from "../../../assets/images/video-frame.png";
import FileContainer from "./FilesContainer";

const Container = ({ title }) => {
  return (
    <div>
      <p className="text-[18px] mb-6">{title}</p>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        {[...Array(2)].map((_item, index) => (
          <FileContainer img={videoFrame} key={index} />
        ))}
      </div>
    </div>
  );
};

const File = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-20 lg:gap-10">
        {['Recent files', 'Files from last week'].map((item) => (
            <Container title={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default File;
