import Boxes from "./Boxes";
import { renderLinneChart } from "./Chart";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Boxes />
      <div className="bg-white p-5 pb-10 h-[250px] sm:h-[350px] text-xs sm:text-base max-w-3xl">
        <span className="text-lg">Sales</span>
        {renderLinneChart}
      </div>
    </div>
  );
};

export default Home;
