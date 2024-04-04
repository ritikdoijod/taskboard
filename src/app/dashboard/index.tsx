import Nav from "./nav";
import { DataTableDemo } from "./datatable";

const Dashboard = () => {
  return (
    <div className="px-8 py-6">
      <Nav />
      {/* <Toolbar /> */}
      <DataTableDemo />
    </div>
  );
};

export default Dashboard;
