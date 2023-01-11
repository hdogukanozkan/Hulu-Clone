import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HiOutlineHome,
  HiOutlineCollection,
  HiOutlineBadgeCheck,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineUser,
} from "react-icons/hi";

const header = () => {
  return (
    <header className="flex flex-col sm:flex-row mx-5 py-3 items-center h-auto justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HiOutlineHome} title="HOME" />
        <HeaderItem Icon={HiOutlineLightningBolt} title="TRENDING" />
        <HeaderItem Icon={HiOutlineBadgeCheck} title="VERIFIED" />
        <HeaderItem Icon={HiOutlineCollection} title="COLLECTIONS" />
        <HeaderItem Icon={HiOutlineSearch} title="SEARCH" />
        <HeaderItem Icon={HiOutlineUser} title="ACCOUNT" />
      </div>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
        className={"object-contain select-none"}
        alt={"hulu"}
      />
    </header>
  );
};

export default header;
