const SingleService = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className="flex flex-col items-center justify-between border py-4 rounded-2xl hover:bg-white hover:transition-all hover:duration-700">
      <div className="w-24 h-24 rounded-full flex justify-center items-center border bg-primary-light-chocolate">
        {icon}
      </div>
      <div className=" text-center">
        <h3 className="text-2xl font-semibold text-secondary-chocolate py-2">
          {title}
        </h3>
        <p className="text-base font-medium text-primary-light-chocolate px-4 mt-2 pb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
