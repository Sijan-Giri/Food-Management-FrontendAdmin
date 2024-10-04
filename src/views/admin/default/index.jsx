import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";

import { columnsDataCheck } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import tableDataCheck from "./variables/tableDataCheck.json";
import { useEffect, useState } from "react";
import api from "globals/ApiService";

const Dashboard = () => {

  const [datas , setDatas] = useState({});

  useEffect(() => {
    (
      async() => {
        const result = await api.getData("http://localhost:2000/getAllData");
          setDatas(result)
      }
    )()
  },[])

  const totalUserOrders = datas?.allOrders?.map((order) => {
    return {
      userId : order?._id
    }
  })
  console.log(totalUserOrders)

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Orders"}
          subtitle={datas?.orders}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Users"}
          subtitle={datas?.users}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Product"}
          subtitle={datas?.products}
        />
      </div>
    </div>
  );
};

export default Dashboard;
