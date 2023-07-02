import { Link } from "react-router-dom";

const items = [
  {
    id: "Item-2",
    player: "Player: One",
    caseType: "H5 Flow PCs",
    images:
      "https://www.datocms-assets.com/34299/1678229906-playeroneprime-hero-white.png?auto=format&fit=max&w=1200",
  },

  {
    id: "Item-2",
    player: "Player: Two",
    caseType: "H5 Flow PCs",
    images:
      "https://www.datocms-assets.com/34299/1678229956-playertwo-hero-white.png?auto=format&fit=max&w=1200",
  },

  {
    id: "Item-4",
    player: "Player: Three",
    caseType: "H5 Flow and Elite PCs",
    images:
      "https://www.datocms-assets.com/34299/1678229989-playerthreeprime-hero-white.png?auto=format&fit=max&w=1200",
  },
];

const NavBarItem = () => {
  return (
    <div className=" flex flex-col pl-3 mt-3 h-full justify-between">
      {items.map((item) => (
        <div
          key={item.id}
          className=" group flex items-center gap-2 cursor-pointer"
        >
          <div className=" h-[3.5rem] w-[3.5rem]">
            <img
              className=" object-cover w-full h-full"
              src={item.images}
              alt=""
            />
          </div>
          <div className=" text-white leading-4 flex flex-col">
            <Link className=" font-semibold group-hover:text-[#7315e5]">
              {item.player}
            </Link>
            <span className=" text-[0.6rem] font-semibold">
              {item.caseType}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBarItem;
