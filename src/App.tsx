import { FC } from "react";
import "./App.css";
import { dataTables } from "./constants";
import DataTable from "./components/DataTables";

const App: FC = () => (
  <div className="tables">
    {dataTables.map(
      (
        { title, classes, data, calculateMean, calculateMedian, calculateMode },
        index
      ) => (
        <DataTable
          key={index}
          title={title}
          classes={classes}
          data={data}
          calculateMean={calculateMean}
          calculateMedian={calculateMedian}
          calculateMode={calculateMode}
        />
      )
    )}
  </div>
);

export default App;
