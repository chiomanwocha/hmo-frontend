import TranscriptBox from "./TranscriptBox";

const PreviewSection = () => {
  return (
    <div className="lg:w-[50%] lg:border-l-[1px] lg:border-[#DDDDDD] lg:pl-10">
      <div>
        <video controls className="w-full" playsInline>
          <source
            src="https://luxim-images.s3.us-east-2.amazonaws.com/videos/Luxim+fial+video+MP4.mp4"
            type="video/mp4"
          />
          <track kind="captions" label="English" srcLang="en" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-20">
        <p className="text-[24px] font-semibold mb-4">Transcript</p>
        <select className="border-[1px] border-[#CFCFCF] text-[#CFCFCF] rounded-[8px] p-2 lg:w-[10vw]">
          <option>English</option>
        </select>
        <div className="mt-20">
          <TranscriptBox />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
