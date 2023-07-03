const SummaryCard = ({ children, className }) => {
  return (
    <div className={` w-full  bg-[#222426] rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default SummaryCard;
