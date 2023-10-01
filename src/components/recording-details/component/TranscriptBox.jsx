const TranscriptBox = () => {
  return (
    <div className="h-[256px] overflow-y-scroll flex flex-col gap-4">
      {[...Array(5)].map((_item, index) => (
        <div className="flex gap-8" key={index}>
          <p>0.01</p>
          <p className="leading-[26.08px]">
            First step. Open Facebook on your desktop or mobile device and
            locate "Marketplace" in the left-hand menu or at the top of the{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TranscriptBox;
