import { useRouter } from "next/router";
import data from "../utils/requests";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex flex-row px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden">
        {/* object.entries ne işe yarıyor? */}
        {Object.entries(data).map(([key, value]) => (
          <h2
            key={key}
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="last:pr-24 cursor-pointer transition duration-150 transform hover:scale-125 hover:text-white active:text-red-300"
          >
            {value.title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
