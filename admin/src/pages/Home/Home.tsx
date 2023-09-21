import Boxes from "./Boxes";
import Chart from "./Chart";
import Table from "./Table";
import TopSelling from "./TopSelling";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Boxes />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 w-full">
        <Chart />
        <TopSelling />
      </div>
      <Table />
    </div>
  );
};

export default Home;
