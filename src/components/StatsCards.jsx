import React from "react";
import { CalendarIcon, AlertCircle, CheckCircle, XCircle } from "lucide-react"; // OR react-icons if you're using those

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 ">
      <CardWrapper
        title="Total Plans"
        count={stats.total}
        color="text-gray-900"
        icon={<CalendarIcon className="h-6 w-6 text-blue-600" />}
        bg="bg-blue-50"
      />

      <CardWrapper
        title="Pending Tasks"
        count={stats.pending}
        color="text-yellow-600"
        icon={<AlertCircle className="h-6 w-6 text-yellow-600" />}
        bg="bg-yellow-50"
      />

      <CardWrapper
        title="Completed Tasks"
        count={stats.approved}
        color="text-green-600"
        icon={<CheckCircle className="h-6 w-6 text-green-600" />}
        bg="bg-green-50"
      />

     
    </div>
  );
};

const CardWrapper = ({ title, count, color, icon, bg }) => (
  <div className="border hover:shadow-md transition-shadow rounded">
    <div className="p-6 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className={`text-3xl font-bold mt-2 ${color}`}>{count}</p>
      </div>
      <div className={`p-3 rounded-full ${bg}`}>
        {icon}
      </div>
    </div>
  </div>
);

export default StatsCards;
