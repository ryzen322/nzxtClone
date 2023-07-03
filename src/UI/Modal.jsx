import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Components = ({ component }) => {
  const [componentName, quantity] = component;

  return (
    <div className=" w-full h-[3.7rem] border-b border-t border-white flex items-center justify-between ">
      <h1 className=" text-white/70 font-semibold">{componentName}</h1>
      <h1 className=" text-white">{quantity}</h1>
    </div>
  );
};

const Backdrop = ({ closeBackDrop, information = {} }) => {
  const { images, description, title, list } = information;

  console.log(list);

  return (
    <div className=" w-screen h-screen z-[60] bg-black/30 fixed top-0 flex items-center justify-center ">
      <div className=" z-50 bg-[#1A1C1E] h-full w-full flex flex-col  p-4">
        <div className=" w-full h-[2.5rem]  flex items-center">
          <h1
            className=" ml-auto cursor-pointer text-white text-2xl"
            onClick={closeBackDrop}
          >
            <AiOutlineClose />
          </h1>
        </div>
        <div className=" h-[15rem]">
          <img className=" w-full h-full object-contain" src={images} alt="" />
        </div>
        <h1 className=" text-white m-8 text-2xl font-semibold text-center">
          {title}
        </h1>
        <p className=" text-center text-white font-semibold text-[17px] mb-4">
          {description}
        </p>
        <div className=" flex flex-col">
          {list.map((item) => (
            <Components key={item.id} component={item.component} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Modal = ({ data, closeBackDrop, information }) => {
  return (
    <>
      {createPortal(
        <Backdrop closeBackDrop={closeBackDrop} information={information} />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default Modal;
