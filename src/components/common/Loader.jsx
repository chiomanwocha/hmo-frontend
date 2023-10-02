const Loader = () => {
  return (
    <>
      <div className="font-WorkSans justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 w-[50vw] mx-auto z-50 outline-none focus:outline-none">
        <span className="loader"></span>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#000000e7]"></div>
    </>
  );
};

export default Loader;
