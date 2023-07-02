import { useRef, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ShoppingList from "./ShoppingList";
import StoreLargeScreen from "../../StoreLargeScreen/StoreLargeScreen";

const ShoppingStore = () => {
  const caseRef = useRef(null);
  const cpuRef = useRef(null);
  const gpuRef = useRef(null);
  const motherboardRef = useRef(null);
  const ramRef = useRef(null);
  const storageRef = useRef(null);
  const coolingRef = useRef(null);
  const powersupplyRef = useRef(null);

  const [funcState, setFuncState] = useState([
    {
      id: "0",

      function: caseScroll,
    },
    {
      id: "1",

      function: cpuScroll,
    },
    {
      id: "2",

      function: gpuScroll,
    },
    {
      id: "3",

      function: motherboardScroll,
    },
    {
      id: "4",

      function: ramScroll,
    },
    {
      id: "5",

      function: storageScroll,
    },
    {
      id: "6",

      function: coolingScroll,
    },
    {
      id: "7",

      function: powersupplyScroll,
    },
  ]);

  function caseScroll() {
    const element = caseRef.current;
    element.style.marginTop = "-10rem";
    caseRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }

  function cpuScroll() {
    const element = cpuRef.current;
    element.style.marginTop = "-10rem";
    cpuRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }
  function gpuScroll() {
    const element = gpuRef.current;
    element.style.marginTop = "-10rem";
    gpuRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }
  function motherboardScroll() {
    const element = motherboardRef.current;
    element.style.marginTop = "-10rem";
    motherboardRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }
  function ramScroll() {
    const element = ramRef.current;
    element.style.marginTop = "-10rem";
    ramRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }
  function storageScroll() {
    const element = storageRef.current;
    element.style.marginTop = "-10rem";
    storageRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }
  function coolingScroll() {
    const element = coolingRef.current;
    element.style.marginTop = "-10rem";
    coolingRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }

  function powersupplyScroll() {
    const element = powersupplyRef.current;
    element.style.marginTop = "-10rem";
    powersupplyRef.current.scrollIntoView();
    element.style.marginTop = "30px";
  }

  return (
    <>
      <div className=" flex flex-col w-full max-h-[56rem] h-[56rem] bg-black relative top-[3.4rem] lg:hidden">
        <ShoppingList executeScroll={caseScroll} funcState={funcState} />
        <ShoppingCart
          caseRef={caseRef}
          cpuRef={cpuRef}
          gpuRef={gpuRef}
          motherboardRef={motherboardRef}
          ramRef={ramRef}
          storageRef={storageRef}
          coolingRef={coolingRef}
          powersupplyRef={powersupplyRef}
        />
      </div>
      <StoreLargeScreen />
    </>
  );
};

export default ShoppingStore;
