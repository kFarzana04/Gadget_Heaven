import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan 01", price: 65, total: 80, rating: 90 },
  { date: "Jan 05", price: 50, total: 70, rating: 85 },
  { date: "Jan 10", price: 80, total: 60, rating: 75 },
  { date: "Jan 15", price: 70, total: 90, rating: 95 },
  { date: "Jan 20", price: 85, total: 85, rating: 80 },
  { date: "Jan 25", price: 90, total: 78, rating: 88 },
  { date: "Jan 30", price: 78, total: 82, rating: 87 },
];

const Statistic = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-[#9538E2] rounded-lg p-6 shadow-md text-center">
        <h1 className="text-3xl text-white font-bold mb-2">Statistics</h1>
        <p className="text-white mb-4">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" name="Price" />
              <Bar dataKey="total" fill="#82ca9d" name="Total" />
              <Bar dataKey="rating" fill="#ffc658" name="Rating" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
