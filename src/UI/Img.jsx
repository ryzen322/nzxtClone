import React from "react";

const Img = ({ src, className = "", alt = "", title = "" }) => {
  return (
    <>
      <img
        className={` ${className}`}
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
      />
    </>
  );
};

export default Img;
