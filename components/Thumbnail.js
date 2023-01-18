import Image from "next/image";
import { HiOutlineThumbUp } from "react-icons/hi";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ res }, ref) => {
  const mainIMG_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className={
        "p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group cursor-pointer"
      }
    >
      <Image
        src={`${mainIMG_URL + res?.backdrop_path}`}
        alt={"test"}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{res.overview}</p>
        <h1 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {res.title || res.original_name}
        </h1>
        <p className="flex justify-start items-center opacity-0 group-hover:opacity-100">
          {res.media_type && `${res.media_type}`}
          {" • "}
          {res.release_date || res.first_air_date}
          {" • "}
          &nbsp;
          <HiOutlineThumbUp size={20} />
          &nbsp;
          {res.vote_count && `${res.vote_count}`}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
