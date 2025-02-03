import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 150 },
  { month: "Feb", income: 70 },
  { month: "Mar", income: 100 },
  { month: "Apr", income: 80 },
  { month: "May", income: 70 },
  { month: "Jun", income: 100 },
  { month: "Jul", income: 120 },
  { month: "Aug", income: 150 },
  { month: "Sep", income: 90 },
  { month: "Oct", income: 70 },
  { month: "Nov", income: 100 },
  { month: "Dec", income: 120 },
];

const IncomeBarChart = () => {
  return (
    <div className="w-full ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            name="Income"
            dataKey="income"
            fill="#ff4f78"
            barSize={20}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeBarChart;
