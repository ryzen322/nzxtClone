const StoreLargeIncludes = ({ icons, text, ready }) => {
  return (
    <div className=" flex items-center justify-center flex-col gap-3  py-4">
      <h1 className={`text-2xl ${ready ? "" : "text-stone-50/25"}`}>{icons}</h1>
      <h1 className={`${ready ? "" : "text-stone-50/25"}`}>{text}</h1>
    </div>
  );
};

export default StoreLargeIncludes;
