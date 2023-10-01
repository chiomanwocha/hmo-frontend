const BreadCrumb = () => {
  const items = [
    "Home",
    "Recent Videos",
    "How To Create A Facebook Ad Listing",
  ];
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span
          key={index}
          className={`breadcrumb-item ${
            index !== items.length - 1
              ? "text-[#141414B2]"
              : "text-primary-light-blue"
          }`}
        >
          {item}
          {index < items.length - 1 && (
            <span className="breadcrumb-separator"> / </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
