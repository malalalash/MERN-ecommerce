import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    sales: "10",
  },
  {
    name: "Tue",
    sales: "22",
  },
  {
    name: "Wed",
    sales: "34",
  },

  {
    name: "Thu",
    sales: "56",
  },

  {
    name: "Fri",
    sales: "78",
  },

  {
    name: "Sat",
    sales: "12",
  },
  {
    name: "Sun",
    sales: "34",
  },
];

const renderLinneChart = (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ left: -30, top: 20 }}>
      <Line type="monotone" dataKey="sales" stroke="#1810ad" strokeWidth={2} />
      <CartesianGrid stroke="#ccc" vertical={false} />
      <XAxis
        dataKey="name"
        stroke="#000000"
        padding={{ left: 20, right: 20 }}
      />
      <YAxis stroke="#000000" />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const Chart = () => {
  return (
    <div className="bg-white border border-black/10 p-5 pb-10 h-[250px] sm:h-[350px] text-xs sm:text-base">
      <span className="text-lg font-semibold">Sales</span>
      {renderLinneChart}
    </div>
  );
};

export default Chart;
