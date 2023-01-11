import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Main = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5">
      {results.map((res) => (
        <Thumbnail res={res} key={res.id} />
      ))}
    </FlipMove>
  );
};

export default Main;
