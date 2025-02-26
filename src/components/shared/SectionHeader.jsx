const SectionHeader = ({ title, colorTitle, subHeading }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center py-8">
      <h3 className="text-4xl text-primary-chocolate font-bold font-bebas tracking-wider leading-5">
        {title} <span className="text-secondary-chocolate">{colorTitle}</span>
      </h3>
      {subHeading ? (
        <p className="text-dull-text text-lg font-medium w-5/12">
          {subHeading}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionHeader;